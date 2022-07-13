import React from 'react';
import './style04.css';

import Soft from '../../assets/softskills02.png'

const Modal04 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal04">
             <div className="modal-top04">
                    <button className="modalButton01" onClick={props.onClose} >Close</button>
                </div>
                        <img src={Soft} alt="softskills"></img>
                        <h4>UX / UI Designer, You can't get without Photoshop, Corel-Draw, Adobe-XD, Adobe-Illustrator, 
                        Dream-Weaver and Figma and Ink-scape.
                        <br></br> <br></br>
                        Front-End Coding with Java-Script is probably the best way, you can use many Lybaries like 
                        React, React-Dom, Mui, Swiper and so on.......
                        <br></br> <br></br>
                        Back-End Programming, I use Java-Script, Postgres-Data-bank or SQL. 
                        A lot of interfacing applications are made with jaca-script, it's the best way to connect 
                        them all. <br></br> <br></br>
                        </h4>
                        
            
               
            </div>
 
    )
}
export default Modal04;