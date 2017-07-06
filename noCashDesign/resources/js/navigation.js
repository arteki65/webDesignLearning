var animationDuration = 300;
var mobileNavLeftMargin;

$(document).ready(function() {
    if($(window).width() < 481) {
        mobileNavLeftMargin = 0;
    } else {
        mobileNavLeftMargin = 40;
    }
    
    $(window).resize(function() {
        if($(window).width() < 481) {
            mobileNavLeftMargin = 0;
        } else {
            mobileNavLeftMargin = 40;
        }
        
        if($(window).width() > 767) {
            $('nav').css("left", "0");
        } else {
            $('nav').css("left", "100%");
        }
    });
    
    $('.js--open-mobile-nav-icon').click(function() {
        $('.mobile-current-nav').animate({
            "margin-top": "-100px"
        }, animationDuration);
        $('nav').animate({
            "left": mobileNavLeftMargin + "%"
        }, animationDuration);
    });
    
    $('.js--close-mobile-nav-icon').click(function() {
        $('nav').animate({
            "left": "100%"
        }, animationDuration);
        $('.mobile-current-nav').animate({
            "margin-top": 0
        }, animationDuration);
    });
});