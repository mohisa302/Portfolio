const contactForm = document.querySelector('.form-action');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');
});
