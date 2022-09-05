import React from 'react';
import '../style-modal.css';
import ResumeEng from '../../assets/JorgReskeCVeng.png'


const Modal02 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal-center">
             <div className="modal">
                    <button className="ClickButton" onClick={props.onClose} >Close</button>
                </div>
            <img src={ResumeEng} alt="resume"></img>
          
            
               
            </div>
 
    )
}
export default Modal02;