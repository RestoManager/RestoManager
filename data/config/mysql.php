<?php    
    $mysqli = new mysqli('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');

    if ($mysqli->connect_errno) {
        printf("Conexión fallida: %s\n", $mysqli->connect_error);
        exit();
    }
    
    $status = $_POST['curStatus'];