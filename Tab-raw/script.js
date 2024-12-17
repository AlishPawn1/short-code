jQuery(function($){
    $('.tab-link').click(function(){
        // Remove active class from all tabs and contents
        $('.tab-link').removeClass('active');
        $('.tab-content').removeClass('active').hide();
        
        // Add active class to clicked tab and show related content
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active').fadeIn();
    });
});