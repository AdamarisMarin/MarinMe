<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
<?php
       if(isset($_COOKIE['ultvisita'])){
        printf("Su ultima visita fue: %s", $_COOKIE['ultvisita']);
        $fechaHoy = date('d/m/Y H:i:s');
        setcookie("ultvisita", $fechaHoy, time() + (7*24*60*60));
    }
    else {
        printf("No se encontro cookie de ultima visita<br>");
        $fechaHoy = date('d/m/Y H:i:s');
        $siguienteSemana = time()+ (7*24*60*60);
        $fechaExpira = date('d/m/Y H:i:s', $siguienteSemana). '<br>';
        echo '<b>Fecha de Creación de cookie: </b>', $fechaHoy. '<br>';
        echo '<b>Fecha de Vencimiento de cookie: </b>', $fechaExpira. '<br>';
        setcookie("ultvisita", $fechaHoy, time() + (7*24*60*60));
    }  
?>
</body>
</html>