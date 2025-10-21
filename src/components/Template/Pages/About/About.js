import React from "react"
import '../../../../App.scss'
import './About.scss'
import photo from '../About/mi_star.svg'

const About = () =>{
    return(
        <div className="about page">
            <div className="about__photo animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                <img src={photo} alt="author portait"/>
            </div>
            <div className="about__descr">
                <p>
                    Born in '87 in the famous southern Italian city of Bari, he has been interested in programming since he
                    was 15 years old. After finishing high school in computer science in 2006, he 
                    tried to start a career in the web world, but unfortunately with no satisfying results.<br/>
                    Meanwhile, he starts an alternative good career into Electronic, but his heart still felt restless..     
                    <br/>In 2020 he rolled up his sleeves and restarts to learn about the
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
                    In this agency he learned a lot about backend developing, like creating and manutening REST API, using PHP and Laravel, and creating 
                        apps with Vue.js.
                </p>        
                <p>
                    He hopes to grow without limits, discovering different languages, frameworks and so on in this wonderful world :)
                </p>
            </div>
        </div>
    )
}
export default About



