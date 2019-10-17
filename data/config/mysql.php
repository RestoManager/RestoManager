    $mysqli = new mysqli('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');

    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    
    $status = $_POST['curStatus'];