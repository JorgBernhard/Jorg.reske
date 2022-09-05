import React from 'react';
import '../style-modal.css';

import Soft from '../../assets/modal7.png'

const Modal05 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal-center">
             <div className="modal">
                    <button className="ClickButton" onClick={props.onClose} >Close</button>
                </div>
                        <img src={Soft} alt="softskills"></img>
             
            </div>
 
    )
}
export default Modal05;