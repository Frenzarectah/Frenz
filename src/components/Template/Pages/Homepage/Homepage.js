import React from "react";
import '../../../../App.scss';
import './Homepage.css';
import logo from '../../../../assets/mi.gif';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = ()=>{
    const iconStar = <FontAwesomeIcon icon={faAsterisk} color="black"/>
    
    return(
        <div className="homepage">
            <img className="logo__face" src={logo}/>
            <div className="roll__text">
                <p>FRENZ {iconStar} SORRENTINO</p>
            </div>
            <p className="subtitle animated bounceInDown">Passionate and Self-taught FrontEnd Developer </p>
        </div>
    )
}
export default Homepage;