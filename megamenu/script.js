jQuery(function ($) {
    $('.primary-menu li').has('ul.sub-menu, .megamenu').addClass('menu-dropdown');
    
    $(".primary-menu li.menu-dropdown > a").append(`
        <span class="dropdown-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="16" width="16" viewBox="0 0 330 330">
            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
          </svg>
        </span>
    `);
    $(document).on('click', '.dropdown-btn', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var $parentLi = $(this).closest('.menu-dropdown'); 
        var $menu = $parentLi.children("ul.sub-menu, .megamenu");
        if ($menu.length) {
            $menu.slideToggle();
            $parentLi.toggleClass('open');
        }
        $parentLi.siblings('.menu-dropdown').removeClass('open')
            .children("ul.sub-menu, .megamenu").slideUp();
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-dropdown').length) {
            $('.menu-dropdown').removeClass('open');
            $('.sub-menu, .megamenu').slideUp();
        }
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.nav-wrap, .hamburger-btn').length) {
            $('.nav-wrap').removeClass('active');
            $('.nav-item').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });
    $('.hamburger-btn').click(function () {
        $('.nav-wrap').addClass('active');
        $('.nav-item').addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $('.nav-wrap .close, .nav-wrap.active').click(function () {
        $('.nav-wrap').removeClass('active');
        $('.nav-item').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });


    function cloneTopBarIcon() {
		if ($(window).width() <= 991) {
			if (!$('.nav-wrap .body-nav .header-btn').length && $('.header-btn').length) {
				$('.header-btn').clone().appendTo('.nav-wrap .body-nav');
			}
		} else {
			$('.nav-wrap .body-nav .header-btn').remove();
		}
	}

	cloneTopBarIcon();

	let resizeTimeout;
	$(window).resize(function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(cloneTopBarIcon, 200);
	});

});