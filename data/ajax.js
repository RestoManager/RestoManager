$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var datos= $('#formlg').serialize();
        
        $.ajax({
            type:"POST",
            url:"data/consultas.php",
            data:datos,
            success:function(r){
                if(r==1){
                    alert("agregado con exito");
                }else{
                    alert("Fallo el server");
                }
            }
        });
        
        return false;
    });
});







