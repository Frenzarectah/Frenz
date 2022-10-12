import {React } from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import '../../../App.scss';
import './Layout.css';
import {Route, Routes } from 'react-router-dom';
import Button from "../../Button/Button";
import Homepage from '../Pages/Homepage/Homepage';
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = ()=>{
    const iconHome = <FontAwesomeIcon icon={faHome} color="black"/>
    return(
        <>
        <MobileMenu/>
        <div className="main_container">
            <div id="button__line__top">
                <Button color="black" bkgColor="blue" caption={iconHome} address="/"/>
                <Button color="black" bkgColor="red" font="Erica One" caption="About" address="/whoami"/>
            </div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/whoami" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <div id="button__line__bottom">
                <Button color="black" bkgColor="transparent" border="3px solid black" font="Permanent Marker" caption="projects" address="/projects"/>
                {/*<Button color="black" bkgColor="74a4bc" font="Sans-Serif" caption="blog" address="/blog"/>*/}
                <Button color="black" bkgColor="transparent" border="3px solid black" font="Rubik Dirt" caption="Contact" address="/contact"/>
            </div>
        </div>
        </>
    )
}
export default Layout;