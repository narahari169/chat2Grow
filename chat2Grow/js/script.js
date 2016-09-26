$(document).ready(function(){
    $('#showusername').hide();
    $('#showpswd').hide();

    $('#mybtn').click(function(){
        var x = $('#username').val();
        var y = $('#pswd').val();
        if(x==''){
            $('#showusername').slideDown(1000);
            $('#username').focus();
        }else{
            $('#showusername').slideUp(1000);
            if(y==''){
                $('#showpswd').slideDown(1000);
                $('#pswd').focus();
            }else{
                $('#showpswd').slideUp(1000);
                window.location.assign('index.html');
            }
        }
    });
});