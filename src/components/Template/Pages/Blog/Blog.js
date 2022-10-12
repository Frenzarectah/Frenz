import React, { useRef,useState } from "react";
import './Blog.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import Modal from "../../Modals/Modal";
import img_contact from '../Contact/contact_baloon.png'; 


const instaIcon = <FontAwesomeIcon icon={faInstagram} color="black" size="3x"/>
const gitIcon = <FontAwesomeIcon icon={faGithub} color="black" size="3x"/>
const linkedIcon = <FontAwesomeIcon icon={faLinkedin} color="black" size="3x"/>

const Blog = () =>{
    
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
        <>
        <Modal visible={visible}/>
        <div className="contact">
            <div className="contact_image_container animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                <img src={img_contact}/>
            </div>
        <form className="contact_form" ref={referenceForm} onSubmit={sendEmail}>
            <div>Let's Get in Touch!</div>
            <input name="name" type="text" placeholder="Who r U?" required/>
            <input name="phone" type="number" placeholder="leave a phone number..."/>
            <input name="mail" type="email" placeholder="...or an email..." required/>
            <textarea name="message" type="text" placeholder="...and write something to Frenz" required/> 
            <button type="submit">Send!</button>
        </form>
        <div className="social">
            <div className="insta animate__animated animate__bounceInDown  animate__delay-1s">{instaIcon}</div>
            <div className="git animate__animated animate__bounceInDown  animate__delay-3s">{gitIcon}</div>
            <div className="linkedin animate__animated animate__bounceInDown  animate__delay-2s">{linkedIcon}</div>
        </div>
    </div>
    </>
    )
}
export default Blog;