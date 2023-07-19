import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import "./style.css";

export default function Home() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <section id="home">
                <h1>Hello,<br></br>I'm a Software Developer</h1>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 200,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "char",
                                options: {
                                    character: {
                                        value: {
                                            0: "t",
                                            1: "s",
                                            2: "P",
                                            3: "a",
                                            4: "r",
                                            5: "t",
                                            6: "i",
                                            7: "c",
                                            8: "l",
                                            9: "e",
                                            10: "s"
                                        },
                                        font: "Verdana",
                                        weight: 400,
                                        fill: true
                                    },
                                    char: {
                                        value: {
                                            0: "t",
                                            1: "s",
                                            2: "P",
                                            3: "a",
                                            4: "r",
                                            5: "t",
                                            6: "i",
                                            7: "c",
                                            8: "l",
                                            9: "e",
                                            10: "s"
                                        },
                                        font: "Verdana",
                                        weight: 400,
                                        fill: true
                                    }
                                },
                            },
                            "size": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 1
                                },
                                "value": 16,
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 10,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false,
                                    "mode": "auto",
                                    "startValue": "random",
                                    "destroy": "none",
                                    "minimumValue": 10
                                }
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </section>
        </>
    );
}