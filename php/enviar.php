<?php
/* ==========================================================================
   SISTEMA DE PROCESAMIENTO DE FORMULARIOS Y ENVÍO DE CORREOS - INNOVAX
   Desarrollado y Diseñado por: [Andrea Alva Chávez / AVDER Digital Solutions]
   Contacto: [+51 940 723 763] | Gmail: [avder.contact@gmail.com]
   Tiktok - Instagram: [@avder.digital]
   Fecha: 11/09/2026
   ========================================================================== */

// Importación de la configuración general e insumos globales (variables, constantes)
require_once __DIR__ . '/config.php';

// Definición de cabeceras HTTP para garantizar la respuesta en formato JSON con codificación UTF-8
header('Content-Type: application/json; charset=utf-8');

/**
 * Función auxiliar para retornar respuestas en formato JSON e interrumpir la ejecución del script.
 * 
 * @param bool   $success Estado de la respuesta (true/false).
 * @param string $message Mensaje informativo para el cliente.
 */
function responder($success,$message) {
    echo json_encode(['success' => $success, 'message' =>$message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Verificación del método de solicitud HTTP (Solo se permite POST)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    responder(false, 'Método no permitido.');
}

// Mecanismo Antispam Honeypot (Si el campo oculto contiene datos, se descarta la solicitud en silencio)
if (!empty($_POST['empresa_web'])) {
    responder(true, 'Gracias, tu mensaje fue enviado.');
}

/**
 * Función para limpiar y sanitizar cadenas de texto simples.
 * 
 * @param  string|null $valor Cadena a procesar.
 * @return string Cadena saneada sin saltos de línea ni caracteres especiales HTML.
 */
function limpiar($valor) {
    $valor = trim($valor ?? '');
    $valor = str_replace(["\r", "\n"], ' ', $valor);
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

// Captura y saneamiento preliminar de los campos recibidos vía POST
$nombre   = limpiar($_POST['nombre']   ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$email    = trim($_POST['email']       ?? '');
$servicio = limpiar($_POST['servicio'] ?? '');
$mensaje  = trim($_POST['mensaje']     ?? '');

// Validación de campos obligatorios
if ($nombre === '' || $telefono === '' \vert{}\vert{}$email === '' || $servicio === '' \vert{}\vert{}$mensaje === '') {
    responder(false, 'Todos los campos son obligatorios.');
}

// Validación de formato de correo electrónico
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(false, 'El correo electrónico no es válido.');
}

// Validación de longitud máxima del mensaje
if (mb_strlen($mensaje) > 3000) {
    responder(false, 'El mensaje es demasiado largo.');
}

// Saneamiento de seguridad para el cuerpo del mensaje (Eliminación de etiquetas HTML/PHP)
$mensajeLimpio = htmlspecialchars(strip_tags($mensaje), ENT_QUOTES, 'UTF-8');

// Configuración de variables para el armado del correo electrónico
$para     = DESTINO_EMAIL;
$asunto   = '=?UTF-8?B?' . base64_encode(ASUNTO_BASE . ' — ' . $nombre) . '?=';$fecha    = date('d/m/Y H:i');

// Estructuración del cuerpo del correo electrónico en texto plano
$cuerpo  = "NUEVA SOLICITUD DE COTIZACIÓN - INNOVAX INGENIEROS\n";
$cuerpo .= "--------------------------------------------------\n\n";
$cuerpo .= "Nombre completo: {$nombre}\n";
$cuerpo .= "Teléfono:        {$telefono}\n";
$cuerpo .= "Correo:          {$email}\n";
$cuerpo .= "Servicio:        {$servicio}\n";
$cuerpo .= "Fecha/Hora:      {$fecha}\n\n";
$cuerpo .= "Detalles del proyecto / Mensaje:\n";
$cuerpo .= "{$mensajeLimpio}\n";

// Definición de remitente y cabeceras técnicas para la función mail()
$remitente = 'no-reply@' . DOMINIO_SITIO;

$headers  = "From: " . DESTINO_NOMBRE . " <{$remitente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intento de envío de correo mediante la función nativa mail() de PHP
$enviado = @mail($para,$asunto, $cuerpo,$headers);

// Respuesta al cliente según el resultado de la operación de envío
if ($enviado) {
    $primerNombre = explode(' ',$nombre)[0];
    responder(true, 'Gracias, ' . $primerNombre . '. Tu solicitud fue enviada exitosamente, te contactaremos pronto.');
} else {
    responder(false, 'No se pudo enviar el mensaje. Inténtalo más tarde o contáctanos por WhatsApp.');
}