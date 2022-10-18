import React from "react";
import project_baloon from './projects.png';
import './projects.scss';
import ProjectCard from "./Projects_Card/ProjectsCard";
import projectz  from './db.js';

const Project = () =>{
    const projList = projectz.map(item=>
        <ProjectCard id={item.id} image={item.thumbnail} link={item.link} name={item.name} stack={item.stack}/>
    )

    return(
        <div className="projects">
            <div className="projects__wrapper">
                <div className="projects__cards">
                    {projList}
                </div>
            </div>
            <img className="projects__image__container animate__animated animate__heartBeat animate__infinite infinite animate__slower" src={project_baloon}/>
        </div>
    )
}
export default Project;