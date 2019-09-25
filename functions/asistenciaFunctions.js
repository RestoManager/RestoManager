$(document).ready(function(){

    $('#enviarNewUser').click(function(){

        var data = $('#registro_user').serialize();
        $.ajax({
            type: "POST",
            url: "",
            data: data,
            succes: function(){
                alert('BIEN HECHO');
            }
        });
    });














});