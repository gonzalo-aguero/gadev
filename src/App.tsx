import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './components/Home/Home.tsx';
import SolarSystem from './components/SolarSystem/SolarSystem.tsx';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';

// function moveCard(event: MouseEvent, card: HTMLElement): void {
// 	const cardRect = card.getBoundingClientRect();
// 	const cardWidth = cardRect.width;
// 	const cardHeight = cardRect.height;

// 	let mouseX = event.clientX - cardRect.left - cardWidth / 10;
// 	let mouseY = event.clientY - cardRect.top - cardHeight / 10;

// 	// console.log(mouseX, mouseY);

// 	if (mouseX < 0 && mouseY > 0) mouseX *= -1;
// 	else if (mouseX > 0 && mouseY > 0) mouseX *= -1;
// 	else if (mouseX > 0 && mouseY < 0) mouseX *= -1;
// 	else if (mouseX < 0 && mouseY < 0) mouseX *= -1;

// 	const rotateX = mouseY / 10;
// 	const rotateY = mouseX / 10;

// 	console.log(rotateX, rotateY)

// 	card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
// }

// function resetCard(card: HTMLElement): void {
// 	card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
// }


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

function App() {
	return (
		<>
			<Header></Header>
			<Home></Home>
			<SolarSystem></SolarSystem>
			<About></About>
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

