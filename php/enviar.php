<?php
/**
 * enviar.php — Procesa el formulario de contacto usando mail() nativo de PHP.
 */

require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

function responder($success, $message) {
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    responder(false, 'Método no permitido.');
}

// Campo Honeypot anti-spam (debe estar vacío)
if (!empty($_POST['empresa_web'])) {
    responder(true, 'Gracias, tu mensaje fue enviado.');
}

// Función de limpieza de entradas
function limpiar($valor) {
    $valor = trim($valor ?? '');
    $valor = str_replace(["\r", "\n"], ' ', $valor);
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

// Recibir y limpiar datos del formulario
$nombre   = limpiar($_POST['nombre']   ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$email    = trim($_POST['email']       ?? '');
$servicio = limpiar($_POST['servicio'] ?? '');
$mensaje  = trim($_POST['mensaje']     ?? '');

// Validaciones del servidor
if ($nombre === '' || $telefono === '' || $email === '' || $servicio === '' || $mensaje === '') {
    responder(false, 'Todos los campos son obligatorios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(false, 'El correo electrónico no es válido.');
}

if (mb_strlen($mensaje) > 3000) {
    responder(false, 'El mensaje es demasiado largo.');
}

$mensajeLimpio = htmlspecialchars(strip_tags($mensaje), ENT_QUOTES, 'UTF-8');

// Configuración y construcción del mensaje de correo
$para     = DESTINO_EMAIL;
$asunto   = '=?UTF-8?B?' . base64_encode(ASUNTO_BASE . ' — ' . $nombre) . '?=';
$fecha    = date('d/m/Y H:i');

$cuerpo  = "NUEVA SOLICITUD DE COTIZACIÓN - INNOVAX INGENIEROS\n";
$cuerpo .= "--------------------------------------------------\n\n";
$cuerpo .= "Nombre completo: {$nombre}\n";
$cuerpo .= "Teléfono:        {$telefono}\n";
$cuerpo .= "Correo:          {$email}\n";
$cuerpo .= "Servicio:        {$servicio}\n";
$cuerpo .= "Fecha/Hora:      {$fecha}\n\n";
$cuerpo .= "Detalles del proyecto / Mensaje:\n";
$cuerpo .= "{$mensajeLimpio}\n";

$remitente = 'no-reply@' . DOMINIO_SITIO;

// Cabeceras HTTP para envío correcto de correo en ArequipaHost/cPanel
$headers  = "From: " . DESTINO_NOMBRE . " <{$remitente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envío a través de la función nativa de PHP
$enviado = @mail($para, $asunto, $cuerpo, $headers);

if ($enviado) {
    $primerNombre = explode(' ', $nombre)[0];
    responder(true, 'Gracias, ' . $primerNombre . '. Tu solicitud fue enviada exitosamente, te contactaremos pronto.');
} else {
    responder(false, 'No se pudo enviar el mensaje. Inténtalo más tarde o contáctanos por WhatsApp.');
}