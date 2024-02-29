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

// Function to show popup and prevent scrolling
function showPopup(index) {
    const popupImage = document.querySelector('.popup-image');
    const body = document.querySelector('body'); // Select the body element
    const interiorImages = document.querySelectorAll('.interior-container img');

    if (popupImage && body && interiorImages.length > index) {
        currentImageIndex = index; // Set current image index
        totalImages = interiorImages.length; // Get total images
        popupImage.classList.add('active'); // Add active class to prevent scrolling
        body.classList.add('popup-open'); // Add class to body to prevent scrolling
        popupImage.style.display = 'block';
        popupImage.querySelector('img').src = interiorImages[index].getAttribute('src'); // Get image source using index
    }
}

// Event listener for images inside .interior-container
document.querySelectorAll('.interior-container img').forEach((image, index) => {
    image.onclick = () => {
        showPopup(index); // Pass the index to the showPopup function
    }
});

// Event listener for closing the popup image
const popupCloseButton = document.querySelector('.popup-image .close');
if (popupCloseButton) {
    popupCloseButton.onclick = () => {
        const popupImage = document.querySelector('.popup-image');
        const body = document.querySelector('body'); // Select the body element
        if (popupImage && body) {
            popupImage.classList.remove('active'); // Remove active class to enable scrolling
            body.classList.remove('popup-open'); // Remove class from body to enable scrolling
            popupImage.style.display = 'none';
        }
    }
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

// Event listeners for swiping left and right on touch devices
const threshold = 50; // Minimum swipe distance to trigger navigation

document.querySelectorAll('.popup-image img').forEach(function(element) {
    let touchStartX = 0;
    let touchEndX = 0;

    element.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    element.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;
        if (touchEndX - touchStartX > threshold) {
            // Swipe right
            previousImage();
        } else if (touchStartX - touchEndX > threshold) {
            // Swipe left
            nextImage();
        }
    });
});

// Event listener for closing the popup image with prev button
const prevButton = document.querySelector('.popup-image .prev');
if (prevButton) {
    prevButton.onclick = () => {
        previousImage();
    }
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
        const body = document.querySelector('body'); // Select the body element
        if (popupImage && body) {
            popupImage.classList.remove('active'); // Remove active class to enable scrolling
            body.classList.remove('popup-open'); // Remove class from body to enable scrolling
            popupImage.style.display = 'none';
        }
    });
}

});

document.addEventListener("DOMContentLoaded", function() {
  const cookieBox = document.querySelector('.wrapper');
  const buttons = document.querySelectorAll('.button');

  const executeCodes = () => {
      if(document.cookie.includes("artisdesign")) return;
      cookieBox.classList.add("show");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("Button clicked:", button.id); // Log button click
            cookieBox.classList.remove("show");
    
            if (button.id == "acceptBtn") {
                console.log("Accept button clicked."); // Log accept button click
                document.cookie = "cookie= artisdesign; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
  };

  window.addEventListener("load", executeCodes);
});