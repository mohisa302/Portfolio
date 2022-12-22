const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const formInput = document.querySelectorAll('.form-data');
const email = document.querySelector('#email');

let form = {
  fullName: formInput[0].value,
  email: formInput[1].value,
  comment: formInput[2].value,
};

// add data base to object after reloading
form = JSON.parse(localStorage.getItem('form'));
// add object properties input fields after reload
formInput[0].value = form.fullName;
formInput[1].value = form.email;
formInput[2].value = form.comment;

formInput.forEach((input) => {
  input.addEventListener('change', () => {
    form.fullName = formInput[0].value;
    form.email = formInput[1].value;
    form.comment = formInput[2].value;
    localStorage.setItem('form', JSON.stringify(form));
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.classList.add('error');
  } else {
    contactForm.submit();
  }
});
