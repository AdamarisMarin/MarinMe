<?php
$id=$_POST['id'];
$servidor="localhost";
$basedatos="pedidos";
$usuario="root";
$password="";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die ("No se puede conectar");
$consulta= "Delete from cliente where id='$id'";
$consulta = $con -> prepare($consulta);
$consulta -> execute();
$consulta->closeCursor();
?>