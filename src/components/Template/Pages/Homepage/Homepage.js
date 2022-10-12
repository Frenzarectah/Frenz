import React from "react";
import '../../../../App.scss';
import './Homepage.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconStar = <FontAwesomeIcon icon={faStar} color="black"/>
    return(
        <div className="homepage">
            <div className="roll__text">
                <span>FRENZ {iconStar} SORRENTINO</span>
            </div>
            <div className="subtitle">
                <span>"Talented, Brilliant, Incredible and Amazing <s>FRONTEND DEVELOPER</s> liar"</span>
                <span>-New York Times</span>
            </div>
        </div>
        
    )
}
export default Homepage;