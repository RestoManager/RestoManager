
var curStatus = "";
$(document).ready(function(){
    $('.currentItems').css('display', 'block');
        $('.addItems').css('display', 'none');
        curStatus = "mostrando";
      


    $('#comprar').click(function(){
        $('.currentItems').css('display', 'none');
        $('.addItems').css('display', 'block');
        curStatus = "comprando";
       
    });

    $('#mostrarCurItems').click(function(){
        $('.currentItems').css('display', 'block');
        $('.addItems').css('display', 'none');
        curStatus = "mostrando";
      
    });


});
