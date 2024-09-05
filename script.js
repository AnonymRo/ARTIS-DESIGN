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
      window.location.href = 'project1.php';
    });
  }

  //Button for project2
  const project2Button = document.getElementById('project2Button');
  if (project2Button) {
    project2Button.addEventListener('click', function () {
      window.location.href = 'project2.html';
    });
  }

  //Button for project3
  const project3Button = document.getElementById('project3Button');
  if (project3Button) {
    project3Button.addEventListener('click', function () {
      window.location.href = 'project3.html';
    });
  }

  //Button for project4
  const project4Button = document.getElementById('project4Button');
  if (project4Button) {
    project4Button.addEventListener('click', function () {
      window.location.href = 'project4.html';
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

  // Variables to keep track of current image index and total images
  let currentImageIndex = 0;
  let totalImages = 0;

  // Function to show popup
  function showPopup(index) {
    const popupImage = document.querySelector('.popup-image');
    const body = document.querySelector('body');
    const interiorImages = document.querySelectorAll('.interior-container img');

    if (popupImage && body && interiorImages.length > index) {
      currentImageIndex = index;
      totalImages = interiorImages.length;
      popupImage.classList.add('active');
      body.classList.add('popup-open');
      popupImage.style.display = 'block';
      popupImage.querySelector('img').src = interiorImages[index].getAttribute('src');
    }
  }

  // Event listener for images inside .interior-container
  document.querySelectorAll('.interior-container img').forEach((image, index) => {
    image.onclick = () => {
      showPopup(index);
    };
  });

  // Event listener for closing the popup image
  const popupCloseButton = document.querySelector('.popup-image .close');
  if (popupCloseButton) {
    popupCloseButton.onclick = () => {
      const popupImage = document.querySelector('.popup-image');
      const body = document.querySelector('body');
      if (popupImage && body) {
        popupImage.classList.remove('active');
        body.classList.remove('popup-open');
        popupImage.style.display = 'none';
      }
    };
  }

  // Function to navigate to the next image
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    const nextImageSrc = document.querySelectorAll('.interior-container img')[currentImageIndex].getAttribute('src');
    document.querySelector('.popup-image img').src = nextImageSrc;
  }

  // Function to navigate to the previous image
  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    const previousImageSrc = document.querySelectorAll('.interior-container img')[currentImageIndex].getAttribute('src');
    document.querySelector('.popup-image img').src = previousImageSrc;
  }

  // Event listeners for keyboard arrow keys
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      previousImage();
    }
  });

  // Event listener for closing the popup image with prev button
  const prevButton = document.querySelector('.popup-image .prev');
  if (prevButton) {
    prevButton.onclick = () => {
      previousImage();
    };
  }

  // Event listener for closing the popup image with next button
  const nextButton = document.querySelector('.popup-image .next');
  if (nextButton) {
    nextButton.addEventListener('mouseup', function (e) {
      e.preventDefault();
      nextImage();
    });

    nextButton.addEventListener('touchend', function (e) {
      e.preventDefault();
      nextImage();
    });
  }

  // Event listener for closing the popup image with prev button on touch devices
  const prevButtonTouch = document.querySelector('.popup-image .prev');
  if (prevButtonTouch) {
    prevButtonTouch.addEventListener('touchend', function (e) {
      e.preventDefault();
      previousImage();
    });
  }

  // Event listener for closing the popup image with close button
  const closeButton = document.querySelector('.popup-image .close');
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      const popupImage = closeButton.closest('.popup-image');
      const body = document.querySelector('body');
      if (popupImage && body) {
        popupImage.classList.remove('active');
        body.classList.remove('popup-open');
        popupImage.style.display = 'none';
      }
    });
  }

});

//Cookies

setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  })

  return value;
}

document.addEventListener("DOMContentLoaded", function () {
  const cookiesBtn = document.querySelector("#cookies-btn");
  if (cookiesBtn) {
    cookiesBtn.addEventListener("click", () => {
      document.querySelector("#cookies").style.display = "none";
      setCookie("cookie", true, 30);
    });
  }

  cookieMessage();
});

cookieMessage = () => {
  const cookiesContainer = document.querySelector("#cookies");
  if (cookiesContainer && !getCookie("cookie")) {
    cookiesContainer.style.display = "block";
  }
}

window.addEventListener("load", cookieMessage);

var expandableSections = document.querySelectorAll('.expandable-section');

expandableSections.forEach(function (section) {
  var title = section.querySelector('h1');

  // Function to toggle the 'expanded' class for the section
  function toggleExpanded(event) {
    event.preventDefault(); // Prevent default touch event behavior
    section.classList.toggle('expanded');

    // If the clicked section is expanded, close all other sections
    if (section.classList.contains('expanded')) {
      expandableSections.forEach(function (s) {
        // Skip the clicked section
        if (s !== section) {
          s.classList.remove('expanded');
        }
      });
    }
  }

  // Add event listeners for both 'click' and 'touchstart' events
  title.addEventListener('click', toggleExpanded);
  title.addEventListener('touchstart', toggleExpanded);
});

function showContent(targetId) {
  const contents = document.querySelectorAll('.package-content');
  const targetContent = document.getElementById(`content-${targetId}`);

  // Hide all contents with animation
  contents.forEach(content => {
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      content.classList.add('fading');
    }
  });

  // Show the target content
  targetContent.classList.remove('fading'); // Ensure it doesn’t have the fading class
  targetContent.classList.add('active');

  // Remove 'active' class from all packages
  const packages = document.querySelectorAll('.package');
  packages.forEach(pkg => pkg.classList.remove('active'));

  // Add 'active' class to the clicked package
  const targetPackage = document.getElementById(targetId);
  targetPackage.classList.add('active');
}

// Add event listeners to package titles
const packages = document.querySelectorAll('.package h2');
packages.forEach(header => {
  header.addEventListener('click', () => {
    const targetId = header.parentElement.id;
    showContent(targetId);
  });
});

// Display the default content (e.g., 'standard') on page load
document.addEventListener('DOMContentLoaded', () => {
  showContent('standard'); // Default content to display
});

const links = document.querySelectorAll('.Photo');
const views = document.querySelectorAll('.view');

// Show the 'interiors' view by default and set the corresponding link as active
const defaultView = 'interiors';
document.getElementById(defaultView).style.display = 'block';
document.querySelector(`[data-view="${defaultView}"]`).classList.add('active');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const viewToShow = this.getAttribute('data-view');

    // Hide all views and remove active class from all links
    views.forEach(view => view.style.display = 'none');
    links.forEach(link => link.classList.remove('active'));

    // Show the selected view and set the clicked link as active
    document.getElementById(viewToShow).style.display = 'block';
    this.classList.add('active');
  });
});