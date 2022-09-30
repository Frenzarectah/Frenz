import React from "react";
import { useState } from "react";
import '../../../../App.scss';
import './Homepage.css';

const Homepage = ()=>{
    const [cln,setCln] = useState(" title ");
    
    setTimeout(()=>setCln(" appear "+cln),1000);
    
    return(
        <div className="homepage">
            <span style={{fontSize:"25px"}}>Introducing myself..</span>
            <div className={cln}>
                FRENZ SORRENTINO
            </div>
        </div>
    )
}
export default Homepage;