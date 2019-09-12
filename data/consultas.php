<?php
  
  $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $instance = $_POST['instance'];

    if($instance == 1){

        $sql = "SELECT * FROM categoria_item ";
        $result = mysqli_query($conexion,$sql);
        
       
        echo '<option value= 0 > Seleccione Categoria </option>';
        while($fila = mysqli_fetch_row($result)){
            echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
        }
       
   }else{
       if($instance == 2){
            $idItem = $_POST['categoria'];

            $sql = "SELECT c.nombre AS categoria, it.nombre AS item, t.fecha AS fecha,
            DATEDIFF(t.fecha, CURDATE()) + it.duracion_dias AS 'dias restantes',
            CONCAT(r.en_inventario, ' ', u.sigla) AS cantidad
        FROM tenencia t
            INNER JOIN item it ON t.id_item = it.id_item
            INNER JOIN categoria_item c ON it.id_categoria_item = c.id_categoria_item
            INNER JOIN tipo_item ti ON it.id_tipo_item = ti.id_tipo_item
            INNER JOIN unidad u ON it.id_unidad = u.id_unidad
            LEFT JOIN registro_bodega r ON t.id_tenencia = r.id_tenencia
            LEFT JOIN inicio_bodega ini ON t.id_tenencia = ini.id_tenencia
            WHERE t.fecha IN (SELECT max(t.fecha) FROM registro_bodega r)
            AND c.id_categoria_item = '$idItem'
            ORDER BY c.nombre ASC ";
            
            $result = mysqli_query($conexion,$sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
                echo '<td>'.utf8_encode($fila[1]).'</td><td>'.$fila[2].'</td><td>'.$fila[3].'</td><td>'.$fila[4].'</td></tr>';
            }
            
        }
    } 


?>