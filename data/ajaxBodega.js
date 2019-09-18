var tablas;
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

        tablas = document.getElementById('tablaItems');

    });

  

    

    //envia Retiro de item

    $('#enviarRetiro').click(function(){
        
        if(curStatus = "retiroBodega"){

            var cuanto = $('#cantidad2').val();
            $.ajax({
    
                type: "POST",
                url: "data/consultasBodega.php",
                data: {idTenencia: tenencia, cantidad: cuanto, curStatus: curStatus },
                success: function(){
                    alert('Operacion Realizada!');
                }
    
            });
        }
      

    });

    //Compras que llegaron

    $('#agregarCompra').click(function(){
        curStatus = "ingresoBodega";
        for(i=0; i< tablas.rows.length; i++){
            let col = tablas.rows[i].getElementsByTagName('td');

            if(col[4].firstChild.checked){
                tenencia = col[4].firstChild.value ;
            }
        }
        let cantidad = $('#cantidadEntrada').val();

        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {tenencia: tenencia, cantidad: cantidad},
            success: function(){
                alert('Ya esta adentro jefe!');
            }
        });

    });









    //Waste

    
   
});      







