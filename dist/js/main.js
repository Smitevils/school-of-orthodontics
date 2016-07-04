$(document).ready(function() {
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 300) {
            $('.main-screen__wrapper').addClass('colored')
        } else {
            $('.main-screen__wrapper').removeClass('colored')
        }
    });
    //**
    $('select').selectize({
        //sortField: 'text',
        hideSelected: true
    });
    //
    $(document).on('click', '.js-scroll', function(event) {
        event.preventDefault();
        $('body').animate( { scrollTop: 500 }, 1000 );
    })
    //**
    $('input[class="input__checkbox-custom"]').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%' // optional
    });
    //$.fancybox($("#popup-3"));
    $(document).on('click', '.js-close-popup', function(event) {
        event.preventDefault();
        $.fancybox.close();
    })
    $(document).on('click', '.js-pay', function(event) {
        event.preventDefault();
        $.fancybox($("#popup-2"));
    })
    $(document).on('click', '.js-login', function(event) {
        event.preventDefault();
        $.fancybox($("#popup-3"));
    })
    $(document).on('click', '.js-restore', function(event) {
        event.preventDefault();
        $.fancybox($("#popup-4"));
    })

    $('input[type="tel"]').mask('+7-000-000-00-00');
});
