import {React , useState} from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger } from "@fortawesome/free-solid-svg-icons"
import './Menu.css'

/**
 * this component renders the menu of the website, it is styled differently with mediaqueries to be
 * as much responsive as I can.
 * Its internal state refers to the opened/closed menu on mobile, and isn't working on 
 * desktop mode.
 * Uses react-router-dom api to load the different pages/components.
 * line 20 is for the color-changing of the burger icon, in order to be always visible, according 
 *   to the state open/closed of the menu
 */

const Menu = ()=>{
    const [view,setView] = useState(false)
    
    const hambMenu = (visibility)=>{
        if (window.matchMedia("only screen and (max-width: 600px)").matches === true){
            return(<FontAwesomeIcon icon={faHamburger} color={visibility?"white":"black"} size="3x"/>
            )}else{
            return(<FontAwesomeIcon icon={faHamburger} color="black" size="3x"/>
            )}
    }
    return(
        <>
            <div className="menu animate__animated animate__shakeX animate__delay-2s" 
                onClick={()=>setView(!view)}>
                {hambMenu(view)}
            </div>
            <nav className={(view?"entering":undefined)}>
                <ul>    
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/" onClick={()=>setView(!view)}>
                        <li>home</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/whoami" onClick={()=>setView(!view)}>
                        <li>about</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/projects" onClick={()=>setView(!view)}>
                        <li>projects</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/contact" onClick={()=>setView(!view)}>
                        <li>contacts</li></NavLink>
                    <NavLink exact="true" className={({ isActive }) => (isActive ? "actual" : "link")} to="/blog" onClick={()=>setView(!view)}>
                        <li>blog</li></NavLink>
                </ul>
            </nav>
        </>
    )}

export default Menu