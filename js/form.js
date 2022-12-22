const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const formInput = document.querySelectorAll('.form-data');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.classList.add('error');
  } else {
    contactForm.submit();
  }
});

// put our information in an object
let formInfo = {
  userName: "",
  email: "",
  message: "",
};

formInput.forEach((input, index) => {
  input.addEventListener('change', () => {
    formInfo.username = formInput[0].value;
    formInfo.email = formInput[1].value;
    formInfo.message = formInput[2].value;
    console.log(localStorage);
  });
  localStorage.setItem('form', JSON.stringify(formInfo));
});

