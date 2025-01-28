jQuery(function($) {
    var a = 0;
    var $courseSearchNumber = $('.course-search-number');
    var oTop = $('.online-search-option').offset().top - window.innerHeight;

    $(window).scroll(function() {
        if (a == 0 && $(window).scrollTop() > oTop) {
            $courseSearchNumber.each(function() {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-to-value') }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            a = 1; 
        } 
        else if (a == 1 && $(window).scrollTop() <= oTop) {
            $courseSearchNumber.each(function() {
                var $this = $(this);
                $this.text(0); 
            });
            a = 0; 
        }
    });
});