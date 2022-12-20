const projectsData = [
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: 'img/card2.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    name: 'Multi-post stories',
    featuredImage: 'img/card3.jpg',
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
    featuredImage: 'img/card4.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    name: 'Multi-post stories',
    featuredImage: 'img/card4.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 5,
    name: 'Multi-post stories',
    featuredImage: 'img/card3.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 6,
    name: 'Multi-post stories',
    featuredImage: 'img/card4.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
];

const cardsContainer = document.querySelector('.cards-container');

projectsData.forEach((project) => {
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
    <button class="link-button2" type="button">
      <a class="ltext1" href="#">${button}</a>
    </button>
  </div>
  `;
});
