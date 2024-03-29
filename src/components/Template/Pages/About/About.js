import React from "react"
import '../../../../App.scss'
import './About.scss'
import photo from '../About/mi_star.svg'

const About = () =>{
    return(
        <div className="about page">
            <div className="about__descr">
                <p>
                    Born in '87 in the famous south-italy city called Bari, became interested in Programming
                    since he was 15y old.
                    When he finished school in computer science, in 2006, he tried to enter in the Web World but
                    unfortunately with no satisfying results.<br/>In 2020 he rolled up his sleeves and restarts to learn about the
                    thousands shades of FrontEnd Development, from HTML/CSS basis to the popular Javascript library called 
                    React.js and sperimenting style frameworks as Bootstrap and TailwindCss (this last is his fav :)
                </p>
                <p>
                    He believes in "learn-by-doing" approach, also because he's a self-taugth Developer, so the bigger part 
                    of his knowledge follows this concept.
                </p>
                <p>
                    On march 2023 arrived an opportunity to work into a mid-size ecommerce agency in Verona, as a fullstack developer, he didn't think twice 
                    about that, anyway his heart remains frontend-cored :D
                </p>
                <p>
                    He hopes to grow without limits, discovering different languages, frameworks and so on in this wonderful world :>
                </p>
            </div>
            <div className="about__photo animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                <img src={photo} alt="author portait"/>
            </div>
        </div>
    )
}
export default About
