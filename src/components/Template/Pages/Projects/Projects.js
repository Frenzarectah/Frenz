import React from "react"
import './projects.scss'
import '../../../../App.scss'
import ProjectCard from "./Projects_Card/ProjectsCard"
import project_baloon from './projects.svg'
import { useEffect, useState } from 'react'

/**
 * this component renders the list of my favourite projects into a scrolling div 
 * (similar to the homepage), the component takes the projects to render directly from
 * github REST API.
 * In this way, when I create a new repository on github, it automatically appears on this page.
 * I used the topics field to render the stack of the project.
 * 
 * 
 */

const Project = () =>{
    const [repos, setRepos ] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchRepos = async () =>{
            try{
                const resp = await fetch('https://api.github.com/users/frenzarectah/repos?sort=updated&direction=desc')
                if(resp.status !== 200){
                    setError(`GIT ERROR OCCURRED: ${resp.status} - ${resp.statusText}`)
                }else{
                    const data = await resp.json()
                    setRepos(data)
                }
            }catch ( error) {
                setError(error)
            }
        }
        fetchRepos()
    },[])

    const projList = repos.slice(0,5).map(item=>
        <ProjectCard 
            id={item.id} 
            key={item.id} 
            image={`/Thumbnail/${item.name}.webp`} 
            link={item.git_url} 
            name={item.name} 
            stack={item.topics.join(" ★ ").toUpperCase()}/>
    )
    return(
        <div className="projects page">
            <p className="projects__header">
                Here's Frenz's Projects as a wild and free FrontEnd Dev in his way
                to become a professionist and no longer a liar :D <br/>
                This projects are automatically getted from GITHUB REST API, but
                if you wanna see "behind the scenes", feel free to visit 
                my <a className="github" href="https://github.com/Frenzarectah">github</a> profile!<br/>
                Stay Tuned and let me know what u think!<br/>
                Peace!
            </p>
            <div className="projects__wrapper">
                <div className="projects__cards">
                    { error 
                        ? error 
                        : projList.length > 0 
                            ? projList 
                            : <p>Loading projects...</p> }
                </div>
            </div>
            <img alt="project baloon" 
                className="projects__image__container animate__animated animate__heartBeat animate__infinite infinite animate__slower" 
                src={project_baloon}/>
        </div>
    )
}
export default Project