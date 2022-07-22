import React from 'react';
import './style03.css';
import Certif01 from '../../assets/Certificado01.png'
import Certif02 from '../../assets/Certificado02.png'
import Certif03 from '../../assets/Certificado03.png'

const Modal03 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal03">
             <div className="modal-top03">
                    <button className="modalButton01" onClick={props.onClose} >Close</button>
                </div>
            <img src={Certif03} alt="certif03"></img>
            <img src={Certif01} alt="certif01"></img>
            <img src={Certif02} alt="certif02"></img>
            
               
            </div>
 
    )
}
export default Modal03;