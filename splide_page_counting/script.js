
function initializeSplide(selector, options, extensions) {
    const splideInstances = [];

    document.querySelectorAll(selector).forEach(element => {
        if (element.querySelector('.splide__track') && element.querySelector('.splide__list')) {
            const splide = new Splide(element, options).mount(extensions);
            splideInstances.push(splide);
        } else {
            console.error(`Splide initialization failed: Missing required elements in ${selector}`);
        }
    });

    return splideInstances;
}

if (document.querySelector('.banner-slide')) {
    const splideInstances = initializeSplide('.banner-slide', {
        type: 'slide',
        rewind: true,
        perPage: 1,
        pagination: false,
        arrows: false,
    });

    const splide = splideInstances[0]; // Assuming only one instance of `.banner-slide`
    if (splide) {
        // Get the total number of slides and update the total slides counter
        const totalSlides = splide.length;
        document.getElementById('total-slides').textContent = totalSlides;

        // Update the current slide number on `moved` event
        splide.on('moved', function () {
            const currentPageIndex = splide.index + 1; // Splide uses 0-based index
            document.getElementById('current-slide').textContent = currentPageIndex;
        });

        // Set the initial current slide number
        document.getElementById('current-slide').textContent = splide.index + 1;
    }
}

