document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var nav = document.querySelector("nav");
  
    if (menuIcon) {
      menuIcon.onclick = function () {
        menuIcon.classList.toggle("openmenu");
        overlay.classList.toggle("active");
        nav.classList.toggle("open");
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
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
  });
  
  
  
  