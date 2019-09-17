$(document).ready(function(){

    // Llena los select de categorias CHECK

    var instance = 1; 
    $.ajax({
        type: "POST",
        url: "data/consultas.php",
        data: {instance: instance},
        success:function(r){
            $('#selectCat').html(r);
            
        }
    });

    $('#selectCat').change(function(){
        instance = 2;
        $('#tablaItems').css('display', 'block');
        $('#tablaItems').html('');
        $.ajax({
            type: "POST",
            url: "data/consultas.php",
            data: {instance: instance, categoria: $('#selectCat').val(), stat: curStatus},
            success: function(r){
                $('#tablaItems').append(r);
               
            }
        });
    });

    //Agregar Produccion
    $('#addComprar').click(function(){

        $.ajax({
            type: "POST",
            url: "data/consultas.php",
            data: {curStatus : curStatus},
            success: function(r){
              //  $('tablaCompras').html(r);
            }
        });
    });
    
});