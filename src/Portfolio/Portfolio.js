import Modal01 from '../components/Modal-01/Modal-01';
import Modal02 from '../components/Modal-02/Modal-02';
import Modal03 from '../components/Modal-03/Modal-03';
import Modal04 from '../components/Modal-04/Modal-04';

import English from '../assets/JorgReskeCVeng.pdf';
import Portugues from '../assets/JorgReskeCVpt-br.pdf';
import PorfolioPdf from '../assets/Jorg-Reske-Portfolio-Projects.pdf';

import React, { useState } from 'react';
import './style-port.css';

import Jorg from '../assets/jbr.png'

function Portfolio() {
  const [show, setShow] = useState(false)
  const [view, setView] = useState(false)
  const [see, setSee] = useState(false)
  const [look, setLook] = useState(false)

    return (
      <div id="portfolio">
        <div className="Portfolio">
            <div className="backgroundPortfolio">
              <h1 className="portfolioHeader">My Portfolio</h1>
              <div className="centerPortfolio">
                <div ClassName="leftSideP">
                    <img className="portfolioJorg" src={Jorg} alt="jorg" />
                    <h2 className="portfolioText">Hi, my Name is Jörg Bernhard, I'm a UX / UI Designer, 
                    I love design and what you can create with it. <br></br>Let's create something.
                    </h2>
                    <div className="Buttons">
                    <button className="button01" onClick={() => setShow(true) }>My Portfolio</button>
                    <Modal01 onClose={() => setShow(false)} show={show} />
                  
                    <button className="button02" onClick={() => setView(true) }>My Resume</button>
                    <Modal02 onClose={() => setView(false)} show={view} />

                    <button className="button03" onClick={() => setSee(true) }>My Extra Curriculaes</button>
                    <Modal03 onClose={() => setSee(false)} show={see} />

                    <button className="button04" onClick={() => setLook(true) }>My Tolls</button>
                    <Modal04 onClose={() => setLook(false)} show={look} />

                    <button className="button05"><a className="English" href={English} download="English">Download Resume English</a></button>
                    
                    <button className="button06"><a className="Portugues" href={Portugues} download="portugues">Download Resume Portugues</a></button>

                    <button className="button07"><a className="Porfolio" href={PorfolioPdf} download="portugues">Download Portfolio</a></button>
                </div>
                </div>
                <div className="rechte">
                <div ClassName="rightSideP">
                    <h3 className="text-header">That's Me</h3>
                    <span> Some Stuff about me then...
                <br></br><br></br>
                I'm working over 8 years with design and the role of creating web,
                mobile and product shapes for many companies. I am focused on working with a team and 
                achieved excelent results.
                <br></br><br></br>
                At the moment I am working freelancer with a small team creating interfaces to connect 
                diferent programms with each other. It comes handy that I have a Diplom in Front-end 
                and Back-end Development as well. I am happy to join your team.
                <br></br><br></br>
                I startet in 1996 teaching Photoshop, Flash, Dream Weaver etc. Created over 100 
                aplications like web-pages, Logos and Art-creations for companies world wide. 
                Being a UX/UI makes me happy. Creating, designing and showing how you can change the 
                world brings me to life.
                <br></br><br></br>
                On your left side you have some extras, like Resume (read/downlod) and some other 
                information. <br></br><br></br>
                Thanks.
                </span>
                </div> 
                </div>
             </div>
           </div>
        </div>
      </div>
  );
}

export default Portfolio;
