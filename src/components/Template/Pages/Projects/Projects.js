import React from "react";
import project_baloon from './projects.png';
import './projects.scss';
import ProjectCard from "./Projects_Card/ProjectsCard";
import projectz  from './db.js';

const Project = () =>{
    const projList = projectz.map(item=>
        <ProjectCard id={item.id} key={item.id} image={item.thumbnail} link={item.link} name={item.name} stack={item.stack}/>
    )

    return(
        <div className="projects">
            <p className="projects__header">
                Here's Frenz's Projects as a wild and free FrontEnd Dev in his way
                to become a professionist and no longer a liar :D <br/>
                If you wanna see "behind the scenes", feel free to visit my <a className="github" href="https://github.com/Frenzarectah">github</a> profile!<br/>
                Stay Tuned and let me know what u think!<br/>
                Peace!
            </p>
            <div className="projects__wrapper">
                <div className="projects__cards">
                    {projList}
                </div>
            </div>
            <img alt="project baloon" className="projects__image__container animate__animated animate__heartBeat animate__infinite infinite animate__slower" src={project_baloon}/>
        </div>
    )
}
export default Project;