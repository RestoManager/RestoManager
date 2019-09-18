$(document).ready(function (){
    var curStatus = "listCategoria";

 
    $.ajax({
        type: "POST",
        url: "data/consultasBodega.php",
        data: {curStatus: curStatus},
        success:function(r){
            $('#selectCat2').html(r);
        }
    });

      //Llena el select de items en COMPRA
      $('#selectCat2').change(function(){
        curStatus = "listItem";
        $('#selectItem').html('');
        $.ajax({
            type: "POST",
            url: "data/consultasBodega.php",
            data: {categoria: $('#selectCat2').val(), curStatus: curStatus},
            success: function(r){
            $('#selectItem').html(r);
                   
            }
        });
    });

    // envia datos de compra al servidor
    $('#enviarCompra').click(function(){
        curStatus = "producir";
        var idItem = $('#selectItem').val();
        var cantidad = $('#cantidad').val();
        

            $.ajax({
                type: "POST",
                url: "data/consultasBodega.php",
                data: {idItem: idItem,  cantidad: cantidad, curStatus: curStatus},
                success: function(){
                    alert('ingresado correctamente');
                }
            });
    });
        
    






});