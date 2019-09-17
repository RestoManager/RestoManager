
var curStatus = "";
var sector = "bodega";
$(document).ready(function(){
    $('.listItems').css('display', 'none');   
    $('.addCompra').css('display', 'none');
    $('.retiroProduccion').css('display', 'none');
    $('.wasteBodegaList').css('display', 'none');

    $('.title').html('Main');
    curStatus = "";
      
    $('#tablaItems').css('display', 'none');


    $('#listItems').click(function(){
        $('.listItems').css('display', 'block');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'none');
        $('.wasteBodegaList').css('display', 'none');

        $('.title').html('List');
        curStatus = "listBodega";
          
    });

    $('#addComprar').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'block');
        $('.retiroProduccion').css('display', 'none');
        $('.wasteBodegaList').css('display', 'none');

        $('.title').html('addCompra');
        curStatus = "addCompra";

    });

    $('#retiroProduccion').click(function(){

        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'block');
        $('.wasteBodegaList').css('display', 'none');

        $('.title').html('Retiro a Produccion');
        curStatus = "retiroProduccion";

    });

    $('#wasteBodega').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'block');
        $('.wasteBodegaList').css('display', 'none');

        $('.title').html('Waste');
        curStatus = "wasteBodega";
    });
  
    $('#wasteBodegaList').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'none');
        $('.wasteBodegaList').css('display', 'block');

        $('.title').html('WasteList');
        curStatus = "wasteBodegaList";
    });


});


