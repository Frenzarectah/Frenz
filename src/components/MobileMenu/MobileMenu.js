import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import './MobileMenu.css';

const MobileMenu = (props)=>{
    const {visible} = props;
    let cln = "menu__container ";
      if(visible)cln+="entering";
        return(
            <nav className={cln}>
                <ul>    
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/">home</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/whoami">about</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/projects">projects</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/contact">contacts</NavLink></li>
                    <li><NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/blog">blog</NavLink></li>
                </ul>
            </nav>
      
    )}

export default MobileMenu;