
var curStatus = "";
$(document).ready(function(){
    $('.currentItems').css('display', 'block');
        $('.addItems').css('display', 'none');
        $('.retiroItems').css('display', 'none');
        $('.title').html('Bodega');
        curStatus = "mostrando";
      


    $('#comprar').click(function(){
        $('.currentItems').css('display', 'none');
        $('.addItems').css('display', 'block');
        $('.retiroItems').css('display', 'none');
        $('.title').html('Comprar');
        curStatus = "comprando";
       
    });

    $('#mostrarCurItems').click(function(){
        $('.currentItems').css('display', 'block');
        $('.addItems').css('display', 'none');
        $('.retiroItems').css('display', 'none');
        $('.title').html('Bodega');
        curStatus = "mostrando";
      
    });

  


});

function mostrarRetiro(){
    $('.currentItems').css('display', 'none');
    $('.addItems').css('display', 'none');
    $('.retiroItems').css('display', 'block');
    $('.title').html('Bodega');
    curStatus = 'retiroBodega';

}
