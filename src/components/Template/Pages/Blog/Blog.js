import React from "react";
import './Blog.css';
import img_contact from '../Contact/contact_baloon.png'; 

const Blog = () =>{
    return(
        <div className="contact">
            <div className="contact_image_container">
                <img width="300px" src={img_contact}/>
            </div>
        </div>
    )
}
export default Blog;