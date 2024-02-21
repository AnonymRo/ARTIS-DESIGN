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

  const projectId = getProjectIdFromURL();
  const project = fetchProjectDetails(projectId);
  renderProjectDetails(project);

  function renderProjectDetails(project) {
    const projectImagesContainer = document.querySelector('.project-images');
    const projectDescriptionContainer = document.querySelector('.project-description');

    project.images.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      projectImagesContainer.appendChild(imgElement);
    });

    projectDescriptionContainer.textContent = project.description;
  }

  function getProjectIdFromURL() {
    // Get the current URL
    const urlParams = new URLSearchParams(window.location.search);
    // Extract the project ID from the URL query parameters
    return urlParams.get('projectId');
  }

  function fetchProjectDetails(projectId) {
    // Example project data
    const projects = {
      'project1': {
        id: 'project1',
        images: ['./Photos/IMG_0015.JPG', './Photos/IMG_0015.JPG', './Photos/IMG_0015.JPG'],
        description: 'This is the description for project 1.'
      },
      'project2': {
        id: 'project2',
        images: ['project2-image1.jpg', 'project2-image2.jpg', 'project2-image3.jpg'],
        description: 'This is the description for project 2.'
      },
      'project3': {
        id: 'project3',
        images: ['project2-image1.jpg', 'project2-image2.jpg', 'project2-image3.jpg'],
        description: 'This is the description for project 3.'
      },
      'project4': {
        id: 'project4',
        images: ['project2-image1.jpg', 'project2-image2.jpg', 'project2-image3.jpg'],
        description: 'This is the description for project 4.'
      },
    };

    // Check if the project ID exists in the projects object
    if (projects.hasOwnProperty(projectId)) {
      return projects[projectId];
    } else {
      // Handle case where project ID is not found
      console.error('Project not found.');
      return null;
    }
  }
});