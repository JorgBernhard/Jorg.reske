import React from 'react';
import './style02.css';
import ResumeEng from '../../assets/JorgReskeCVeng.png'


const Modal02 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal02">
             <div className="modal-top02">
                    <button className="modalButton01" onClick={props.onClose} >Close</button>
                </div>
            <img src={ResumeEng} alt="resume"></img>
          
            
               
            </div>
 
    )
}
export default Modal02;