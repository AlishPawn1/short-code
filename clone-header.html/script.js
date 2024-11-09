jQuery(function($){
    function cloneTopBarIcon() {
		if ($(window).width() <= 767) {
			if (!$('.nav-item .mobile .header-btn').length && $('.header-btn').length) {
				$('.header-btn').clone().appendTo('.nav-item .mobile');
			}
		} else {
			$('.nav-item .mobile .header-btn').remove();
		}
	}

	cloneTopBarIcon();

	let resizeTimeout;
	$(window).resize(function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(cloneTopBarIcon, 200);
	});
});