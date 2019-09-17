<?php
  
  $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $instance = $_POST['instance'];

    if($instance == 1){
        // Llena Select
        $sql = "SELECT * FROM categoria_item ";
        $result = mysqli_query($conexion,$sql);
        
       
        echo '<option value= 0 > Seleccione Categoria </option>';
        while($fila = mysqli_fetch_row($result)){
            echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
        }
       
   }else{
       //Muestra la lista de la bodega

       $status = $_POST['stat'];
       
       if($instance == 2 && $status == 'mostrando'){
        $idItem = $_POST['categoria'];

            $sql = "SELECT c.nombre AS categoria, it.nombre AS item, t.fecha AS fecha,
            DATEDIFF(t.fecha, CURDATE()) + it.duracion_dias AS 'dias restantes',
            CONCAT(r.en_inventario, ' ', u.sigla) AS cantidad, t.id_tenencia
        FROM tenencia t
            INNER JOIN item it ON t.id_item = it.id_item
            INNER JOIN categoria_item c ON it.id_categoria_item = c.id_categoria_item
            INNER JOIN tipo_item ti ON it.id_tipo_item = ti.id_tipo_item
            INNER JOIN unidad u ON it.id_unidad = u.id_unidad
            LEFT JOIN registro_bodega r ON t.id_tenencia = r.id_tenencia
            
            LEFT JOIN registro_bodega r2
                ON r.id_tenencia = r2.id_tenencia AND ((r.id_registro_bodega < r2.id_registro_bodega) 
                    OR (r.id_registro_bodega = r2.id_registro_bodega AND r.id_registro_bodega < r2.id_registro_bodega))
                    WHERE r2.id_registro_bodega IS NULL
            AND c.id_categoria_item = '$idItem'
            ORDER BY c.nombre, it.nombre ASC ";
            
            $result = mysqli_query($conexion,$sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
                echo '<td>'.utf8_encode($fila[1]).'</td><td>'.$fila[2].'</td><td>'.$fila[3].'</td><td>'.$fila[4].'</td><td><input type="radio" name="itemsel" id="itemradio" value='.$fila[5].'></td></tr>';

            }
        }else{
            // Carga el select con items en compra
               if($instance == 2 && $status == 'comprando'){
                   
                $idItem = $_POST['categoria'];

                   $sql = "SELECT * FROM item WHERE id_categoria_item = '$idItem'";
                    
                    $result = mysqli_query($conexion,$sql);
                
                   echo '<option value= 0 > Seleccione Item </option>';

                   while($fila = mysqli_fetch_row($result)){
                       echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
                   }
                    
    
                }
            
        } 
    }
    $vuelta = $_POST['vuelta'];
    if($instance == 3 && $vuelta == 0){
        $idItem = $_POST['idItem'];
        $costo = $_POST['costo'];
        $cantidad = $_POST['cuanto'];

        
        $sql = " INSERT INTO tenencia (costo, fecha, id_item) VALUES ('$costo', CURDATE(), '$idItem')";
        mysqli_query($conexion,$sql);
        
    }else{
        if($instance == 3 && $vuelta == 1){
            $idItem = $_POST['idItem'];
        $costo = $_POST['costo'];
        $cantidad = $_POST['cuanto'];

        
        $sql = " INSERT INTO registro_bodega (cantidad, en_inventario, hora, id_tenencia, id_tipo_registro)
            VALUES ('$cantidad', '$cantidad', CURTIME(),
                (SELECT t.id_tenencia FROM tenencia t WHERE t.id_item = '$idItem' ORDER BY t.id_tenencia DESC LIMIT 1), 1)";
        mysqli_query($conexion,$sql);
        
        }
    }


?>