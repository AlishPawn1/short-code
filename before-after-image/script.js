const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.after-image');
const container = document.querySelector('.container');

let isDragging = false;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateSliderPosition(e);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function updateSliderPosition(e) {
    const containerRect = container.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;
    
    // Ensure the slider stays within the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerRect.width) offsetX = containerRect.width;

    // Move the slider
    slider.style.left = `${offsetX}px`;

    // Adjust the clip of the after image
    afterImage.style.clip = `rect(0, ${offsetX}px, ${containerRect.height}px, 0)`;
}