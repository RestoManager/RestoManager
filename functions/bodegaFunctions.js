$('#retiro').click(function(){

    if($('#itemradio').prop('checked',true)){
        mostrarRetiro();
    }else{
        $('.title').html('Selecciona para retirar');
    }


});