jQuery(function ($) {
  const typedTextSpan = $(".typed-text");
  const cursorSpan = $(".cursor");

  const textArray = ["Online store", "Creative", "Portfolio", "Wordpress"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 200;
  let textIndex = 0, charIndex = 0;

  function type() {
    const currentText = textArray[textIndex];
    typedTextSpan.text(currentText.substring(0, charIndex++));
    cursorSpan.toggleClass("typing", charIndex <= currentText.length);

    if (charIndex <= currentText.length) {
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    const currentText = textArray[textIndex];
    typedTextSpan.text(currentText.substring(0, charIndex--));
    cursorSpan.toggleClass("typing", charIndex > 0);

    if (charIndex > 0) {
      setTimeout(erase, erasingDelay);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, typingDelay);
    }
  }

  setTimeout(type, newTextDelay);
});
