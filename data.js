const projectsData = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/img1.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    button: 'see project',
    technologies: ['html', 'css', 'Bootstrap', 'Ruby'],
  },
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/card2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    name: 'Multi-post stories',
    featuredImage: './img/card3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    name: 'Multi-post stories',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 5,
    name: 'Multi-post stories',
    featuredImage: './img/card3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 6,
    name: 'Multi-post stories',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
];

const cardsContainer = document.querySelector('.cards-container');
const workContainer = document.querySelector('.recent-work');

cardsContainer.innerHTML = `            <div class="work1">
<img
  class="work-img"
  src= ${projectsData[0].featuredImage}
  alt="image of one project"
/>
</div>
<div class="work2">
<h2 class="wtext1">${projectsData[0].name}</h2>
<p class="wtext2"> ${projectsData[0].description}
</p>
<ul class="bottun">
  <li class="icon1-holder">
    <nav class="icon1">${projectsData[0].technologies[1]}</nav>
  </li>
  <li class="icon2-holder">
    <nav class="icon1">${projectsData[0].technologies[0]}</nav>
  </li>
  <li class="icon3-holder">
    <nav class="icon1">${projectsData[0].technologies[2]}</nav>
  </li>
  <li class="icon4-holder">
    <nav class="icon1">${projectsData[0].technologies[3]}</nav>
  </li>
</ul>
<button class="link-button pop-class" type="button">
  <a class="ltext1" href="#"> ${projectsData[0].button} </a>
</button>
</div>`;

projectsData.forEach((project, index) => {
    const {
      id,
      name,
      featuredImage,
      description,
      button,
      technologies,
    } = project;

    cardsContainer.innerHTML += `
  <div class="card card1">
    <title class="cardt">${name}</title>
    <title class="cardt-des">Data</title>
    <title class="cardt-des">Healthcare</title>
    <p class="cardp-des">
      ${description}
    </p>
    <p class="cardp">
      A daily selection of privately personalized reads; no
      accounts or sign-ups required. has been the industry's
      standard
    </p>
    <ul class="cardb">
      <li class="bot button1">${technologies[0]}</li>
      <li class="bot button2">${technologies[2]}</li>
      <li class="bot button3">${technologies[1]}</li>
    </ul>
    <button class="link-button2 pop-class" type="button">
      <a class="ltext1" href="#">${button}</a>
    </button>
  `;
});

const openPopupButton = document.querySelectorAll('.pop-class');
const modals = document.querySelectorAll('.modal');
const closeBtnPop = document.querySelector('.close-icon');

const popUp = ((project) => {
  return `<!-- modal -->
  <div class="modal">
  <h3>${project.name}</h3>
  <img src="./img/blackcross.png" alt="cross icon" class="close-icon">
  <ul class="cardb">
    <li class="bot button1">${project.technologies[0]}</li>
    <li class="bot button2">${project.technologies[2]}</li>
    <li class="bot button3">${project.technologies[1]}</li>
  </ul>
  <img src=${project.featuredImage} alt="project image" class="pop-window"/>
  <p class="modal-text">
  ${project.description}
  </p>
  <button class="link-button" type="button">
    <a class="ltext1" href="#">${project.button}</a>
  </button>
  </div>`
});

openPopupButton.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    workContainer.innerHTML += popUp(projectsData[btnIndex]);
  });
});

