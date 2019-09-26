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














});