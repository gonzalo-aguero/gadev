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

function renderProjects(container, projects) {
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
  var checkbox = document.getElementById("bot-check");
  if (checkbox.checked) {
    // Si el checkbox está marcado, significa que un bot lo completó
    // Puedes tomar la acción adecuada aquí, como mostrar un mensaje de error o bloquear el envío del formulario
    return false; // Detener el envío del formulario
  }
  // Si el checkbox no está marcado, el formulario puede enviarse
  return true;
}


// Obtén los elementos que deseas observar
// const solarSystem = document.getElementById("solar-system");
// const planet = solarSystem.querySelectorAll(".planet");
// const sun = solarSystem.querySelector(".sun");

// Configura las opciones del Intersection Observer
const options = {
  threshold: 0.5, // Umbral de intersección del 50%
};


// Función para verificar si un elementA está sobre elementB
function isElementOverlapping(elementA, elementB, threshold) {
  const rectA = elementA.getBoundingClientRect();
  const rectB = elementB.getBoundingClientRect();
  const intersectionThreshold = threshold || 0; // Umbral de intersección predeterminado de 0
  return rectA.x < rectB.x + rectB.width - intersectionThreshold &&
    rectA.x + rectA.width - intersectionThreshold > rectB.x;
}

export default 2;