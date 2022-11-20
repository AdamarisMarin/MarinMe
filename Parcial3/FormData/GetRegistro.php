<?php
$id = $_POST=['id'];
//$idC = "";
$servidor = "localhost";
$basedatos = "pedidos";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("no se pudo conectar a local host");
$consulta = "select * from cliente where id=\"$id\""; 
$registros = mysqli_query($con,$consulta) or die ("problemas en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>