import { useEffect } from "react";
import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import './MobileMenu.css';

const MobileMenu = (props)=>{
    const {visible} = props;
    const [view,setView] = useState(false);
    useEffect(()=>setView(visible),[visible]);
    let cln = "menu__container ";
      if(view)cln+="entering";
        return(
            <nav className={cln}>
                <ul>    
                    <li><NavLink exact="true" className="link" to="/">home</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/whoami" onClick={()=>setView(!view)}>about</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/projects">projects</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/contact">contacts</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/blog">blog</NavLink></li>
                </ul>
            </nav>
    )}

export default MobileMenu;