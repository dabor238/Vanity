<?php
	
	if (isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
		isset($_POST["apellido"]) && !empty($_POST["apellido"]) &&
		isset($_POST["email"]) && !empty($_POST["email"]) &&
		isset($_POST["telefono"]) && !empty($_POST["telefono"]) &&
		isset($_POST["cedula"]) && !empty($_POST["cedula"]) &&
		isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){

		$nombre = $_POST["nombre"] . " " . $_POST["apellido"];
		$email = $_POST["email"];
		$telefono = $_POST["telefono"];
		$cedula = $_POST["cedula"];
		$mensaje = $_POST["mensaje"];
		$destino = "eduardo.aemc@gmail.com";

		$titulo = "Mensaje en enviado atraves del formulario contacto.";
		$contenido = '

			<html>
				<head>
					<title>' . $titulo . '</title>
				</head>
				<body>
					<h1>Haz recibido un mensaje del formulario contacto de doctorapatriciacoello.com.ec</h1>
					<p>El visitante ' . $nombre . ' con la siguente cedula ' . $cedula . ' te ha enviado el siguiente mensaje:</p>
					<p>Mensaje: ' . $mensaje . ' <br><br> Puedes ponerte en contacto al email: ' . $email . '</p>
					<hr>
					<p>Este mensaje ha sido generado automaticamente desde doctorapatriciacoello.com.ec</p>
				</body>
			</html>

		';
		$encabezado = "MINE-Version: 1.0\r\n";
		$encabezado .= "Content-type: text/html; charset=UTF-8\r\n";
		$encabezado .= "From: doctorapatriciacoello.com.ec <no-reply@doctorapatriciacoello.com.ec/>\r\n";
		$encabezado .= "Reply-To: no-reply@doctorapatriciacoello.con.ec\r\n";

		mail($destino, $titulo, $contenido, $encabezado);

		header("location: ../index.html");

	} else {

		header("location: ../contacto.html");

	}

?>