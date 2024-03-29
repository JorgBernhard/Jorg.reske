import React from 'react';
import '../style-modal.css';

import Portfolio from '../../assets/portfolio.png';


const Modal01 = props => {
    if (!props.show){
        return null
    }
    return (
        
        <div className="modal-center">
                <div className="modal">
                    <button className="ClickButton" onClick={props.onClose} >Close</button>
                </div>
                <img src={Portfolio} alt="portfolioPdf"></img>
                
                </div>
          
    )
}
export default Modal01;