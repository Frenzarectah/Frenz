import React from "react";
import '../projects.scss';

const ProjectCard = (props) =>{
    const {name,stack,image,link,id} = props;
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

export default ProjectCard;