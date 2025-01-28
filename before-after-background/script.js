$(document).ready(function () {
    var $slider = $('.slider');
    var $afterImage = $('.after-image');
    var $container = $('.before-after');
    var containerWidth = $container.width();
    var isDragging = false;

    $slider.css('left', '50%'); // Set initial position to 50%
    $afterImage.css('clip-path', 'inset(0 50% 0 0)');

    // Variables to store starting position
    var startX = 0;

    $slider.on('mousedown touchstart', function (e) {
        e.preventDefault();
        isDragging = true;

        // Record the start position of the drag
        startX = e.pageX || e.originalEvent.touches[0].pageX;
    });

    $(document).on('mousemove touchmove', function (e) {
        if (isDragging) {
            var currentX = e.pageX || e.originalEvent.touches[0].pageX;
            var deltaX = currentX - startX; // Calculate movement
            var sliderLeft = parseFloat($slider.css('left')) || 0;
            var percentage = ((sliderLeft + deltaX) / containerWidth) * 100;

            // Clamp percentage between 0 and 100
            percentage = Math.max(0, Math.min(100, percentage));

            // Update positions
            $afterImage.css('clip-path', 'inset(0 ' + (100 - percentage) + '% 0 0)');
            $slider.css('left', percentage + '%');

            // Update startX for smooth dragging
            startX = currentX;
        }
    });

    $(document).on('mouseup touchend', function () {
        isDragging = false; // End dragging
    });
});
