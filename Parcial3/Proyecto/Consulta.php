<?php

$id= $_POST['idC'];  
$servidor="localhost";
$basedatos="pedidos";
$usuario="root";
$password="";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die ("No se puede conectar");
$consulta="select * from cliente where id='$id'";
$registros= mysqli_query($con,$consulta) or die("problemas");

$result= mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);

?>