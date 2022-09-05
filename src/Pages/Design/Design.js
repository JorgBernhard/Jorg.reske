import Modal05 from '../../components/Modal-05/Modal-05';
import Modal06 from '../../components/Modal-06/Modal-06';
import Modal07 from '../../components/Modal-07/Modal-07';
import Modal08 from '../../components/Modal-08/Modal-08';


import Project1 from '../../assets/w4y.png';
import Project2 from '../../assets/work08.png';
import Project3 from '../../assets/work01.png';
import Project4 from '../../assets/Acera01.png';


import Logo from '../../assets/logo-circle.png';
import Center from '../../assets/center.png';

import './style-design.css';
import React, { useState } from 'react';

function Design() {
  const [gucke, setGucke] = useState(false)
  const [iview, setIView] = useState(false)
  const [isee, setISee] = useState(false)
  const [ilook, setILook] = useState(false)


  return (
    <div id="design">
    <div className="Container-design">
      <h3 className="Design">Design</h3>
      <img src={Logo} className="App-logo-design" alt="logo" />
      <img src={Center} className="Center-design" alt="center" />
      <h4 className="text-design">Here some of my design-work, web-design, and Front-end creations</h4>

      <div className="Cards1row">
          <div className="Card-01">
              <img className="Project-1" src={Project1} alt="project-1"></img>
              <button className="knopf01" onClick={() => setGucke(true) }>Company Page W4Y</button>
              <Modal05 onClose={() => setGucke(false)} show={gucke} />
          </div>        
          <div className="Card-02">
              <img className="Project-2" src={Project2} alt="project-2"></img>
              <button className="knopf02" onClick={() => setIView(true) }>Muay Thai</button>
              <Modal06 onClose={() => setIView(false)} show={iview} />
          </div>
          <div className="Card-03">
              <img className="Project-3" src={Project3} alt="project-3"></img>
              <button className="knopf03" onClick={() => setISee(true) }>German Company</button>
              <Modal07 onClose={() => setISee(false)} show={isee} />
          </div>
          </div>
          <div className="Cards2row">
          <div className="Card-04">
              <img className="Project-4" src={Project4} alt="project-4"></img>
              <button className="knopf04" onClick={() => setILook(true) }>Acera</button>
              <Modal08 onClose={() => setILook(false)} show={ilook} />
          </div>
         
          </div>
      </div> 
               
    </div>
  );
}

export default Design;
