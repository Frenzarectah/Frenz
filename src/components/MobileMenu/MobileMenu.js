import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger} from "@fortawesome/free-solid-svg-icons";
import './MobileMenu.css';

const MobileMenu = ()=>{
    const [view,setView] = useState(false);
    const hambMenu = (visibility)=> <FontAwesomeIcon icon={faHamburger} color={visibility?"white":"black"} size="3x"/>

    let cln = "menu__container ";
      if(view)cln+="entering";
        return(
            <>
            <div className="menu__mobile animate__animated animate__shakeX animate__delay-2s" onClick={()=>setView(!view)}>
                {hambMenu(view)}
            </div>
            <nav className={cln}>
                <ul>    
                    <li><NavLink exact="true" className="link" to="/">home</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/whoami" onClick={()=>setView(!view)}>about</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/projects" onClick={()=>setView(!view)}>projects</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/contact" onClick={()=>setView(!view)}>contacts</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/blog" onClick={()=>setView(!view)}>blog</NavLink></li>
                </ul>
            </nav>
            </>
    )}

export default MobileMenu;