import bkg1 from './Projects_Card/proj_card1.webp'
import bkg2 from './Projects_Card/proj_card2.webp'
import bkg3 from './Projects_Card/proj_card3.webp'
import bkg4 from './Projects_Card/proj_card4.webp'

/**
 * this file is a kind of mockup API used to simulate a database o
 */

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
    },
    {
        id:2,
        name:"★This site :D★",
        thumbnail:bkg3,
        stack:"HTML★SCSS★React.js★",
        link:"https://frenz-dev.netlify.app"
    },
    {   id:3,
        name:"★skyWeather WebApp★",
        thumbnail:bkg4,
        stack:"HTML★tailwindCSS★API Req★",
        link:"https://skyweather-frenz.netlify.app"           
    }
]
export default projectz 