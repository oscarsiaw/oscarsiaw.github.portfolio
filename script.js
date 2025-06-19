$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        // Fix: Prevent body from scrolling when menu is open on mobile
        if ($('.navbar .menu').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    // Hide menu when a menu item is clicked (on mobile)
    $('.navbar .menu li a').click(function(){
        if ($(window).width() <= 947) {
            $('.navbar .menu').removeClass('active');
            $('.menu-btn i').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Professional", "Developer", "Hardware Technician", "Computer Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Professional", "Developer", "Designer", "Hardware Technician", "Computer Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Zoom effect on image click
    $(document).ready(function(){
        // Zoom effect on image click
        $('.grid-item img').click(function() {
            $(this).toggleClass('zoom');
        });
    });

    // Image pop-out (modal) for project images
    $('.grid-item img').css('cursor', 'zoom-in');
    $('.grid-item img').on('click', function() {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt') || '';
        // Create modal if not exists
        if ($('#img-modal').length === 0) {
            $('body').append('<div id="img-modal" style="display:none;position:fixed;z-index:99999;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);justify-content:center;align-items:center;cursor:zoom-out;"><img style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.25);" src="" alt=""><span style="position:absolute;top:24px;right:40px;font-size:2.5rem;color:#fff;cursor:pointer;font-family:sans-serif;">&times;</span></div>');
        }
        $('#img-modal img').attr('src', src).attr('alt', alt);
        $('#img-modal').fadeIn(150);
    });
    // Hide modal on click
    $(document).on('click', '#img-modal, #img-modal span', function(e) {
        if (e.target === this) {
            $('#img-modal').fadeOut(150);
        }
    });

    // Project links open in new tab
    $('.grid-item a').attr('target', '_blank').attr('rel', 'noopener noreferrer');
});
