jQuery(function($){
    // count number on scroll
    var $courseSearchNumber = $('.counting-number');
    var offsets = [];

    // Store the offset of each `.count-number` element
    $('.count-number').each(function () {
        offsets.push($(this).offset().top - window.innerHeight);
    });

    var countersStarted = []; // Track which counters have started
    countersStarted.length = offsets.length;
    countersStarted.fill(false);

    $(window).scroll(function () {
        $('.count-number').each(function (index) {
            var $this = $(this);
            var $courseSearchNumber = $this.find('.counting-number');

            // Check if the counter should start
            if (!countersStarted[index] && $(window).scrollTop() > offsets[index]) {
                $courseSearchNumber.each(function () {
                    var $num = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $num.attr('data-to-value') }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $num.text(Math.ceil(this.Counter).toLocaleString());
                        }
                    });
                });
                countersStarted[index] = true;
            }

            // Reset the counter if scrolled back up
            else if (countersStarted[index] && $(window).scrollTop() <= offsets[index]) {
                $courseSearchNumber.each(function () {
                    var $num = $(this);
                    $num.text(0);
                });
                countersStarted[index] = false;
            }
        });
    });
});