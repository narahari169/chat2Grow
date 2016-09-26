$(document).ready(function(){

    //$('.responsive-slider').responsiveSlider();
    $('.responsive-slider').responsiveSlider({
        autoplay: true,
        interval: 2500,
        transitionTime: 300
    });

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2500,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
    setInterval(function() {
        setTimeout(function(){
            $('#mybtn').toggleClass('orange-btn-classn');
        });
    }, 1000);



    $(".myleft").click(function () {
        // Set the effect type
        var effect = 'slide';
        // Set the options for the effect type chosen
        var options = { direction: 'right' };
        // Set the duration (default: 400 milliseconds)
        var duration = 500;
        $('#myDiv').toggle(effect, options, duration);
    });
    var setupc = 0;
    $('#setup').hide();
    $('#setup-btn').click(function(){
        $('#setup').slideToggle(2000);
        if(setupc%2 == 0){
            $('#setup-btn').html('see less&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }else{
            $('#setup-btn').html('see more&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }
        setupc++;
    })

    var chatc = 0;
    $('#chat').hide();
    $('#chat-btn').click(function(){
        $('#chat').slideToggle(2000);
        if(chatc%2 == 0){
            $('#chat-btn').html('see less&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }else{
            $('#chat-btn').html('see more&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }
        chatc++;
    })

    var askc = 0;
    $('#ask').hide();
    $('#ask-btn').click(function(){
        $('#ask').slideToggle(2000);
        if(askc%2 == 0){
            $('#ask-btn').html('see less&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }else{
            $('#ask-btn').html('see more&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }
        askc++;
    })

    var repc = 0;
    $('#report').hide();
    $('#report-btn').click(function(){
        $('#report').slideToggle(2000);
        if(repc%2 == 0){
            $('#report-btn').html('see less&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }else{
            $('#report-btn').html('see more&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-up"></span>');
        }
        repc++;
    })

    setTimeout(function(){
        $('#mypage').removeClass('modal');
    }, 1500);
});