import React from "react";
import { useState } from "react";
import '../../../../App.scss';
import './Homepage.css';

const Homepage = ()=>{
    const [cln,setCln] = useState("homepage");
    return(
        <div className={cln}>
                lascia che io sia!
        </div>
    )
}
export default Homepage;