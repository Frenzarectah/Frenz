import React, { useState, useEffect } from "react"
import spinner from '../Spinner/faceSpin.gif'
import './spinner.css'
const Spinner = () =>{

    return(
        <div className="fullpage">
            <img alt="spinner" className="spinner" src={ spinner } />
        </div>
    )
}
export default Spinner