import React from "react";
import './Contact.css';



const Contact = () =>{
    return(
        <div className="contact">
            <div className="contact_title">Let's get in Touch!</div>
            <form className="contact__form" name="contact_form_name">
                <div className="container">
                    <input name="name" className="contact__form__input" type="text" placeholder="Who r u?" required/>
                    <input name="phone" className="contact__form__input" type="tel" placeholder="A number to call you back..."/>
                </div>
            <div>
                <input name="email" className="contact__form__input _email" type="email" placeholder="...or an email to write you back." required/>
            </div>
            <textarea name="message" rows="5" cols="10" className="contact__form__input _textarea" placeholder="Say something to Frenz" required/>
        </form>
        </div>
    )
}
export default Contact;