import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props)=>{
    const {width,height,color,border,borderColor,bkgColor,font,address,handleClick} = props;
    const [opacity,setOpacity] = useState("0");
    let style = {
        "width":width,
        "height":height,
        "fontSize":"35px",
        "color":color,
        "opacity":opacity,
        "border":border,
        "borderColor":borderColor,
        "backgroundColor":bkgColor,
        "fontFamily":font
    }
    setTimeout(()=>setOpacity("1"),2000);
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
    "border":"none"
}
export default Button;