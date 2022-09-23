import React from "react";
import '../../App.scss';

const Button = (props)=>{
    let style = {
        "width":"120px",
        "height":"80px",
        "color":props.color,
        "backgroundColor":props.bkgColor,
        "font-family":props.font
    }
    return(
        <button style={style}>
            {props.caption}
        </button>
    )
}
export default Button;