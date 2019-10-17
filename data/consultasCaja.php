<?php
    require 'config/mysql.php';

    switch ($status) {
        /*  INSERTS  */

        case 'addDetalle':
            $items = $_POST['items'];
            $query = "INSERT INTO detalle (lista_items) VALUES ('$items');";
            $query .= "SELECT id_compra FROM detalle ORDER BY id_compra DESC LIMIT 1";

            $mysqli->multi_query($query);
            $mysqli->next_result();
            $res = $mysqli->use_result();
            $fila = $result->fetch_row();
            $result->close();

            echo $fila[0];
            break;


        case 'addTotal':
            $total = $_POST['total'];
            $propina = $_POST['propina'];
            $mesa = $_POST['mesa'];
            $metodoPago = $_POST['metodoPago'];
            $idDetalle = $_POST['idDetalle'];

            $mysqli->query("INSERT INTO registros_totales (total_compra, total_propina_compra, n_mesa, metodo_pago, registro_items)
                VALUES ('$compra', '$propina', '$mesa', '$metodoPago', '$idDetalle')");
            break;


        /*  LITS  */

        case 'listMetodo':
            $mysqli->query("SELECT * FROM metodo_pago");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione método de pago </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.$fila[1].'</option>';
            }
            break;
    }

    $mysqli->close();
?>