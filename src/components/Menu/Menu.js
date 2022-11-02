import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger,faHome} from "@fortawesome/free-solid-svg-icons";
import './Menu.css';

const Menu = ()=>{
    const [view,setView] = useState(false);
    
    const hambMenu = (visibility)=>{
        if (window.matchMedia("only screen and (max-width: 600px)").matches === true){
            return(<FontAwesomeIcon icon={faHamburger} color={visibility?"white":"black"} size="3x"/>
        )}else{
            return(<FontAwesomeIcon icon={faHamburger} color="black" size="3x"/>
        )}
    }
    const homeIcon = <FontAwesomeIcon icon={faHome} color="black" size="1x"/>
    let cln = "menu__container ";
      if(view)cln+="entering";
        return(
            <>
            <div className="menu animate__animated animate__shakeX animate__delay-2s" onClick={()=>setView(!view)}>
                {hambMenu(view)}
            </div>
            <nav className={cln}>
                <ul>    
                    <NavLink exact="true" className="link" to="/" onClick={()=>setView(!view)}><li>home</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/whoami" onClick={()=>setView(!view)}><li>about</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/projects" onClick={()=>setView(!view)}><li>projects</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/contact" onClick={()=>setView(!view)}><li>contacts</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/blog" onClick={()=>setView(!view)}><li>blog</li></NavLink>
                </ul>
            </nav>
            </>
    )}

export default Menu;