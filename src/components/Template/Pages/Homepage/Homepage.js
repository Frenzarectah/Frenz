import React from "react";
import { useState } from "react";
import '../../../../App.scss';
import './Homepage.css';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconStar = <FontAwesomeIcon icon={faAsterisk} color="black"/>
    
    return(
        <div className="homepage">
            <div className="roll__text">
                <p>FRENZ {iconStar} SORRENTINO</p>
            </div>
            <p className="subtitle">Passionate and Self-taught FrontEnd Developer </p>
        </div>
    )
}
export default Homepage;