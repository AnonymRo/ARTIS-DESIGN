document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var nav = document.querySelector("nav");
  var separator = document.querySelector(".separator");
  var philosophyContainer = document.querySelector(".philosophy-container");
  var toTop = document.querySelector(".to-top");
  var footer = document.querySelector("footer");

  if (menuIcon) {
    menuIcon.onclick = function () {
      menuIcon.classList.toggle("openmenu");
      overlay.classList.toggle("active");
      nav.classList.toggle("open");

      document.body.classList.toggle("menu-open");

      if (nav.classList.contains("open")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }

  function updateSeparator() {
    var bodyContainer = document.querySelector(".body-container");

    // Check if bodyContainer is not null before proceeding
    if (bodyContainer) {
      var bodyContainerBottom = bodyContainer.getBoundingClientRect().bottom;

      if (bodyContainerBottom <= window.innerHeight) {
        separator.style.width = "100%";
        philosophyContainer.classList.add("visible");
      } else {
        separator.style.width = "0";
        philosophyContainer.classList.remove("visible");
      }
    }
  }

  updateSeparator();

  window.addEventListener("scroll", updateSeparator);

  const words = document.querySelectorAll('.word');

  words.forEach((word, wordIndex) => {
    const letters = word.textContent.split('');
    word.innerHTML = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      word.appendChild(span);

      const delay = wordIndex * 300 + index * 100;

      setTimeout(() => {
        span.style.opacity = '1';
      }, delay);
    });
  });

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const footerPosition = footer.getBoundingClientRect().top;

    if (scrollPosition > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }

    if (footerPosition < window.innerHeight && footerPosition > 0) {
      toTop.style.bottom = "90px";
    } else {
      toTop.style.bottom = "24px";
    }
  });

  // Button for index page
  const indexButton = document.getElementById('indexButton');
  if (indexButton) {
    indexButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  // Button for interior page
  const interiorButton = document.getElementById('interiorButton');
  if (interiorButton) {
    interiorButton.addEventListener('click', function () {
      window.location.href = 'interiors.html';
    });
  }

  // Button for contact page
  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', function () {
      window.location.href = 'contact.html';
    });
  }

  //Button for project1
  const project1Button = document.getElementById('project1Button');
  if (project1Button) {
    project1Button.addEventListener('click', function () {
      window.location.href = 'project1.html';
    });
  }

  // Select all card elements
  const cards = document.querySelectorAll('.card');

  // Function to remove hover-effect class from all cards
  function removeHoverEffect() {
    cards.forEach(card => {
      card.classList.remove('hover-effect');
    });
  }

  // Add click event listener to each card
  cards.forEach(card => {
    card.addEventListener('mouseover', function () {
      const overlay = card.querySelector('.contentBox::before');
      const button = card.querySelector('.view-project-btn');
      if (overlay) overlay.classList.add('visible');
      if (button) button.classList.add('overlay-visible');
    });

    card.addEventListener('mouseleave', function () {
      const overlay = card.querySelector('.contentBox::before');
      const button = card.querySelector('.view-project-btn');
      if (overlay) overlay.classList.remove('visible');
      if (button) button.classList.remove('overlay-visible');
    });

    card.addEventListener('click', function () {
      removeHoverEffect(); // Remove hover effect from all cards
      this.classList.toggle('hover-effect'); // Toggle hover effect for the clicked card
    });
  });

  // Add click event listener to the to-top button
  toTop.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove hover-effect class from all cards
    removeHoverEffect();

    // Scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  });

  document.querySelectorAll('.interior-container img').forEach(image =>{
    image.onclick = () =>{
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
  });

  document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
  }

});