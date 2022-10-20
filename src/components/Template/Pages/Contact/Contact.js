import React, { useRef,useState } from "react";
import './Contact.scss';
import '../../../../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import Modal from "../../Modals/Modal";
import img_contact from '../Contact/contact_baloon.webp'; 


const instaIcon = <FontAwesomeIcon icon={faInstagram} color="black" size="3x"/>
const gitIcon = <FontAwesomeIcon icon={faGithub} color="black" size="3x"/>
const linkedIcon = <FontAwesomeIcon icon={faLinkedin} color="black" size="3x"/>

const Contact = () =>{
    
    const [visible,setVisible] =useState(false);
    const referenceForm = useRef();
    
    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('personal', 'template_3ony9qg',referenceForm.current,'B-cYCihSV7vEgvD09')
          .then((result) => {
              console.log(result.text);
              setVisible(!visible);
          }, (error) => {
              console.log(error.text);
          });
    };

    return(
        <div className="contact">
        <Modal visible={visible}/>
            <div className="contact_image_container animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                <img alt="contact baloon logo" src={img_contact}/>
            </div>
            <form className="contact_form" ref={referenceForm} onSubmit={sendEmail}>
                <div className="contact_title">Let's Get in Touch!</div>
                <input name="name" type="text" placeholder="Who r U?" required/>
                <input name="phone" type="number" placeholder="leave a phone number..."/>
                <input name="mail" type="email" placeholder="...or an email..." required/>
                <textarea name="message" type="text" placeholder="...and write something to Frenz" required/> 
                <button type="submit">Send!</button>
            </form>
        <div className="social">
            <a href="https://instagram.com"><div className="insta animate__animated animate__bounceInDown  animate__delay-1s">{instaIcon}</div></a>
            <a href="https://github.com/Frenzarectah"><div className="git animate__animated animate__bounceInDown  animate__delay-3s">{gitIcon}</div></a>
            <a href="https://www.linkedin.com/in/francesco-sorrentino-946981105/"><div className="linkedin animate__animated animate__bounceInDown  animate__delay-2s">{linkedIcon}</div></a>
        </div>
    </div>
    )
}
export default Contact;