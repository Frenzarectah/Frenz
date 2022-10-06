import {React,useState} from "react"
import '../../../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faHome } from "@fortawesome/free-solid-svg-icons";
import {Route, Routes } from 'react-router-dom';
import Button from "../../Button/Button";
import Homepage from '../Pages/Homepage/Homepage';
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import MobileMenu from "../../MobileMenu/MobileMenu";

const Layout = ()=>{
    const [tick,setTick] = useState(0);
    const [visible,setVisible] = useState(false);

    setTimeout(()=>setTick(10),3000);
    setTimeout(()=>setTick(-10),1000);

    
    const iconHome = <FontAwesomeIcon icon={faHome} color="black"/>
    const hambMenu = (col)=> 
       <FontAwesomeIcon icon={faHamburger} color={col} size="3x" transform={{ rotate: tick }}/>
    
    return(
        <>
        <MobileMenu visible={visible}/>
        <div className="main_container">
            <div className="menu__mobile animate__animated animate__swing" onClick={()=>setVisible(!visible)}>
                {hambMenu(visible?"white":"black")}
            </div>
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
                <Button color="black" bkgColor="74a4bc" font="Sans-Serif" caption="blog" address="/blog"/>
                <Button color="black" bkgColor="transparent" border="3px solid black" font="Rubik Dirt" caption="Contact" address="/contact"/>
            </div>
        </div>
        </>
    )
}
export default Layout;