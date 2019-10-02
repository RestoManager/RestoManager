<?php
    $mysqli = new mysqli('localhost', 'cac52927', 'sW{EXpAvPG$3L:h', 'cac52927_Pruebas');
    $status = $_POST['curStatus'];

    switch ($status) {
        /*  INSERTS  */

        case 'addColaborador':
            $rut = $_POST['rut'];
            $nombre = $_POST['nombre'];
            $apellidoP = $_POST['apellidoP'];
            $apellidoM = $_POST['apellidoM'];
            $correo = $_POST['correo'];

            $mysqli->query("INSERT INTO colaborador (rut, nombre, apellido_paterno, apellido_materno, correo)
                VALUES ('$rut', '$nombre', '$apellidoP', '$apellidoM', '$correo')");
            break;


        case 'asignarCargo':
            $idColaborador = $_POST['idColaborador'];
            $idCargo = $_POST['idCargo'];

            $mysqli->query("INSERT INTO colaborador_cargo (id_colaborador, id_cargo)
                VALUES ('$idColaborador', '$idCargo')");
            break;


        case 'registroAsistencia':
            $idColaborador = $_POST['idColaborador'];
            $tipo = $_POST['tipo'];
            $idTurno = $_POST['idTurno'];
            $idCargo = $_POST['idCargo'];

            $mysqli->query("INSERT INTO asistencia (id_colaborador, fecha_hora, tipo, id_turno, id_cargo)
                VALUES ('$idColaborador', NOW(), '$tipo', '$idTurno', '$idCargo')");
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

            if ($idTurno > 0) {
                $mysqli->query("INSERT INTO horario (id_colaborador, semana, id_dia, id_turno, hora_entrada, hora_salida, id_cargo)
                VALUES ('$idColaborador', '$semana', '$idDia', '$idTurno', '$horaIn', '$horaOut', '$idCargo')
                ON DUPLICATE KEY UPDATE id_turno = '$idTurno', hora_entrada = '$horaIn', hora_salida = '$horaOut', id_cargo = '$idCargo'");
            } else {
                $mysqli->query("DELETE FROM horario WHERE (id_colaborador, semana, id_dia) = ('$idColaborador', '$semana', '$idDia')");
            }
            break;


        /*  MOSTRAR  */

        case 'verHorario':
            $idColaborador = $_POST['idColaborador'];
            $mysqli->query("SELECT DISTINCT h.semana, d.id_dia, t.nombre, h.hora_entrada, h.hora_salida, c.nombre
                FROM horario AS h
                INNER JOIN dia AS d ON h.id_dia = d.id_dia
                INNER JOIN turno AS t ON h.id_turno = t.id_turno
                INNER JOIN cargo AS c ON h.id_cargo = c.id_cargo
                INNER JOIN colaborador_cargo AS nub ON h.id_colaborador = nub.id_colaborador 
                WHERE h.id_colaborador = '$idColaborador'
                ORDER BY h.semana, d.id_dia, h.hora_entrada");
            
            $res = $mysqli->use_result();

            $fila = $res->fetch_array() ?? [0, 0];
            $dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
            for ($i=0; $i < 2; $i++) {
                echo '<div class="title">Semana '.($i + 1).'</div>
                    <table class="table">
                    <tr>
                        <th>Día</th>
                        <th>Turno</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Cargo</th>
                        <th>Modificar</th>
                    </tr>';
                for ($j = 1; $j <= 7; $j++) {
                    echo '<tr><td>'.$dias[$j - 1].'</td>';
                    if ($fila[0] == $i && $fila[1] == $j) {
                        echo '<td>'.utf8_encode($fila[2]).'</td>
                            <td>'.$fila[3].'</td>
                            <td>'.$fila[4].'</td>
                            <td>'.utf8_encode($fila[5]).'</td>
                            <td><button class="btn btn-danger modificarTurno"
                                onclick="modHorario('.$i.', '.$j.')">+</button></td>
                            </tr>';
                        $fila = mysqli_fetch_row($result);
                    } else {
                        echo '<td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td><button class="btn btn-danger modificarTurno" onclick="modHorario('.$i.', '.$j.')">+</button></td>
                            </tr>';
                    }
                }
                echo '</table>';
            }
            break;


        case 'verAsistencia':
            $idColaborador = $_POST['idColaborador'];
            $año = $_POST['año'];
            $mes = $_POST['mes'];
            $mysqli->query("SELECT a.fecha_hora AS fecha, a.semana, TIME(a.fecha_hora) AS hora, a.firma, a.tipo, c.nombre AS cargo, p.monto
                FROM asistencia AS a
                INNER JOIN cargo AS c ON a.id_cargo = c.id_cargo
                INNER JOIN propinas AS p ON h.id_colaborador = p.id_colaborador
                INNER JOIN cierre_caja AS cierre ON p.id_cierre_caja = cierre.id_cierre_caja
                INNER JOIN apertura_caja AS apertura ON cierre.id_apertura_caja = apertura.id_apertura_caja
                INNER JOIN venta_dia AS v ON apertura.id_apertura_caja = v.apertura_mañana OR apertura.id_apertura_caja = v.apertura_tarde
                WHERE a.id_colaborador = '$idColaborador' AND MONTH(fecha) = '$mes'
                ORDER BY a.id_asistencia DESC");

            $res = $mysqli->use_result();
            $i = 0;
            while($fila = $res->fetch_assoc()){
                if ($fila['tipo'] == 0) {
                    $fila{$i} = ['fecha' => $fila['fecha'], 'semana' => $fila['semana'], 'horaIn' => $fila['hora'], 'firmaIn' => $fila['firma']];
                } else {
                    $fila{$i} = ['horaOut' => $fila['hora'], 'firmaOut' => $fila['firma'], 'cargo' => $fila['cargo'], $fila['monto']];
                    $i++;
                }
            }

            $fecha = mktime(0, 0, 0, $mes, 1, $año);
            $largoMes = date('t', $fecha);
            $dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

            for ($i = 0, $j = 0; $i < $largoMes; $i++) { 
                echo '<tr><td>'.$dias[date('w', $fecha)].' '.date('d', $fecha).'</td>';

                if ($fecha == strtotime($fila{$j}['fecha'])) {
                    $atraso;
                    $hrsExtra;

                    echo '<td>'.$fila{$j}['horaIn'].'</td>
                        <td>'.$fila{$j}['firmaIn'].'</td>
                        <td>'.$fila{$j}['horaOut'].'</td>
                        <td>'.$fila{$j}['firmaOut'].'</td>
                        <td>'.$fila{$j}['cargo'].'</td>
                        <td>'.$atraso.'</td>
                        <td>'.$hrsExtra.'</td>
                        <td>'.$fila{$j}['monto'].'</td></tr>';
                    $j++;
                } else {
                    # code...
                }

                $fecha = strtotime('+1 day', $fecha);
            }
            break;


        /*  LIST  */

        case 'listColaborador':
            $mysqli->query("SELECT id_colaborador, CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno) AS colaborador FROM colaborador");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione Colaborador </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;


        case 'listCargo':
            $mysqli->query("SELECT * FROM cargo");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione Cargo </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;


        case 'listCargoColaborador':
            $idColaborador = $_POST['idColaborador'];
            $mysqli->query("SELECT car.id_cargo, car.nombre FROM cargo AS car
                INNER JOIN colaborador_cargo AS nub ON car.id_cargo = nub.id_cargo
                WHERE nub.id_colaborador = '$idColaborador'");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione Cargo </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;

        
        case 'listDia':
            $mysqli->query("SELECT * FROM dia");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione Día </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;

        
        case 'listTurno':
            $mysqli->query("SELECT * FROM turno");
            $res = $mysqli->use_result();
            
            echo '<option value= 0> Seleccione Turno </option>';
            while($fila = $res->fetch_array()){
                echo '<option value='.$fila[0].'>'.utf8_encode($fila[1]).'</option>';
            }
            break;
    }
?>