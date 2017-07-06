var animationDuration = 300;
var mobileNavLeftMargin;
var windowWidth;
var navOpen = false;

$(document).ready(function() {
    windowWidth = $(window).width();
    
    if($(window).width() < 481) {
        mobileNavLeftMargin = 0;
    } else {
        mobileNavLeftMargin = 40;
    }
    
    $(window).resize(function() {
        if(windowWidth === $(window).width()) {
            return;
        }
        
        if($(window).width() < 481) {
            mobileNavLeftMargin = 0;
        } else {
            mobileNavLeftMargin = 40;
        }
        
        if($(window).width() > 767) {
            $('nav').css("left", "0");
            if(navOpen) {
                $('#body-mask').hide();
            }
        } else {
            if(!navOpen) {
                $('nav').css("left", "100%");
            } else {
                $('nav').css("left", mobileNavLeftMargin + "%");
                $('#body-mask').css("right", 100 - mobileNavLeftMargin + "%");
                $('#body-mask').show();
            }
        }
        
        windowWidth = $(window).width();
    });
    
    $('.js--open-mobile-nav-icon').click(function() {        
        $('.mobile-current-nav').animate({
            "margin-top": "-100px"
        }, animationDuration);
        $('nav').animate({
            "left": mobileNavLeftMargin + "%"
        }, animationDuration);
        
        navOpen = true;
        
        $('#body-mask').show();
        $('#body-mask').animate({
            right: 100 - mobileNavLeftMargin + "%"
        }, animationDuration);
    });
    
    $('.js--close-mobile-nav-icon').click(function() {
        $('nav').animate({
            "left": "100%"
        }, animationDuration);
        $('.mobile-current-nav').animate({
            "margin-top": 0
        }, animationDuration);
        
        navOpen = false;
        $('#body-mask').hide();
        $('#body-mask').css("right", 0);
    });
});