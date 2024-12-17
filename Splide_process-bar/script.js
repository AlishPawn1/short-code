var cartWishlist = document.querySelector('.cart_wishlist');

cartWishlist.addEventListener('click', function() {
    this.classList.toggle('active');
});
if (document.querySelector('.latest-slide')) {
    var single_slide = new Splide('.latest-slide', {
        perPage: 3,
        perMove: 1,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
                gap: 20,
            },
            575: {
                perPage: 1,
            },
        },
    });

    single_slide.on('mounted move', function () {
        var bar = single_slide.root.querySelector('.my-slider-progress-bar');

        if (bar) {
            var end = single_slide.Components.Controller.getEnd() + 1;
            var rate = Math.min((single_slide.index + 1) / end, 1);
            bar.style.width = String(100 * rate) + '%';
        } else {
            console.error("Progress bar element not found.");
        }
    });

    single_slide.mount();
}
var productDiscountSliders = document.querySelectorAll(".product_discount");

productDiscountSliders.forEach(function(sliderElement) {
  new Splide(sliderElement, {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    arrows: false,
    perPage: 4,
    pagination: false,
    autoScroll: {
      speed: 0.5,
    },
    breakpoints: {
      768: {
        perPage: 3,
        autoScroll: {
          speed: 0.5,
        },
      },
      575:{
        perPage: 2,
      }
    }
  }).mount(window.splide.Extensions);
});