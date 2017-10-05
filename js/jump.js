jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top, .top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    
    jQuery('nav a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        jQuery('html, body').animate({scrollTop: $(target).offset().top - $("nav").height()}, duration);
        return false;
    })
    
});