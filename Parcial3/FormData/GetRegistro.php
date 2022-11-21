<?php

$registro["id"]="100";
$registro["nombre"]="Adamaris";
$registro["apellidos"]="Marin Mendoza";
$registro["direccion"]="La Paz 123 Col. Gonzalez";
$registro["telefono"]="8671245693";
$registro["correo"]="adamarismarin34@gmail.com";
$registro["cantidad"]="3";
$registro["tipo"]="Pepperoni";
$registro["tamaño"]="Grande";
$registro["entrega"]="Domicilio";
$registro["pago"]="Tarjeta";

echo json_encode($registro);
?>