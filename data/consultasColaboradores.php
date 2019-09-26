<?php
    $conexion = mysqli_connect('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $status = $_POST['curStatus'];

    switch ($status) {
        /*  INSERTS  */

        case 'addColaborador':
            $nombre = $_POST['user_name'];
            $apellidoP = $_POST['user_apellido_paterno'];
            $apellidoM = $_POST['user_apellido_materno'];
            $rut = $_POST['user_rut'];
            $correo = $_POST['user_mail'];

            $sql = "INSERT INTO colaborador (rut, nombre, apellido_paterno, apellido_materno, correo)
                VALUES ('$rut', '$nombre', '$apellidoP', '$apellidoM', '$correo')";

            mysqli_query($conexion, $sql);
            break;


        case 'asignarCargo':
            $idColaborador = $_POST['idColaborador'];
            $idCargo = $_POST['idCargo'];

            $sql = "INSERT INTO colaborador_cargo (id_colaborador, id_cargo)
                VALUES ('$idColaborador', '$idCargo')";

            mysqli_query($conexion, $sql);
            break;


        case 'registroAsistencia':
            $idColaborador = $_POST['idColaborador'];
            $tipo = $_POST['tipo'];
            $idTurno = $_POST['idTurno'];
            $idCargo = $_POST['idCargo'];

            $sql = "INSERT INTO asistencia (id_colaborador, fecha_hora, tipo, id_turno, id_cargo)
                VALUES ('$idColaborador', NOW(), '$tipo', '$idTurno', '$idCargo')";

            mysqli_query($conexion, $sql);
            break;


        /*  UPDATE  */

        case 'modHorario':
            $idColaborador = $_POST['idColaborador'];
            $semana = $_POST['semana'];
            $idDia = $_POST['idDia'];
            $idTurno = $_POST['idTurno'];
            $horaIn = $_POST['horaIn'];
            $horaOut = $_POST['horaOut'];
            $idCargo = $_POST['idCargo'];

            $sql = "";
            if ($idTurno > 0) {
                $sql = "INSERT INTO horario (id_colaborador, semana, id_dia, id_turno, hora_entrada, hora_salida, id_cargo)
                VALUES ('$idColaborador', '$semana', '$idDia', '$idTurno', '$horaIn', '$horaOut', '$idCargo)
                ON DUPLICATE KEY UPDATE id_turno = '$idTurno', hora_entrada = '$horaIn', hora_salida = '$horaOut', id_cargo = '$idCargo'";
            } else {
                $sql = "DELETE FROM horario WHERE (id_colaborador, semana, id_dia) = ('$idColaborador', '$semana', '$idDia')";
            }

            mysqli_query($conexion, $sql);
            break;


        /*  MOSTRAR  */

        case 'verHorario':
            $idColaborador = $_POST['idColaborador'];
            $sql = "SELECT h.semana, d.id_dia, d.nombre, t.nombre, h.hora_entrada, h.hora_salida, c.nombre
                FROM horario AS h
                INNER JOIN dia AS d ON h.id_dia = d.id_dia
                INNER JOIN turno AS t ON h.id_turno = t.id_turno
                INNER JOIN cargo AS c ON h.id_cargo = c.id_cargo
                INNER JOIN colaborador_cargo AS nub ON h.id_colaborador = nub.id_colaborador 
                WHERE h.id_colaborador = '$idColaborador'
                ORDER BY h.semana, d.id_dia, h.hora_entrada";
            
            $result = mysqli_query($conexion, $sql);

            $fila = mysqli_fetch_row($result) ?? [0, 0];
            $idFila = 0;
            for ($i=0; $i < 2; $i++) {
                echo '<div class="title">Semana'.($i + 1).'</div>';
                for ($j = 1; $j <= 7; $j++) {
                    $idFila++;
                    if ($fila[0] == $i && $fila[1] == j) {
                        echo '<tr id="fila'.$idFila.'">
                                <td>'.$fila[0].'</td>
                                <td>'.utf8_encode($fila[2]).'</td>
                                <td>'.utf8_encode($fila[3]).'</td>
                                <td>'.$fila[4].'</td>
                                <td>'.$fila[5].'</td>
                                <td>'.utf8_encode($fila[6]).'</td>
                                <td><button class="btn btn-danger" onclick="modHorario('.$i.', '.$j.')">+</button></td>
                            </tr>';
                        $fila = mysqli_fetch_row($result);
                    } else {
                        echo '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-danger" onclick="modHorario('.$i.', '.$j.', '.$idFila.')">+</button></td></tr>';
                    }
                }
            }
            break;


        /*  LIST  */

        case 'listColaborador':
            $sql = "SELECT id_colaborador, CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno) AS colaborador FROM colaborador";
            $result = mysqli_query($conexion, $sql);
            
            echo '<option value= 0> Seleccione Colaborador </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;


        case 'listCargo':
            $sql = "SELECT * FROM cargo";
            $result = mysqli_query($conexion, $sql);
            
            echo '<option value= 0> Seleccione Cargo </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;


        case 'listCargoColaborador':
            $idColaborador = $_POST['idColaborador'];
            $sql = "SELECT car.id_cargo, car.nombre FROM cargo AS car
                INNER JOIN colaborador_cargo AS nub ON car.id_cargo = nub.id_cargo
                WHERE nub.id_colaborador = '$idColaborador'";
            $result = mysqli_query($conexion, $sql);
            
            echo '<option value= 0> Seleccione Cargo </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;

        
        case 'listDia':
            $sql = "SELECT * FROM dia";
            $result = mysqli_query($conexion, $sql);
            
            echo '<option value= 0> Seleccione Día </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;

        
        case 'listTurno':
            $sql = "SELECT * FROM turno";
            $result = mysqli_query($conexion, $sql);
            
            echo '<option value= 0> Seleccione Turno </option>';
            while($fila = mysqli_fetch_row($result)){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;
    }

                /* boceto consulta trabajador:

                $sql = "SELECT car.id_cargo,
                CONCAT(col.nombre, ' ', col.apellido_paterno, ' ', col.apellido materno) AS nombre,
                car.nombre AS cargo FROM colaborador AS col INNER JOIN colaborador_cargo AS nub INNER JOIN cargo AS car
                WHERE col.id_colaborador = nub.id_colaborador AND car.id_cargo = nub.id_cargo";
                */
?>