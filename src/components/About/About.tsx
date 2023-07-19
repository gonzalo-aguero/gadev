import TuringMachine from "../TuringMachine/TuringMachine";
import "./styles.css";
export default function About() {
    return (
        <>
            <section id="about">
                <div className="text">
                    <h2>About Me</h2>
                    <p>Add some information about yourself here.</p>
                    <p>Here you must to write about you, your personality, your career as professional, etc.</p>
                </div>
                <TuringMachine></TuringMachine>                
            </section>
        </>
    );
}