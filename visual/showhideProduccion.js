var curStatus = "";
var sector = "produccion";
$(document).ready(function(){
    $('.listItems').css('display', 'none');   
    $('.addCompra').css('display', 'none');
    $('.wasteBodegaList').css('display', 'none');
    $('.retiroProduccion').css('display', 'none');

    $('.title').html('Main');
    curStatus = "";
      
    $('#tablaItems').css('display', 'none');


    $('#listItems').click(function(){
        $('.listItems').css('display', 'block');
        $('.addCompra').css('display', 'none');
        $('.wasteBodegaList').css('display', 'none');
        $('.retiroProduccion').css('display', 'none');


        $('.title').html('List');
        curStatus = "listBodega";
          
    });



    $('#addComprar').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'block');
        $('.wasteBodegaList').css('display', 'none');
        $('.retiroProduccion').css('display', 'none');


        $('.title').html('addProduccion');
        curStatus = "addProduccion";


    });


    $('#wasteBodega').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.wasteBodegaList').css('display', 'none');
        $('.retiroProduccion').css('display', 'block');


        $('.title').html('Waste Produccion');
        curStatus = "wasteProduccion";
    });
  
    $('#wasteBodegaList').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.wasteBodegaList').css('display', 'block');
        $('.retiroProduccion').css('display', 'none');


        $('.title').html('WasteList');
        curStatus = "wasteProduccionList";
    });


});


