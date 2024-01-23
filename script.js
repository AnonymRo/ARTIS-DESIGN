document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var nav = document.querySelector("nav");
  var separator = document.querySelector(".separator");
  var philosophyContainer = document.querySelector(".philosophy-container");

  if (menuIcon) {
    menuIcon.onclick = function () {
      menuIcon.classList.toggle("openmenu");
      overlay.classList.toggle("active");
      nav.classList.toggle("open");
    };
  }

  function updateSeparator() {
    var bodyContainer = document.querySelector(".body-container");
    var bodyContainerBottom = bodyContainer.getBoundingClientRect().bottom;

    if (bodyContainerBottom <= window.innerHeight) {
      separator.style.width = "100%";
      philosophyContainer.classList.add("visible");
    } else {
      separator.style.width = "0";
      philosophyContainer.classList.remove("visible");
    }
  }

  // Initial call to set separator width on page load
  updateSeparator();

  // Show separator and mirrored image when scrolling past body-container
  window.addEventListener("scroll", updateSeparator);

  const words = document.querySelectorAll('.word');

  words.forEach((word, wordIndex) => {
    const letters = word.textContent.split('');
    word.innerHTML = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      word.appendChild(span);

      // Adjust the delay based on your preference
      const delay = wordIndex * 300 + index * 100;

      setTimeout(() => {
        span.style.opacity = '1';
      }, delay);
    });
  });

  /* Back to the top button */

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
});
