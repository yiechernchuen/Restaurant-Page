const header = document.createElement('div');
const navDiv = document.createElement('div');
const buttonDiv = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');
const homeContent = document.createElement('div');
const menuContent = document.createElement('div');
const contactContent = document.createElement('div');
const footer = document.createElement('div');
const container = document.querySelector('#content');
header.classList.add('header');
navDiv.classList.add('nav');
footer.classList.add('footer');
buttonDiv.classList.add('buttonDiv');
homeButton.classList.add('navButton');
menuButton.classList.add('navButton');
contactButton.classList.add('navButton');
homeContent.classList.add('home');
menuContent.classList.add('menu');
contactContent.classList.add('contact');
navDiv.appendChild(header);
navDiv.appendChild(buttonDiv);
container.appendChild(navDiv);
container.appendChild(homeContent);
container.appendChild(menuContent);
container.appendChild(contactContent);
container.appendChild(footer);
buttonDiv.appendChild(homeButton);
buttonDiv.appendChild(menuButton);
buttonDiv.appendChild(contactButton);

header.textContent = 'Flavorful Grind';

export { homeButton, homeContent, menuButton, menuContent, contactButton, contactContent };
