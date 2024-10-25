const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Toggle mobile menu and overlay
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
  overlay.classList.toggle('active');
});

// Close menu when clicking on the overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  burger.classList.remove('toggle');
  overlay.classList.remove('active');
});
