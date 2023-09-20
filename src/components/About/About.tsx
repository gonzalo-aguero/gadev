import TuringMachine from "../TuringMachine/TuringMachine";
import "./styles.css";
export default function About() {
    return (
        <>
            <section id="about">
                <div className="text">
                    <h2 className="font-sans text-2xl mb-4">Sobre mí</h2>
                    <p>Mi nombre es Gonzalo Agüero y soy desarrollador de software. 
                        Soy programador desde hace más de dos años y actualmente estudiante de Ingeniería en Sistemas en la UTN de Santa Fe, Argentina.</p>
                    <p>Soy una persona muy apasionada por el diseño y desarrollo de soluciones. Soy muy curioso y siempre me esmero en construir 
                        la mejor versión de mí mismo, adquiriendo nuevos conocimientos, buenas prácticas y mejorando la eficiencia y calidad de los desarrollos. </p>
                    <p>Me llevo muy bien con el desarrollo web, tanto en el backend como en el frontend con múltiples lenguajes y tecnologías.</p>
                    <p>He aprendido desarrollo básico de aplicaciones móviles a través de React Native utilizando Expo, desarrollo de aplicaciones de escritorio con Java, y por el momento, programas de consola con C++.</p>
                    <p>Continuo aprendiendo a diario sobre varios temas relacionados al desarrollo de software. También, mientras viajo, me gusta ponerme al día con las últimas noticias y tendencias a través de daily.dev.</p>
                    <p>A veces, con el objetivo de mejorar mi capacidad de crear software eficiente y funcional, me gusta resolver ejercicios de programación. Esto me ayuda a mejorar mi lógica, capacidad de análisis y eficiencia algorítmica. Si así deseas, puedes ver en <a href="https://www.beecrowd.com.br/judge/es/profile/639708" target="_blank" >mi perfil de Beecrowd</a> los problemas que he resuelto hasta el momento (resueltos en C++).</p>

                </div>
                <TuringMachine></TuringMachine>                
            </section>
        </>
    );
}