import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const ButtonSet = () =>{
    const iconHome = <FontAwesomeIcon icon={faHome} color="black"/>
    return(
    <div style={{width:"100%",
                 height:"100vh"}}>
                    <Button color="black" bkgColor="transparent" font="Erica" caption={iconHome}/>
                    <Button color="black" bkgColor="transparent" font="Sans-serif" caption="secondo"/>
                 </div>    
    )
}
export default ButtonSet;