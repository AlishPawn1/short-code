jQuery(function($){
    $('.popup-btn').click(function(e){
        e.preventDefault();
        $('.overlay').addClass('active');
        $('body').addClass('overflow-hidden');
        $('.popup-box').addClass('active'); 
    });
    $('.overlay, .popup-box .close').click(function(){
        $('.overlay').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('.popup-box').removeClass('active');
    });
});