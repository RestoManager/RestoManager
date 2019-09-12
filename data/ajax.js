$(document).ready(function(){
  
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
        $('#tablaItems').html('');
        $.ajax({
            type: "POST",
            url: "data/consultas.php",
            data: {instance: instance, categoria: $('#selectCat').val()},
            success: function(r){
                $('#tablaItems').append(r);
               
            }
        });
    })


 
 
});      







