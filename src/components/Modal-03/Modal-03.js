import React from 'react';
import '../style-modal.css';
import Certify from '../../assets/extra.png';


const Modal03 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal-center">
                <div className="modal">
                    <button className="ClickButton" onClick={props.onClose} >Close</button>
                </div>
            <img src={Certify} alt="certif03"></img>
                   
            </div>
 
    )
}
export default Modal03;