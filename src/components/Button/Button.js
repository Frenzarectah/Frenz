import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props)=>{
    const {width,height,color,border,borderColor,bkgColor,font,address,handleClick} = props;
    let style = {
        "width":width,
        "height":height,
        "fontSize":"35px",
        "color":color,
        "border":border,
        "borderColor":borderColor,
        "backgroundColor":bkgColor,
        "fontFamily":font
    }
    return(
        <Link to={address}>
            <button style={style}>
                {props.caption}
            </button>
        </Link>
    )
}

Button.defaultProps={
    "width":"170px",
    "height":"80px",
    "font":"Sans-serif",
    "border":"none"
}
export default Button;