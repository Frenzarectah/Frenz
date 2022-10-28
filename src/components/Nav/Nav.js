import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger,faHome } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import './Nav.scss';

const Nav = () =>{
    const iconHome = <FontAwesomeIcon icon={faHome} color="black"/>
    return(
        <nav className="fixed_nav">
            <div className="logo"><FontAwesomeIcon icon={faHamburger} color="black" size="3x"/></div>
            <ul>
                <li>
                <Button color="black" bkgColor="transparent" border="3px solid black" caption={iconHome} address="/"/>
                </li>
                <li>
                <Button color="black" bkgColor="transparent" border="3px solid black" font="Erica One" caption="About" address="/whoami"/>
                </li>
            </ul>
        </nav>
    )
}
export default Nav

/*
                <Button cln="topLeft" color="black" bkgColor="transparent" border="3px solid black" caption={iconHome} address="/"/>
                <Button cln="topRight" color="black" bkgColor="transparent" border="3px solid black" font="Erica One" caption="About" address="/whoami"/>
                <Button cln="bottomLeft" color="black" bkgColor="transparent" border="3px solid black" font="Permanent Marker" caption="projects" address="/projects"/>
                <Button cln="bottomRight" color="black" bkgColor="transparent" border="3px solid black" font="Rubik Dirt" caption="Contact" address="/contact"/>

*/