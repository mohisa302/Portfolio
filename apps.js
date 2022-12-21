const menu = document.querySelector('.menu-click');
const bars = document.querySelector('.union');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});