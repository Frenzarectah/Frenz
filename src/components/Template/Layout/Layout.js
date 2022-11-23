import {React } from "react"
import '../../../App.scss'
import './Layout.scss'
import {Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage'
import Contact from "../Pages/Contact/Contact"
import Projects from "../Pages/Projects/Projects"
import Blog from "../Pages/Blog/Blog"
import About from "../Pages/About/About"
import Menu from "../../Menu/Menu"

/**
 * the main "renderer" of the website, here it'll be rendered the menu component,
 * also here you can find placed the routerDom API, which is responsible of the
 * rendering of the various page/components according to the Url 
 * (you can find the several routers into Menu component)
 *
 */
const Layout = ()=>{
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
export default Layout