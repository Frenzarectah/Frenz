import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import './MobileMenu.css';

const MobileMenu = (props)=>{
    const {visible} = props;
    let classes="menu__container ";
      if(visible){
        return(
            <nav className={classes}>
                <ul>    
                    <li><NavLink exact="true" className="actual"  to="/">home</NavLink></li>
                    <li><NavLink exact="true" className="actual" to="/whoami">about</NavLink></li>
                    <li><NavLink exact="true" className="actual" to="/projects">projects</NavLink></li>
                    <li><NavLink exact="true" className="actual" to="/contact">contacts</NavLink></li>
                    <li><NavLink exact="true" className="actual" to="/blog">blog</NavLink></li>
                </ul>
            </nav>
      
    )}
}
export default MobileMenu;