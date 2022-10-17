import React from "react";


const ProjectCard = (props) =>{
    const {name,descr,stack} = props;
    return(
        <div>
            <div>{name}</div>
            <div>{descr}</div>
            <div>{stack}</div>
        </div>
    )
}

export default ProjectCard;