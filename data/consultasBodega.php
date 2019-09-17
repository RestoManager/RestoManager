<?php
    $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $status = $_POST['curStatus'];
    
    switch($status) {
        case 'listCategoria':
            $sql = "SELECT * FROM categoria_item ";
            $result = mysqli_query($conexion,$sql);
            
            echo '<option value= 0 > Seleccione Categoria </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }

            break;
        

        case 'listItem':
            $sector = ($_POST['sector'] == 'bodega') ? 1 : 2;
            $idCategoria = $_POST['categoria'];
            $sql = "SELECT * FROM item WHERE id_tipo_item = $sector AND id_categoria_item = '$idCategoria'";
            
            $result = mysqli_query($conexion,$sql);
            
            echo '<option value= 0> Seleccione Item </option>';

            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }

            break;


        case 'listBodega':
            $sector = ($_POST['sector'] == 'bodega') ? 1 : 2;
            $idCategoria = $_POST['categoria'];

            $sql = "SELECT c.nombre AS categoria, it.nombre AS item, t.fecha AS fecha,
                DATEDIFF(t.fecha, CURDATE()) + it.duracion_dias AS 'dias restantes',
                CONCAT(r.en_inventario, ' ', u.sigla) AS cantidad, t.id_tenencia
                FROM tenencia AS t
                INNER JOIN item AS it ON t.id_item = it.id_item
                INNER JOIN categoria_item AS c ON it.id_categoria_item = c.id_categoria_item
                INNER JOIN tipo_item AS ti ON it.id_tipo_item = ti.id_tipo_item
                INNER JOIN unidad AS u ON it.id_unidad = u.id_unidad
                INNER JOIN registro_bodega AS r ON t.id_tenencia = r.id_tenencia
                LEFT JOIN registro_bodega AS r2
                ON r.id_tenencia = r2.id_tenencia AND ((r.id_registro_bodega < r2.id_registro_bodega) 
                    OR (r.id_registro_bodega = r2.id_registro_bodega AND r.id_registro_bodega < r2.id_registro_bodega))
                WHERE r2.id_registro_bodega IS NULL
                AND it.id_tipo_item = '$sector'
                AND c.id_categoria_item = '$idCategoria'
                ORDER BY c.nombre, it.nombre, 'dias restantes' ASC";
            
            $result = mysqli_query($conexion, $sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
                echo '<td>'.utf8_encode($fila[1]).'</td><td>'.$fila[2].'</td><td>'.$fila[3].'</td><td>'.$fila[4].'</td><td><input type="radio" name="itemsel" value='.$fila[5].'></td></tr>';
            }

            break;

        
        case 'comprar':
            $idItem = $_POST['idItem'];
            $cantidad = $_POST['cantidad'];
            $costo = $_POST['costo'];

            $sql = "INSERT INTO tenencia (costo, cantidad, fecha, id_item)
                VALUES ('$costo', '$cantidad', CURDATE(), '$idItem')";
            
            mysqli_query($conexion, $sql);

            break;

        
        case 'producir':
            $idItem = $_POST['idItem'];
            $cantidad = $_POST['cantidad'];

            $sql = "INSERT INTO tenencia (cantidad, fecha, id_item) VALUES ('$cantidad', CURDATE(), '$idItem')";
            
            mysqli_query($conexion, $sql);

            break;

        case 'addTenencia':
            $sector = ($_POST['sector'] == 'bodega') ? 1 : 2;
        
            $sql = "SELECT it.nombre AS item, t.cantidad AS disponible, t.fecha AS fecha, t.id_tenencia
                FROM tenencia AS t
                INNER JOIN item AS it ON t.id_item = it.id_item
                INNER JOIN categoria_item AS c ON it.id_categoria_item = c.id_categoria_item
                WHERE it.id_tipo_item = '$sector'
                AND t.id_tenencia NOT IN (SELECT r.id_tenencia FROM registro_bodega AS r)
                ORDER BY c.nombre, it.nombre ASC";
            
            $result = mysqli_query($conexion, $sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
                echo '<td>'.utf8_encode($fila[0]).'</td><td>'.$fila[1].'</td><td>'.$fila[2].'</td><td><input type="radio" name="itemsel" value='.$fila[3].'></td></tr>';
            }

            break;


        case 'ingresoBodega':
            $idTenencia = $_POST['idTenencia'];
            $cantidad = $_POST['cantidad'];
        
            $sql = "INSERT INTO registro_bodega (cantidad, en_inventario, hora, id_tenencia, id_tipo_registro)
                VALUES ('$cantidad', '$cantidad', CURTIME(), '$idTenencia', 1)";

            mysqli_query($conexion, $sql);

            break;


        case 'waste':
            $idTenencia = $_POST['idTenencia'];
            $cantidad = $_POST['cantidad'];
        
            $sql = "INSERT INTO registro_bodega (cantidad, en_inventario, hora, id_tenencia, id_tipo_registro)
                VALUES ('$cantidad', 
                    (SELECT r.en_inventario FROM registro_bodega AS r WHERE r.id_tenencia = '$idTenencia' ORDER BY r.id_registro_bodega DESC LIMIT 1) - '$cantidad',
                    CURTIME(), '$idTenencia', 3)";

            mysqli_query($conexion, $sql);

            break;


        case 'listWaste':
            $sector = ($_POST['sector'] == 'bodega') ? 1 : 2;
            $idCategoria = $_POST['idCategoria'];
            $año = $_POST['año'];
            $mes = $_POST['mes'];
        
            $sql = "SELECT c.nombre AS categoria, it.nombre AS item, SUM(r.cantidad) AS cantidad
                FROM tenencia AS t
                INNER JOIN item AS it ON t.id_item = it.id_item
                INNER JOIN categoria_item AS c ON it.id_categoria_item = c.id_categoria_item
                INNER JOIN tipo_item AS ti ON it.id_tipo_item = ti.id_tipo_item
                INNER JOIN unidad AS u ON it.id_unidad = u.id_unidad
                LEFT JOIN registro_bodega AS r ON t.id_tenencia = r.id_tenencia
                WHERE r.id_tipo_registro = 3
                AND it.id_tipo_item = '$sector'
                AND c.id_categoria_item = '$idCategoria'
                AND YEAR(t.fecha) = '$año'
                AND MONTH(t.fecha) = '$mes'
                GROUP BY it.nombre
                ORDER BY c.nombre, it.nombre ASC";
            
            $result = mysqli_query($conexion, $sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
                echo '<td>'.utf8_encode($fila[1]).'</td><td>'.$fila[2].'</td><td>'.$fila[3].'</td></tr>';
            }

            break;

        
        case 'retiroBodega':
            $idTenencia = $_POST['idTenencia'];
            $cantidad = $_POST['cantidad'];

            $sql = "INSERT INTO registro_bodega (cantidad, en_inventario, hora, id_tenencia, id_tipo_registro)
                VALUES ('$cantidad', 
                (SELECT r.en_inventario FROM registro_bodega AS r WHERE r.id_tenencia = '$idTenencia' ORDER BY r.id_registro_bodega DESC LIMIT 1) - '$cantidad',
                CURTIME(), '$idTenencia', 2)";
            
            mysqli_query($conexion, $sql);

            break;
    }
?>