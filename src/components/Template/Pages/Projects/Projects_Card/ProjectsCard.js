import React from "react"
import '../projects.scss'

/**
 * 
 * a simple component card used to renders a single project into the site, used to renders a list of element
 * into another component by mapping them.
 */
const ProjectCard = (props) =>{
    const {name,stack,image,link,id} = props
    return(
        <a href={link}>
            <div id={id} key={id} className="card">
                <img alt="thumbnail" src={image}/>
                <div>{name}</div>
                <div>{stack}</div>
            </div>
        </a>
    )
}

export default ProjectCard