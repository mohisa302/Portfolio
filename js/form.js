const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const formInput = document.querySelectorAll('.form-data');
const email = document.querySelector('#email');

const form = {
  fullName: formInput[0].value,
  email: formInput[1].value,
  comment: formInput[2].value,
};

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

const data = () => {
  const dataForm = JSON.parse(localStorage.getItem('form'));
  if (dataForm) {
    // add object properties input fields after reload
    formInput[0].value = dataForm.fullName;
    formInput[1].value = dataForm.email;
    formInput[2].value = dataForm.comment;
  }
};

window.addEventListener('DOMContentLoaded', data);