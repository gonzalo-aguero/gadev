import "./styles.css";
import "./card.css";
import "./card-skeleton.css";
import { useEffect, useState } from "react";

interface Project {
    id: number;
    title: string;
    image: string | null;
    description: string;
    link: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Array<Project>>([]);
    const getProjects = () => {
        fetch("./json/projects.json")
            .then(response => response.json())
            .then(data => {
                console.log("DATA", data);
                setProjects(data);
            });
            console.log("asd")
    };

    const renderProjects = (container: HTMLElement, projects: Array<Project>) => {
        const projectCards = projects.map(project => {
            return (
                <div className="project-card">
                    <div className="project-image">
                        <img src="${project.image !== null ? project.image : 'project_image.png'}" alt="Project Image" />
                    </div>
                    <div className="project-details">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" className="btn">View Details</a>
                    </div>
                </div>
            );
        });

        container.innerHTML = projectCards.join('');
    }
    useEffect(() => {
        getProjects();
        
    }, []);
    return (
        <>
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div className="portfolio-items" id="project-container">
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
        </>
    );
}