jQuery(function($){
    if (document.querySelector('.about-progress')) {
        var b = 0;

        $(window).scroll(function () {
            var aboutTop = $('.about-progress').offset().top - window.innerHeight;

            if (b === 0 && $(window).scrollTop() > aboutTop) {
                $(".progress").each(function () {
                    var progressValue = $(this).data("value");
                    $(this).css("width", progressValue + "%");
                });
                b = 1;
            } else if (b === 1 && $(window).scrollTop() < aboutTop) {
                $(".progress").css("width", "0%");
                b = 0; 
            }
        });
    }
});