import React from "react";
import '../../../../App.scss';
import './Homepage.css';
import logo from '../../../../assets/mi_lined.png';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconAsterisk = <FontAwesomeIcon icon={faAsterisk} color="black"/>
    
    return(
        <div className="homepage">
            <div className="roll__text">
                <span>FRENZ {iconAsterisk} SORRENTINO</span>
            </div>
            <p className="subtitle">Passionate and Self-taught FrontEnd Developer </p>
            {/* <img className="logo__face" src={logo}/> */}
        </div>
        
    )
}
export default Homepage;