import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Projects/card-skeleton.css';
import './components/Projects/card.css';
import TuringMachineAnimationHandler from './components/TuringMachine/Handler.tsx'
import './components/TuringMachine/style.css';
import getProjects from './http.tsx';

function moveCard(event: MouseEvent, card: HTMLElement): void {
  const cardRect = card.getBoundingClientRect();
  const cardWidth = cardRect.width;
  const cardHeight = cardRect.height;

  let mouseX = event.clientX - cardRect.left - cardWidth / 10;
  let mouseY = event.clientY - cardRect.top - cardHeight / 10;

  // console.log(mouseX, mouseY);

  if (mouseX < 0 && mouseY > 0) mouseX *= -1;
  else if (mouseX > 0 && mouseY > 0) mouseX *= -1;
  else if (mouseX > 0 && mouseY < 0) mouseX *= -1;
  else if (mouseX < 0 && mouseY < 0) mouseX *= -1;

  const rotateX = mouseY / 10;
  const rotateY = mouseX / 10;

  console.log(rotateX, rotateY)

  card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
}

function resetCard(card: HTMLElement): void {
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
}
interface Project {
  id: number;
  title: string;
  image: string | null;
  description: string;
  link: string;
}
function renderProjects(container: HTMLElement, projects: Array<Project>): void {
  const projectCards = projects.map(project => `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image !== null ? project.image : 'project_image.png'}" alt="Project Image">
        </div>
        <div class="project-details">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="btn">View Details</a>
        </div>
      </div>
    `);

  container.innerHTML = projectCards.join('');
}

function validateForm() {
  var checkbox = document.getElementById("bot-check") as HTMLFormElement;
  if (checkbox.checked) {
    return false; // Detener el envío del formulario
  }
  // Si el checkbox no está marcado, el formulario puede enviarse
  return true;
}


// Obtén los elementos que deseas observar
// const solarSystem = document.getElementById("solar-system") ;
// const planet = solarSystem.querySelectorAll(".planet");
// const sun = solarSystem.querySelector(".sun");


// Función para verificar si un elementA está sobre elementB
// function isElementOverlapping(elementA, elementB, threshold) {
//   const rectA = elementA.getBoundingClientRect();
//   const rectB = elementB.getBoundingClientRect();
//   const intersectionThreshold = threshold || 0; // Umbral de intersección predeterminado de 0
//   return rectA.x < rectB.x + rectB.width - intersectionThreshold &&
//     rectA.x + rectA.width - intersectionThreshold > rectB.x;
// }

window.onload = async function () {
  const projects = await getProjects();
  const container = document.getElementById('project-container') as HTMLElement;
  setTimeout(() => {
    renderProjects(container, projects);
  }, 0)

  const tmContainer = document.getElementById("turing-machine-container") as HTMLElement;
  new TuringMachineAnimationHandler(tmContainer);

};


function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1>Hello,<br></br>I'm a Software Developer</h1>
        <div id="solar-system">
          <span className="spherical-body sun"><span className="center"></span></span>
          <span className="spherical-body planet" id="planet1"></span>
          <span className="spherical-body planet" id="planet2"></span>
          <span className="spherical-body planet" id="planet3"></span>
        </div>
        <div id="turing-machine-container" className="turing-machine">
          <div className="tape">
            <div className="head">
              <div className="_1"></div>
              <div className="_2"></div>
            </div>
            <div className="tape-content"></div>
          </div>
        </div>
      </section>




      <section id="about">
        <h2>About Me</h2>
        <p>Add some information about yourself here.</p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-items" id="project-container">
          {/* <!-- Add your portfolio items here --> */}

          <div className="project-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-details">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
          <div className="project-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-details">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>


        </div>
      </section>

      
      {/* <section id="contact">
        <h2>Contact Me</h2>
        <form onsubmit="return validateForm()">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Message" required></textarea>
          <input type="checkbox" id="bot-check" style="display: none;">
          <button type="submit">Send Message</button>
        </form>
      </section> */}



      <footer>
        <p>&copy; 2023 Gonzalo Agüero. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

