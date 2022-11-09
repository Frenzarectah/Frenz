import React from "react";
import '../../../../App.scss';
import './Homepage.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconstar = <FontAwesomeIcon icon={faStar} color="black"/>
    return(
        <div className="homepage">
            <span className="roll__text">
                FRENZ {iconstar} SORRENTINO
            </span>
            <div className="subtitle">
                <span>"Talented, Brilliant, Incredible and Amazing <s>FRONTEND DEVELOPER</s> liar"</span>
                <span>-New York Times</span>
            </div>
        </div>
        
    )
}
export default Homepage;