const contactForm = document.querySelector('.form-action');
const error = document.querySelector('small');
const formInput = document.querySelectorAll('.form-data');
const form = {
  fullName: "1",
  email: "2",
  comment: "3"
};

formInput.forEach((input, index) => {
  input.addEventListener('change', (event) => {
    form.fullName = formInput[0].value;
    form.email = formInput[1].value;
    form.comment = formInput[2].value;
    localStorage.setItem("form", JSON.stringify(form));
    console.log(localStorage);
  });
});

window.onbeforeunload = function() {
  localStorage.setItem("form", JSON.stringify(form));
}

window.onload = function () {
  form = JSON.parse(localStorage.getItem("form"));
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.classList.add('error');
  } else {
    contactForm.submit();
  }
});


