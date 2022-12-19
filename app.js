const menu = document.querySelector('.menu-click');
const bars = document.querySelector('.union');
const close_btn = document.querySelector('.close-icon');

bars.addEventListener('click', () => {
  menu.classList.add('open');
  console.log('click');
});

close_btn.addEventListener('click', () => {
  menu.classList.remove('open');
});
