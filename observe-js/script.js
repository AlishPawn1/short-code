document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".location-popup");

    const checkStyleAndAddClass = () => {
        const computedStyle = window.getComputedStyle(overlay);
        console.log("Computed display style:", computedStyle.display);

        if (computedStyle.display !== "none") {
            document.body.classList.add("overflow-hidden");
            console.log("Class added to body"); 
        } else {
            document.body.classList.remove("overflow-hidden");
            console.log("Class removed from body");
        }
    };

    if (overlay) {
        new MutationObserver(checkStyleAndAddClass).observe(overlay, { attributes: true });
        checkStyleAndAddClass();
    } else {
        console.error("Element with class 'location-popup' not found.");
    }
});