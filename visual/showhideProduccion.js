
var curStatus = "";
var sector = "produccion";
var tenencia;
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
        $('#tablaItems').html('');
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

    // muestra tabla de las compras por llegar

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

        tablas = document.getElementById('tablaCompras');


    });

    $('#retiroProduccion').click(function(){

        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'block');
        $('.wasteBodegaList').css('display', 'none');

        $('.title').html('Retiro a Produccion');
        curStatus = "waste";

        for(i=0; i< tablas.rows.length; i++){
            let col = tablas.rows[i].getElementsByTagName('td');

            if(col[4].firstChild.checked){
                $('#nItem').val(col[0].innerHTML);
                $('#disponible').val(col[3].innerHTML);
                tenencia = col[4].firstChild.value ;

            }
        }

    });

    $('#wasteBodega').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'block');
        $('.wasteBodegaList').css('display', 'none');
        for(i=0; i< tablas.rows.length; i++){
            let col = tablas.rows[i].getElementsByTagName('td');

            if(col[4].firstChild.checked){
                $('#nItem').val(col[0].innerHTML);
                $('#disponible').val(col[3].innerHTML);
                tenencia = col[4].firstChild.value ;

            }
        }

        $('.title').html('Waste');
        curStatus = "waste";
    });
  
    $('#wasteBodegaList').click(function(){
        $('.listItems').css('display', 'none');
        $('.addCompra').css('display', 'none');
        $('.retiroProduccion').css('display', 'none');
        $('.wasteBodegaList').css('display', 'block');
        $('#tablaWaste').html('');
        $('.title').html('WasteList');

        curStatus = "listWaste";
        var now = new Date;
        var ano = now.getFullYear();
        var mes = now.getMonth() + 1;

        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {sector: sector, ano: ano, mes: mes, curStatus: curStatus},
            success: function(r){
                $('#tablaWaste').append(r);
            }
        });
        curStatus = "wasteBodegaList";
    });


});


