// Define the navSlide function that controls the menu animation
const navSlide = () => {
    // Get the burger icon, navigation menu, and navigation links
    const burger = document.querySelector('.fa-bars');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Get the exit button element
    const exitBtn = document.querySelector('.fa-times');
  
    // Add a click event listener to the burger icon
    burger.addEventListener('click', () => {
      // Toggle the "active" class on the navigation menu to open/close it
      nav.classList.toggle('active');
      // Animate the navigation links with the navLinkFade animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      // Toggle the "toggle" class on the burger icon to change its appearance
      burger.classList.toggle('toggle');
    });
  
    // Add a click event listener to the exit button
    exitBtn.addEventListener('click', () => {
      // Remove the "active" class from the navigation menu to close it
      nav.classList.remove('active');
      // Remove the "toggle" class from the burger icon to reset its appearance
      burger.classList.remove('toggle');
    });
  }
  // Call the navSlide function to initialize the menu animation
  navSlide();
  
  
    