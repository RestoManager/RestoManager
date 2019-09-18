
var curStatus = "";
var sector = "bodega";
$(document).ready(function(){
    $('.listItems').css('display', 'none');   
    $('.addCompra').css('display', 'none');
    $('.retiroProduccion').css('display', 'none');
    $('.wasteBodegaList').css('display', 'none');

    $('.title').html('Main');
   

    // Llena select de categorias CHECK
    $('#listItems').click(function(){
        curStatus = "listCategoria";
        
        $('#selectCat').html('');
        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {curStatus: curStatus},
            success:function(r){
                $('#selectCat').html(r);
                
                
            }
        });
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
        curStatus = "addTenencia";
        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {curStatus: curStatus, sector: sector },
            success: function(r){
                $('#tablaCompras').html(r);
            }
        });


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


