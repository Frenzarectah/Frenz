import React from "react"
import '../../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {Route, Routes } from 'react-router-dom';
import Button from "../Button/Button";
import Homepage from "./Homepage";

const Layout = ()=>{
    const iconHome = <FontAwesomeIcon icon={faHome} color="white"/>
    return(
        <div className="main_container">
            <div id="button__line__top">
                <Button color="white" bkgColor="transparent"  caption={iconHome} address="/homepage"/>
                <Button color="white" bkgColor="transparent" font="Erica" caption="second"/>
            </div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
            </Routes>
            <div id="button__line__bottom">
                <Button color="white" bkgColor="transparent" font="Erica" caption="third"/>
                <Button color="white" bkgColor="transparent" font="Erica" caption="forth"/>
            </div>
        </div>
    )
}
export default Layout;