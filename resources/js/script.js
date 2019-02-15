$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-services').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    /* Scroll on buttons */

    $(".js--scroll-to-contact").click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });    

    $(".js--scroll-to-start").click(function () {
        $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }


    });



    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
                    }
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });


});