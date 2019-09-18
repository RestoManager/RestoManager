<?php
    $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $status = $_POST['curStatus'];

    // $ = $_POST[''];

    switch($status) {
        case 'addDetalle':
            $items = $_POST['items'];
            $sql = "INSERT INTO detalle (lista_items) VALUES ('$items')";
            mysqli_query($conexion, $sql);
            break;


        case 'addTotal':
            $compra = $_POST['compra'];
            $propina = $_POST['propina'];
            $mesa = $_POST['mesa'];
            $metodoPago = $_POST['metodoPago'];
            $idDetalle = $_POST['idDetalle'];

            $sql = "INSERT INTO registros_totales (total_compra, total_propina_compra, n_mesa, metodo_pago, registro_items)
                VALUES ('$compra', '$propina', '$mesa', '$metodoPago', '$idDetalle')";
            
            mysqli_query($conexion, $sql);
            break;


        case 'addAperturaCaja':
            
    }
?>