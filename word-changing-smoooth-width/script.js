jQuery(function ($) {
  const typedTextSpan = $(".typed-text");
  const cursorSpan = $(".cursor");

  const textArray = ["Online store", "Creative", "Portfolio", "Wordpress"];
  const typingDelay = 1000; // Duration of width animation
  const newTextDelay = 1000; // Pause before switching text
  let textIndex = 0;

  function animateWidth() {
    const currentText = textArray[textIndex];

    // Set the text and calculate its full width
    typedTextSpan.text(currentText).css({ width: "0px", overflow: "hidden", display: "inline-block" });
    const fullWidth = typedTextSpan[0].scrollWidth;

    // Animate the width to reveal the text
    typedTextSpan.animate({ width: `${fullWidth}px` }, typingDelay, function () {
      // After showing the full text, wait and start the erasing animation
      setTimeout(eraseWidth, newTextDelay);
    });
  }

  function eraseWidth() {
    // Animate the width back to 0 to hide the text
    typedTextSpan.animate({ width: "0px" }, typingDelay, function () {
      // Move to the next text and restart the animation
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(animateWidth, newTextDelay);
    });
  }

  setTimeout(animateWidth, newTextDelay);
});
