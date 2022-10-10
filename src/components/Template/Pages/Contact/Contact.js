import React from "react";
import Button from '../../../Button/Button';
import '../../../../App.scss';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () =>{
    const instaIcon = <FontAwesomeIcon icon={faInstagram} color="black" size="3x"/>
    const gitIcon = <FontAwesomeIcon icon={faGithub} color="black" size="3x"/>
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} color="black" size="3x"/>
    return(
        <>
        <div className="contact_title">Let's get in Touch!</div>
        <div className="contact">
            <section id="image_container" className="animate__animated animate__heartBeat animate__infinite	infinite animate__slower"/>
            <section id="contact_sect">
                <form className="contact__form" name="contact_form_name">
                    <div className="contact_wrapper">
                        <input name="name" className="contact__form__input" type="text" placeholder="Who r u?" required/>
                        <input name="phone" className="contact__form__input" type="tel" placeholder="A number to call you back..."/>
                    </div>
                <div className="contact_wrapper">
                    <input name="email" className="contact__form__input _email" type="email" placeholder="...or an email to write you back." required/>
                </div>
                <div className="contact_wrapper">
                    <textarea name="message" className="contact__form__input _textarea" placeholder="Say something to Frenz" required/>
                </div>
                <Button width="100px" height="50px" font="Oswald" fontSize="20px" border="4px black solid" bkgColor="red" caption="send!"/>
            </form>
            </section>
            <section id="social_sect">
                 <div className="insta animate__animated animate__heartBeat  animate__delay-1s">{instaIcon}</div>
                 <div className="git animate__animated animate__heartBeat  animate__delay-2s">{gitIcon}</div>
                 <div className="linkedin animate__animated animate__heartBeat  animate__delay-3s">{linkedIcon}</div>
            </section>
            </div>
          </>  
    )
}
export default Contact;