<?php
  
  $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $instance = $_POST['instance'];

    if($instance == 1){

        $sql = "SELECT * FROM categoria_item ";
        $result = mysqli_query($conexion,$sql);
        
        echo '<select id="Categori">';
        echo '<option value= 0 > Seleccione Categoria </option>';
        while($fila = mysqli_fetch_row($result)){
            echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
        }
        echo '</select>';
   }else{
        if($instance == 1){
            $sql = "SELECT * FROM item ";
            $result = mysqli_query($conexion,$sql);
        
            echo '<select id="item">';
            echo '<option value= 0 > Seleccione Item </option>';
            while($fila = mysqli_fetch_row($result)){
            echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
        }
            echo '</select>';
        }
    } 


?>