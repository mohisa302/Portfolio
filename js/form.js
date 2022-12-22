const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const email = document.querySelector('#email');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.classList.add('error');
  } else {
    contactForm.submit();
  }
});
