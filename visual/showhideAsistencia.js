var status = "";
$(document).ready(function(){

    $('#show-reg-user').click(function(){
        status = "addColaborador";
        $('.RegUser').css('display', 'block');
        $('.AsignarCargo').css('display', 'none');
        $('.RegistroAsistencia').css('display', 'none');
        $('.asistencia').css('display', 'none');
        $('.modificarHorario').css('display','none');

    });

    $('#show-asign-cargo').click(function(){
        $('.RegUser').css('display', 'none');
        $('.AsignarCargo').css('display', 'block');
        $('.RegistroAsistencia').css('display', 'none');
        $('.asistencia').css('display', 'none');
        $('.modificarHorario').css('display','none');
        status = 'listColaborador';

        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {curStatus: status},
            success: function(r){
                $('#nameColaborador').html(r);
            }
        });

        status = 'listCargo';

        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {curStatus: status},
            success: function(r){
                $('#nameCargo').html(r);
            }
        });


    });

    $('#show-reg-asistencia').click(function(){
        $('.RegUser').css('display', 'none');
        $('.AsignarCargo').css('display', 'none');
        $('.RegistroAsistencia').css('display', 'block');
        $('.asistencia').css('display', 'none');
        $('.modificarHorario').css('display','none');


    });

    $('#show-asistencia').click(function(){
        $('.RegUser').css('display', 'none');
        $('.AsignarCargo').css('display', 'none');
        $('.RegistroAsistencia').css('display', 'none');
        $('.asistencia').css('display', 'block');
        $('.modificarHorario').css('display','none');
        
        let canva = document.querySelector('#firmachica');
        let ctxx = canva.getContext('2d');
        ctxx.clearRect(0,0,miCanvas.width,miCanvas.height);
        ctxx.save();
        ctxx.lineJoin = ctxx.lineCap = 'solid';
        ctxx.lineWidth = 90;
        canva.width = 300;
        canva.height = 300;
        // Color de la linea
        ctxx.scale(1,1);
      
        ctxx.beginPath();
        lineas.forEach(function (segmento) {
            ctxx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctxx.lineTo(punto.x, punto.y);
            });
        });
        ctxx.stroke();
        
        ctxx.restore();
    });

    $('#show-modificar-horario').click(function(){
        $('.RegUser').css('display', 'none');
        $('.AsignarCargo').css('display', 'none');
        $('.RegistroAsistencia').css('display', 'none');
        $('.asistencia').css('display', 'none');
        $('.modificarHorario').css('display','block');

        status = "listColaborador";
        $.ajax({
            type: "POST",
            url: "data/consultasColaboradores.php",
            data: {curStatus: status},
            success: function(r){
                $('#nameColaborador2').html(r);
            }


        });

    });


});