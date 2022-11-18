<?php
$servidor = "localhost";
$basedatos = "pedidos";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se puede conectar a localhost");
$consulta = "select * from cliente"; 
$registros = mysqli_query($con,$consulta) or die("Problemas en el select");

while($reg = mysqli_fetch_array($registros, MYSQLI_ASSOC)){
    printf($reg['id'].'&nbsp&nbsp&nbsp'.$reg['nombre'].' '.$reg['apellidos'].'&nbsp&nbsp&nbsp&nbsp&nbsp'.$reg['direccion'].'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'.$reg['telefono'].'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'.$reg['correo'].'<br>');
}

//$result = mysqli_fetch_all($registros);
//mysqli_close($con);
//echo json_encode($result);
?>