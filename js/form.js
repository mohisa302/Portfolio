const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const formInput = document.querySelectorAll('.form-data');
const email = document.querySelector('#email');

let form = {
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

if (localStorage.getItem('form')) {
  form = JSON.parse(localStorage.getItem('form'));
  formInput[0].value = form.fullName;
  formInput[1].value = form.email;
  formInput[2].value = form.comment;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.classList.add('error');
  } else {
    contactForm.submit();
  }
});

// put our information in an object
const formInfo = {
  userName: '',
  email: '',
  message: '',
};

formInput.forEach((input) => {
  input.addEventListener('change', () => {
    formInfo.username = formInput[0].value;
    formInfo.email = formInput[1].value;
    formInfo.message = formInput[2].value;
  });
  localStorage.setItem('form', JSON.stringify(formInfo));
});
