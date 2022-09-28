import React from "react";
import '../../App.scss';
import { Link } from "react-router-dom";

const Button = (props)=>{
    const {width,height,color,bkgColor,font,address} = props;
    let style = {
        "width":width,
        "height":height,
        "color":color,
        "borderColor":color,
        "backgroundColor":bkgColor,
        "fontFamily":font,
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
    "width":"120px",
    "height":"50px",
    "font":"Sans-serif"
}
export default Button;