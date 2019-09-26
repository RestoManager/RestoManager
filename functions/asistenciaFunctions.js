$(document).ready(function(){

    $('.modificarTurno').click(function(){
        var valor = this.value
        $('#modTurno').css('display', 'block');
        alert(valor);
    });

    $('#cancelMod').click(function(){
        $('#modTurno').css('display', 'none');
    });



});