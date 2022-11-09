import React from "react";
import '../../../../App.scss';
import './About.scss';
import photo from '../About/mi_star.webp';

const About = () =>{
    return(
        <div className="about">
            <div className="about__descr">
                <p>
                    Born in '87 in the famous south-italy city called Bari, became interested in Programming
                    since he was 15y old.
                    When he finished school in computer science, in 2006, he tried to enter in the Web World but
                    unfortunately with bad results.<br/>In 2020 he rolled up his sleeves and restarts to learn about the
                    thousands shades of FrontEnd Development, from HTML/CSS basis to the popular Javascript library called 
                    React.js and sperimenting style frameworks as Bootstrap and TailwindCss (this last is his fav :)
                </p>
                <p>
                    He believes in "learn-by-doing" approach, also because he's a self-taugth Developer, so the bigger part 
                    of his knowledge follows this concept.
                </p>
                <p>
                    He hopes to be hired by a wideopen-minded company which takes care about his people and focusing on continuos training
                    and gives the possibility to grow together. 
                </p>
            </div>
            <div className="about__photo animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                <img src={photo} alt="author portait"/>
            </div>
        </div>
    )
}
export default About;