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
        
    

            var cuanto = $('#cantidad2').val();
            $.ajax({
    
                type: "POST",
                url: "data/consultasBodega.php",
                data: {idTenencia: tenencia, cantidad: cuanto, curStatus: curStatus },
                success: function(){
                    alert('Operacion Realizada!');
                }
    
            });
        
      

    });

    //Compras que llegaron

    $('#agregarCompra').click(function(){
        curStatus = "ingresoBodega";
        var cantidad = $('#cantidadEntrada').val();

        for(i=0; i< tablas.rows.length; i++){
            let col = tablas.rows[i].getElementsByTagName('td');

            if(col[3].firstChild.checked){
                tenencia = col[3].firstChild.value ;
            }
        }

        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {idTenencia: tenencia, cantidad: cantidad, curStatus: curStatus},
            success: function(){
                alert('Ya esta adentro jefe!');
            }
        });

    });









    //Waste

    $('#showWaste').click(function(){
        var ano = $('#Ano').val();
        var mes = $('#Mes').val();
        curStatus = "listWaste";
        $('#tablaWaste').html('');
        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {sector: sector, ano: ano, mes: mes, curStatus: curStatus},
            success: function(r){
                $('#tablaWaste').append(r);
                alert('hola');
            }
        });
    });
   
});      







