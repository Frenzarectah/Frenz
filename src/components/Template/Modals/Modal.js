import React from "react"
import { useEffect ,useState} from "react"
import './Modal.css'

/**
 * This compt returns a confirm of the form sent by Email.js 
 * (referring to Contact compt).
 * The "visible" props is passed as true from Contact when the email returns the
 * "successfull sent" status
 * 
 */
const Modal = (prop)=>{
    const {visible} = prop
    const [view,setView] = useState(false)
    useEffect(()=>setView(visible),[visible])
    return(
        <>
            {view &&
            <div className="mail_modal">
                CONTACT SENT!
                <button className="modal_close" onClick={()=>setView(!view)}>close</button>
            </div>
            }
        </>
    )
}
export default Modal