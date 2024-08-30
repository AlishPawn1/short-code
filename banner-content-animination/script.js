function initializeSplide(selector, options, extensions) {
    document.querySelectorAll(selector).forEach(element => {
        if (element.querySelector('.splide__track') && element.querySelector('.splide__list')) {
            new Splide(element, options).mount(extensions);
        } else {
            console.error(`Splide initialization failed: Missing required elements in ${selector}`);
        }
    });
}
if (document.querySelector('.banner-slide')) {
    initializeSplide('.banner-slide', {
        type: 'fade',
        rewind: true,
        perPage: 1,
        pagination: true,
        arrows: false,
    });
}