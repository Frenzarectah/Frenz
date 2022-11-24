import React from "react"
import './projects.scss'
import '../../../../App.scss'
import ProjectCard from "./Projects_Card/ProjectsCard"
import projectz  from './db.js'
import project_baloon from './projects.svg'

/**
 * this component renders the list of my favourite projects into a scrolling div 
 * (similar to the homepage), the component takes the projects to render directly from
 * a "mock API" called db.js.
 * In this way, when I want to add a new project, I only need to add it into that file.
 * So, projList takes every element of the db and renderizes the ProjectCard component (another component)
 * with all the respective informations.
 * 
 */

const Project = () =>{
    const projList = projectz.map(item=>
        <ProjectCard 
            id={item.id} 
            key={item.id} 
            image={item.thumbnail} 
            link={item.link} 
            name={item.name} 
            stack={item.stack}/>
    )
    return(
        <div className="projects page">
            <p className="projects__header">
                Here's Frenz's Projects as a wild and free FrontEnd Dev in his way
                to become a professionist and no longer a liar :D <br/>
                If you wanna see "behind the scenes", feel free to visit 
                my <a className="github" href="https://github.com/Frenzarectah">github</a> profile!<br/>
                Stay Tuned and let me know what u think!<br/>
                Peace!
            </p>
            <div className="projects__wrapper">
                <div className="projects__cards">
                    {projList}
                </div>
            </div>
            <img alt="project baloon" 
                className="projects__image__container animate__animated animate__heartBeat animate__infinite infinite animate__slower" 
                src={project_baloon}/>
        </div>
    )
}
export default Project