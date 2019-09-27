var idWeek = 0;
var idDay = 0;
$(document).ready(function(){

    $('#enviarNewUser').click(function(){

        var name = $('#user_name').val();
        var apellidoPaterno = $('#user_apellido_paterno').val();
        var apellidoMaterno = $('#user_apellido_materno').val();
        var rut = $('#user_rut').val();
        var mail = $('#user_mail').val();
        alert('YA');
        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {user_name: name,
                user_apellido_paterno: apellidoPaterno,
                user_apellido_materno: apellidoMaterno,
                user_rut: rut,
                user_mail: mail,
                curStatus: status},
            success: function(){
                alert('BIEN HECHO');
            }
        });
       
    });

    $('#asignarCargo').click(function(){

        var idCol = $('#nameColaborador').val();
        var idCargo = $('#nameCargo').val();
        status = "asignarCargo";

        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {idColaborador: idCol, idCargo: idCargo, curStatus: status},
            success: function(){
                alert('Cargo Asignado!');
            }

        });

    });

    $('#nameColaborador2').change(function(){
        status = "verHorario";
        var idCol = this.value;
        $('#tablaHorario').html('');

        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {curStatus: status, idColaborador: idCol},
            success: function(r){
                $('#tablaHorario').html(r);
            }


        });


    });

    
    $('#enviarModHorario').click(function(){
        status = "modHorario";
        var horaEntrada = $('#horaEntrada').val();
        var horaSalida = $('#horaSalida').val();
        var Cargo = $('#nameCargo2').val();
        var Turno = $('#nameTurno').val();
        var idCol = $('#nameColaborador2').val();

        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {
                curStatus: status,
                idColaborador: idCol,
                semana: idWeek,
                idDia: idDay,
                idTurno: Turno,
                horaIn: horaEntrada,
                horaOut: horaSalida,
                idCargo: Cargo
            },
            success: function(){
                alert('horario Modificado exitosamente!');
            }
        });

        $('#show-modificar-horario').click();



    });













});

function modHorario(semana, idDia){
    idWeek = semana;
    idDay = idDia;
    
    

    $('#modTurno').css('display', 'block');
    status = "listCargoColaborador";
    var idCol = $('#nameColaborador2').val();
    $.ajax({
        type: "POST",
        url: "data/consultasColaboradores.php",
        data: {curStatus: status, idColaborador: idCol},
        success: function(r){
            $('#nameCargo2').html(r);
        }
    });
    status = "listTurno";
    $.ajax({
        type: "POST",
        url: "data/consultasColaboradores.php",
        data: {curStatus: status},
        success: function(r){
            $('#nameTurno').html(r);
        }
    });


}