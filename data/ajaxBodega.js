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

    // Llena la tabla de items CHECK

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

  

    

    //envia Retiro de item

    $('#enviarRetiro').click(function(){
        instance = 3;
        var tenencia = $('input:radio[name=itemsel]:checked').val();
        var cuanto = $('#cantidad2').val();
        $.ajax({

            type: "POST",
            url: "data/consultas.php",
            data: {instance: instance, tenencia: tenencia, cuanto: cuanto  },
            success: function(){
                alert('Operacion Realizada!');
            }

        });

    });

    //Compras que aun no llegan
    
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







