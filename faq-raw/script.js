// Select all accordion headers
const headers = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Toggle the active class
        this.classList.toggle('active');

        // Slide toggle effect
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Close the item
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Open the item
        }
    });
});