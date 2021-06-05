jQuery.noConflict()
jQuery(window).ready(function ($) {

    // When click on menu btn
    $('.kt-bar').click(function () {
        $('.kt-msg').html('Kt bar has been clicked');
        $('.kt-bar').css('display', 'none');
        // $('.kt-bar').addClass('d-none');
        $('.kt-can').css('display', 'block')
        // $('.kt-can').addClass('d-block')

        $('.mainCont').addClass('kt-mobile')


        // When click on cancel btn
        $('.kt-can').click(function () {
            $('.kt-msg').html("Kt Cancel has been clicked");
            // $('.kt-can').removeClass('d-none');


            $('.mainCont').removeClass('kt-mobile');


            $('.kt-can').css('display', 'none');
            $('.kt-bar').css('display', 'block');
            // $('.kt-bar').addClass('d-block');
        })
    })
    // Menu settings ends here



    
})