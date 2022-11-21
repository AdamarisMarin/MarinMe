<?php
//$id = $_POST['id'];

$servidor = "localhost";
$basedatos = "pedidos";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se puede conectar a localhost");
$consulta = "select * from cliente"; 
$registros = mysqli_query($con,$consulta) or die("Problemas en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
mysqli_close($con);
echo json_encode($result);
?>