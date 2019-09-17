$(document).ready(function (){
    var curStatus = "produccir";
    var sector = "produccion";

    var instance = 1; 
    $.ajax({
        type: "POST",
        url: "data/consultas.php",
        data: {instance: instance},
        success:function(r){
            $('#selectCat2').html(r);
        }
    });

      //Llena el select de items en COMPRA
      $('#selectCat2').change(function(){
        instance = 2;
        $('#selectItem').html('');
        $.ajax({
            type: "POST",
            url: "data/consultas.php",
            data: {instance: instance, categoria: $('#selectCat2').val(), stat: curStatus},
            success: function(r){
            $('#selectItem').html(r);
                   
            }
        });
    });

    // envia datos de compra al servidor
    var vuelta = 0;
    $('#enviarCompra').click(function(){
        instance = 3;
        vuelta = 0;
        var idItem = $('#selectItem').val();
        var costo = $('#costo').val();
        var cuanto = $('#cantidad').val();
        if(vuelta == 0){

            $.ajax({
                type: "POST",
                url: "data/consultas.php",
                data: {instance: instance, idItem: idItem, costo: costo, cuanto: cuanto, vuelta: vuelta} ,
                success: function(){
                    alert('paso 1');
                }
            });
        }
        
        vuelta += 1;
        if(vuelta ==1){

            $.ajax({
                type: "POST",
                url: "data/consultas.php",
                data: {instance: instance, idItem: idItem, costo: costo, cuanto: cuanto, vuelta:vuelta} ,
                success: function(){
                    alert('Se ha agregado exitosamente!');
                    
                }
            });
        }


    });






});