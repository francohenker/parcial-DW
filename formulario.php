<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $asunto = htmlspecialchars($_POST["asunto"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    echo "<p>Gracias $nombre por contactarte por '$asunto'. Te responderemos pronto.</p>";
} else {
    echo "<p>Hubo un error al procesar tu formulario.</p>";
}
?>
