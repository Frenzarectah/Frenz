import {React } from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import '../../../App.scss';
import './Layout.scss';
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
                <Button cln="topLeft" color="black" bkgColor="transparent" border="3px solid black" caption={iconHome} address="/"/>
                <Button cln="topRight" color="black" bkgColor="transparent" border="3px solid black" font="Erica One" caption="About" address="/whoami"/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/whoami" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
                <Button cln="bottomLeft" color="black" bkgColor="transparent" border="3px solid black" font="Permanent Marker" caption="projects" address="/projects"/>
                {/*<Button color="black" bkgColor="74a4bc" font="Sans-Serif" caption="blog" address="/blog"/>*/}
                <Button cln="bottomRight" color="black" bkgColor="transparent" border="3px solid black" font="Rubik Dirt" caption="Contact" address="/contact"/>
        </div>
        </>
    )
}
export default Layout;