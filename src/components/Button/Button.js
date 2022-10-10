import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props)=>{
    const {width,height,color,border,borderColor,bkgColor,font,fontSize,address,handleClick} = props;
    let style = {
        "width":width,
        "height":height,
        "fontSize":fontSize,
        "color":color,
        "border":border,
        "borderColor":borderColor,
        "backgroundColor":bkgColor,
        "fontFamily":font
    }
    return(
        <Link to={address}>
            <button className="btn" style={style}>
                {props.caption}
            </button>
        </Link>
    )
}

Button.defaultProps={
    "width":"170px",
    "height":"80px",
    "font":"Sans-serif",
    "fontSize":"35px",
    "border":"none"
}
export default Button;