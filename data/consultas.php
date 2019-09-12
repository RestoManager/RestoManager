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
            $sql = "SELECT * FROM item WHERE id_categoria_item = '$idItem' ";
            $result = mysqli_query($conexion,$sql);
        
            echo '<tr>';
            
            while($fila = mysqli_fetch_row($result)){
            echo '<td>'.utf8_encode($fila[1]).'</td><td>12/09</td><td>5 dias</td><td>20</td></tr>';
        }
            
        }
    } 


?>