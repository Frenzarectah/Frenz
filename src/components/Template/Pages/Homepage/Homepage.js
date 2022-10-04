import React from "react";
import '../../../../App.scss';
import './Homepage.css';
import logo from '../../../../assets/mi_lined.png';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconAsterisk = <FontAwesomeIcon icon={faAsterisk} color="black"/>
    const iconStar = <FontAwesomeIcon icon={faStar} color="black"/>
    return(
        <div className="homepage">
            <div className="roll__text">
                <span>FRENZ {iconAsterisk} SORRENTINO</span>
            </div>
            <div className="subtitle">
                <span>FRONTEND DEVELOPER  {iconStar}</span>  
                <span>STREAMER  {iconStar}</span>  
                <span>LEGO ADDICTED {iconStar}</span> 
            </div>
        </div>
        
    )
}
export default Homepage;