import "./styles.css";
import "./card.css";
import "./card-skeleton.css";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Project {
    id: number;
    title: string;
    image: string | null;
    description: string;
    link: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Array<Project>>([]);
    const projectsContainer = useRef(null);
    const getProjects = () => {
        fetch("./json/projects.json")
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            });
    };
    const projectCardSkeleton = (): ReactNode => {

        return (
                <div className="project-card skeleton">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-details">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-description"></div>
                        <div className="skeleton-button"></div>
                    </div>
                </div>
        );
    };
    const renderProjects = (projects: Array<Project>): ReactNode => {
        if(projects.length){
            const projectCards = projects.map((project): ReactNode => {
                return (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image !== null ? project.image : 'project_image.png'} alt="Project Image" />
                        </div>
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" className="btn">Ver</a>
                        </div>
                    </div>
                );
            });
            return projectCards;
        }else{
            return(
                <>
                { projectCardSkeleton() }
                { projectCardSkeleton() }
                { projectCardSkeleton() }
                { projectCardSkeleton() }
                </>
            );
        }
    }
    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <section id="portfolio">
                <h2 className="font-sans text-2xl mb-4">Proyectos</h2>
                <div className="portfolio-items" id="project-container" ref={projectsContainer}>
                    {renderProjects(projects)}
                </div>
            </section>
        </>
    );
}