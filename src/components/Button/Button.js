import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props)=>{
    const {width,height,type,cln,color,border,borderColor,bkgColor,font,fontSize,address,handleClick} = props;
    let style = {
        "width":width,
        "height":height,
        "fontSize":fontSize,
        "color":color,
        "border":border,
        "borderColor":borderColor,
        "backgroundColor":bkgColor,
        "fontFamily":font,
    }
    return(
        <Link to={address}>
            <button type={type} className={"btn_"+cln} style={style} onClick={handleClick}>
                {props.caption}
            </button>
        </Link>
    )
}

Button.defaultProps={
    "width":"50px",
    "height":"20px",
    "type":"Submit",
    "font":"Sans-serif",
    "fontSize":"20px",
    "border":"none"
}
export default Button;