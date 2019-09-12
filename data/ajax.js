$(document).ready(function(){
    alert('chao');
    
    $.ajax({
        type: "POST",
        url: "data/consultas.php",
        data: {instance: $('#instance1').val()},
        success:function(r){
            $('#selectCat').html(r);
            alert('algo paso breder');
        }



    });

 alert('hola');
 
 
});      
$('#Categori').change(function(){
    alert('buscando items');

    var catValue = $('#Categori').value();
    $.ajax({
        type: "POST",
        url: "data/consultas.php",
        data: {instance: $('#instance2').val(), cat: catValue},
        success:function(r){
            $('#selectItem').html(r);
        }

    });
}); 







