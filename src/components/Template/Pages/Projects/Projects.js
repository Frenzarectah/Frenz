import React from "react";
import project_baloon from './projects.png';
import './projects.scss';
import ProjectCard from "./Projects_Card/ProjectsCard";
import projectz from './db.js';

const Project = () =>{
    return(
        <div className="projects">
            <div className="projects__descr">
                <p>In this page i'll collect my work as frontend developer, a kind of
                local repository.
                Every single project has his own link to my <a className="github" href="https://github.com/Frenzarectah"><strong>github </strong></a>
                if u want to take a look to my code :)</p>
                <p>Feel free to take a look to all of them, sorted by technology and developing data.</p>
                <p>C ya!</p>
                <ProjectCard name={projectz[1].name} descr={projectz[1].description} stack={projectz[1].stack} />
            </div>
            <img className="projects__image__container animate__animated animate__wobble animate__infinite infinite animate__slower" src={project_baloon}/>
        </div>
    )
}
export default Project;