if (document.querySelector('.main-slider')) {
    var mainSlider = new Splide('.main-slider', {
        type: 'fade',
        pagination: false,
        arrows: false,
    }).mount();

    var thumbnailSlider = new Splide('.thumbnail-slider', {
        isNavigation: true,
        gap: 10,
        arrows: false,
        rewind: true,
        pagination: false,
        perPage: 6,
        perMove: 1,
        breakpoints: {
            1024: {
                arrows: true,
                perPage: 1,
            },
        },
    }).mount();

    mainSlider.sync(thumbnailSlider);

    var thumbnailButtons = document.querySelectorAll('.thumbnail-slider .splide__list button');
    thumbnailButtons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            var index = parseInt(button.getAttribute('data-slide-index'));
            mainSlider.go(index);

            thumbnailButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
}