import React from "react";
import '../../../../App.scss';
import './Homepage.scss';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconstar = <FontAwesomeIcon icon={faStar} color="black"/>
    return(
        <div className="homepage">
            <span className="homepage__text">
                FRENZ {iconstar} SORRENTINO
            </span>
            <div className="homepage__subtitle">
                <span>"Talented, Brilliant, Incredible and Amazing <s>FRONTEND DEVELOPER</s> liar"</span>
                <span>-New York Times</span>
            </div>
        </div>
        
    )
}
export default Homepage;