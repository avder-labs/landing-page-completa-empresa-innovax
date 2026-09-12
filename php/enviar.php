<?php
// Carga del archivo de configuraciones base (Constantes del servidor y correo)
require_once __DIR__ . '/config.php';

// Encabezado que define la respuesta en formato JSON estructurado en codificación UTF-8
header('Content-Type: application/json; charset=utf-8');

/**
 * Función auxiliar para enviar respuestas estandarizadas JSON y finalizar la ejecución
 * @param bool $success Indica si la operación fue exitosa
 * @param string $message Mensaje descriptivo del resultado
 */
function responder($success, $message) {
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Control de seguridad: Garantizar que el método utilizado sea estrictamente POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    responder(false, 'Método no permitido.');
}

// SISTEMA ANTISPAM (Honeypot): Si el campo oculto 'empresa_web' tiene algún valor, se descarta como Bot
if (!empty($_POST['empresa_web'])) {
    responder(true, 'Gracias, tu mensaje fue enviado.');
}

/**
 * Función de sanitización de entradas para prevenir inyecciones de cabeceras o código malicioso
 * @param string|null $valor Cadena a limpiar
 * @return string Cadena limpia y segura
 */
function limpiar($valor) {
    $valor = trim($valor ?? '');
    $valor = str_replace(["\r", "\n"], ' ', $valor);
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

// Captura y sanitización de los campos enviados por el formulario
$nombre   = limpiar($_POST['nombre']   ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$email    = trim($_POST['email']       ?? '');
$servicio = limpiar($_POST['servicio'] ?? '');
$mensaje  = trim($_POST['mensaje']     ?? '');

// Validación de campos obligatorios
if ($nombre === '' || $telefono === '' || $email === '' || $servicio === '' || $mensaje === '') {
    responder(false, 'Todos los campos son obligatorios.');
}

// Validación del formato del correo electrónico enviado por el usuario
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(false, 'El correo electrónico no es válido.');
}

// Control de longitud máxima para prevenir sobrecarga en el envío del mensaje
if (mb_strlen($mensaje) > 3000) {
    responder(false, 'El mensaje es demasiado largo.');
}

// Eliminación de etiquetas HTML y formateo seguro del mensaje del usuario
$mensajeLimpio = htmlspecialchars(strip_tags($mensaje), ENT_QUOTES, 'UTF-8');

// Definición de variables clave para el correo de destino y codificación segura del asunto en Base64
$para     = DESTINO_EMAIL;
$asunto   = '=?UTF-8?B?' . base64_encode(ASUNTO_BASE . ' — ' . $nombre) . '?=';
$fecha    = date('d/m/Y H:i');

// Estructura del cuerpo del mensaje enviado en formato texto plano
$cuerpo  = "NUEVA SOLICITUD DE COTIZACIÓN - INNOVAX INGENIEROS\n";
$cuerpo .= "--------------------------------------------------\n\n";
$cuerpo .= "Nombre completo: {$nombre}\n";
$cuerpo .= "Teléfono:        {$telefono}\n";
$cuerpo .= "Correo:          {$email}\n";
$cuerpo .= "Servicio:        {$servicio}\n";
$cuerpo .= "Fecha/Hora:      {$fecha}\n\n";
$cuerpo .= "Detalles del proyecto / Mensaje:\n";
$cuerpo .= "{$mensajeLimpio}\n";

// Definición del remitente oficial usando la constante del dominio
$remitente = 'no-reply@' . DOMINIO_SITIO;

// Encabezados MIME técnicos del protocolo de correo de PHP
$headers  = "From: " . DESTINO_NOMBRE . " <{$remitente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Ejecución del envío mediante la función mail() nativa de PHP
$enviado = @mail($para, $asunto, $cuerpo, $headers);

// Verificación del resultado del envío y respuesta final enviada al frontend
if ($enviado) {
    $primerNombre = explode(' ', $nombre)[0];
    responder(true, 'Gracias, ' . $primerNombre . '. Tu solicitud fue enviada exitosamente, te contactaremos pronto.');
} else {
    responder(false, 'No se pudo enviar el mensaje. Inténtalo más tarde o contáctanos por WhatsApp.');
}