const menu = document.querySelector('.menu-click');
const bars = document.querySelector('.union');
const close_btn = document.querySelector('.close-icon');
const nav_links = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
  menu.classList.add('open');
  console.log('click');
});

close_btn.addEventListener('click', () => {
  menu.classList.remove('open');
});

nav_links.forEach((nav_link) => {
  nav_link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});
