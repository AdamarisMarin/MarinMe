<?php
$id=$_POST['idC'];
$Nombre=$_POST['Nombre'];
$Apellidos=$_POST['Apellidos'];
$Direccion=$_POST['Direccion'];
$Telefono=$_POST['Telefono'];
$Correo=$_POST['Correo'];
$Cantidad=$_POST['Cantidad'];
$Tipo=$_POST['Tipo'];
$Tamano=$_POST['Tamano'];
$Entrega=$_POST['Entrega'];
$Pago=$_POST['Pago'];
$servidor="localhost";
$basedatos="pedidos";
$usuario="root";
$password="";


$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die ("No se puede conectar");
$consulta= "Update cliente set id='$id', nombre='$Nombre', apellidos='$Apellidos', direccion='$Direccion',telefono='$Telefono',correo='$Correo',cantidad='$Cantidad',
tipo='$Tipo',tamano='$Tamano', entrega='$Entrega', pago='$Pago' WHERE  id='$id'" ;
$consulta = $con -> prepare($consulta);
$consulta -> execute();
$consulta->closeCursor();
?>