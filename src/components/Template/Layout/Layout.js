import {React } from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import '../../../App.scss';
import './Layout.scss';
import {Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Menu from "../../Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * the main "renderer" of the website, here it'll be rendered the menu component,
 * also here you can find placed the routerDom API, which is responsible of the
 * rendering of the various page/components according to the Url
 *
 * 
 */
const Layout = ()=>{
    const iconHome = <FontAwesomeIcon icon={faHome} color="black"/>
    return(
        <>
        <Menu/>
        <div className="main_container">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/whoami" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
        </>
    )
}
export default Layout;