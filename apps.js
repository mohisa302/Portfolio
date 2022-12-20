const menu = document.querySelector('.menu-click');
const bars = document.querySelector('.union');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');
const cardOne = {
  name: "Multi Post Stories",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent" ,
  featuredImage: "./img/pop.png" ,
  technologies: ["html", "Bootstrap", "Ruby on rails"],
  linkLive: "#",
  linkSource: "#"
}
// document.getElementById('message').innerHTML = cardOne.name;

bars.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});