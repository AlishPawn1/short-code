// in jQuery 

// jQuery(function($) {
//     // Toggle the menu class on click
//     $('.hfe-nav-menu__toggle').click(function() {
//         $(this).toggleClass('hfe-active-menu');
        
//         // Check if the menu is active and animate list items
//         if ($(this).hasClass('hfe-active-menu')) {
//             // Fade in items
//             $('.hfe-nav-menu > li').each(function(index) {
//                 $(this).css({
//                     'opacity': 0, // Initial hidden state
//                     'animation': 'fadeIn 0.5s ease forwards',
//                     'animation-delay': (index * 0.1) + 's' // Delay for each item
//                 });
//             });
//         } else {
//             // Fade out items in reverse order
//             $('.hfe-nav-menu > li').each(function(index) {
//                 $(this).css({
//                     'opacity': 1, // Set to visible before fading out
//                     'animation': 'fadeOut 0.5s ease forwards',
//                     'animation-delay': (($('.hfe-nav-menu > li').length - 1 - index) * 0.1) + 's' // Reverse delay for fade-out
//                 });
//             });

//             // Reset styles after fade-out is complete
//             setTimeout(function() {
//                 $('.hfe-nav-menu > li').css({
//                     'opacity': '', // Reset opacity
//                     'animation': '', // Reset animation
//                     'animation-delay': '' // Reset animation delay
//                 });
//             }, 800); // Match this timeout to the duration of the fadeOut animation
//         }
//     });
// });



// in pure javascript
document.addEventListener('DOMContentLoaded', function() {
    // Toggle the menu class on click
    var toggleButton = document.querySelector('.hfe-nav-menu__toggle');
    var menuItems = document.querySelectorAll('.hfe-nav-menu > li');

    toggleButton.addEventListener('click', function() {
        this.classList.toggle('hfe-active-menu');

        // Check if the menu is active and animate list items
        if (this.classList.contains('hfe-active-menu')) {
            // Fade in items
            menuItems.forEach(function(item, index) {
                item.style.opacity = 0; // Initial hidden state
                item.style.animation = 'fadeIn 0.5s ease forwards';
                item.style.animationDelay = (index * 0.1) + 's'; // Delay for each item
            });
        } else {
            // Fade out items in reverse order
            menuItems.forEach(function(item, index) {
                item.style.opacity = 1; // Set to visible before fading out
                item.style.animation = 'fadeOut 0.5s ease forwards';
                item.style.animationDelay = ((menuItems.length - 1 - index) * 0.1) + 's'; // Reverse delay for fade-out
            });

            // Reset styles after fade-out is complete
            setTimeout(function() {
                menuItems.forEach(function(item) {
                    item.style.opacity = ''; // Reset opacity
                    item.style.animation = ''; // Reset animation
                    item.style.animationDelay = ''; // Reset animation delay
                });
            }, 800); // Match this timeout to the duration of the fadeOut animation
        }
    });
});