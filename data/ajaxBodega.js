$(document).ready(function(){
   
    

    // Llena la tabla de items CHECK

    $('#selectCat').change(function(){
       curStatus = "listBodega";
        
        $('#tablaItems').html('');
        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {categoria: $('#selectCat').val(), curStatus: curStatus, sector: sector},
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
    
   
});      







