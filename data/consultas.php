<?php
  
    $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    
    $name = $_POST['names'];
    
    $sql = "INSERT INTO categoria_item (nombre) 
    VALUES ('$name')";
    
    echo mysqli_query($conexion,$sql);

?>