import React from 'react';
import './style01.css';
import PortfolioText from '../../assets/Jorg-Reske-Portfolio.png'
import Work01 from '../../assets/Jorg-Reske-Project01.png'
import Work02 from '../../assets/Jorg-Reske-Project02.png'
import Work03 from '../../assets/Jorg-Reske-Project03.png'

const Modal01 = props => {
    if (!props.show){
        return null
    }
    return (
        
        <div className="modal01">
             <div className="modal-top01">
                    <button className="modalButton01" onClick={props.onClose} >Close</button>
                </div>
            <img src={PortfolioText} alt="portfolioPdf"></img>
            <img src={Work01} alt="work01"></img>
            <img src={Work02} alt="work02"></img>
            <img src={Work03} alt="work03"></img>
            
               
            </div>
          
    )
}
export default Modal01;