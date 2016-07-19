$(document).ready(function() {
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 300) {
            $('.main-screen__wrapper').addClass('colored')
        } else {
            $('.main-screen__wrapper').removeClass('colored')
        }
    });
    //**
    Selectize.define('hidden_textfield', function(options) {
            var self = this;
            this.showInput = function() {
                 this.$control.css({cursor: 'pointer'});
                 this.$control_input.css({opacity: 0, position: 'relative', left: self.rtl ? 10000 : -10000 });
                 this.isInputHidden = false;
             };

             this.setup_original = this.setup;

             this.setup = function() {
                  self.setup_original();
                  this.$control_input.prop("disabled","disabled");
             }
    });
    //**
    $('select').selectize({
        //sortField: 'text',
        create: false,
        hideSelected: true,
        create: false,
        scrollDuration: 600,
        plugins: ['hidden_textfield']
    });

    // $('select').selectize({
    //     onFocus: function() {
    //         var input = 'selectize-input input',
    //               wrapper = 'selectize-input';
    //         $('.' + input).attr('readonly', true);
    //         $('.' + input + ', .' + wrapper).css('cursor', 'pointer');
    //         if((event.keyCode < 13)) alert();
    //     }
    // });
    //
    $(document).on('click', '.js-scroll', function(event) {
        event.preventDefault();
        $('body,html').animate( { scrollTop: 500 }, 1000 );
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
