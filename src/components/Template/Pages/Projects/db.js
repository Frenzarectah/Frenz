import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bkg1 from './Projects_Card/proj_card1.png';
import bkg2 from './Projects_Card/proj_card2.png';

const star = <FontAwesomeIcon icon={faStar} color="black" size="s"/>
const projectz = [
    {
        id:0,
        name:"★Investment Simulator (desktop Only)★",
        thumbnail:bkg1,
        stack:"React.js★HTML★CSS★tailwindCSS",
        link:"https://investment-planz.netlify.app"
    },
    {
        id:1,
        name:"★Doctor's Agenda (Mobile Only)★",
        thumbnail:bkg2,
        stack:"HTML★CSS★Javascript",
        link:"https://mobileapp-frenz.netlify.app/"
    }
]
export default projectz ;