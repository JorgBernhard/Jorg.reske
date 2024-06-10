import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

import Picture from '../assets/JorgB.png'
import English from '../assets/CV Jorg English.pdf'
import Portugues from '../assets/CV Jorg Portugues.pdf'

function Resume() {
  return (
    <div id='Resume'>
    <div className="Resume">
      <header className="ResumeHeader">
      <div className="ResumeLeft">
        <img className='JorgB' src={Picture} alt='JorgB'></img> 
        <nav className="ResumeNaveBar">
           
            <Link className='ResumeHome' to="/">HOME</Link>
            <Link className='ResumeAbout' to="/about">ABOUT ME</Link>
            <Link className='ResumeResume' to="/resume">RESUME</Link>
            <Link className='ResumePortfolio' to="/portfolio">PORTFOLIO</Link>
            <Link className='ResumeContact' to="/contact">CONTACT</Link>
          
          </nav>
       </div>
        
       <div className="ResumeRight">
       <h2 className="ResumeTitle">RESUME</h2>
       <div className="Resumes">
       <a className="English-Resume" href={English} download="English">Full Resume English</a>
       <a className="Portugues-Resume" href={Portugues} download="portugues">Resume completo Portugues</a>
       </div>
       <div className="ResumeJobs">
       <h4 className="ResumeWork">EXPERIENCE</h4>
       <h2 className='ReumeHeader'>"Until 2024, I pursued my studies while also taking on various freelance projects."</h2>
       <div className="ResumeBoxes1">
        <div ClassName="Box01">
          <h3 className="Date01">2009 - 2020</h3>
          <h3 className="Nome01">Acera</h3>
          <p className="Texto01">General Manager<br></br>Acera General Consulting, Marketing Development for company 
            sale. Integrated Agile Methodologies to enhance the flow of information and data
            within the companies.</p>
        </div>
        <div ClassName="Box02">
          <h3 className="Date02">2007 - 2009</h3>
          <h3 className="Nome02">Pacific Hydro</h3>
          <p className="Texto02">IT Manager<br></br>Provided IT services such as networking 
          and construction of a long-range network for wind farms.</p>
        </div>
        <div ClassName="Box03">
          <h3 className="Date03">2002 - 2007</h3>
          <h3 className="Nome03">Siah</h3>
          <p className="Texto03">General Manager<br></br>IT and Marketing Manager, developed 
          the marketing area, and created a sales structure. Project development for 
          Desbravador.</p>
        </div>
       </div>
       <div className="ResumeBoxes2">
        <div ClassName="Box04">
          <h3 className="Date04">2001 - 2002</h3>
          <h3 className="Nome04">Hotel Rosa Náutica</h3>
          <p className="Texto04">IT Manager<br></br>Oversaw hotel management, customer service, 
          and marketing.</p>
        </div>
        <div ClassName="Box05">
          <h3 className="Date05">1998 – 2001</h3>
          <h3 className="Nome05">TTI</h3>
          <p className="Texto05">Lead marketing projects and implemented ISO 9002.
          Coordinated design project activities.</p>
        </div>
        <div ClassName="Box06">
          <h3 className="Date06">1993 - 1998</h3>
          <h3 className="Nome06">Freelance</h3>
          <p className="Texto06">Design Manager<br></br>Coordinated project activities.
          </p>
        </div>
       </div>
       </div>
       </div>
      </header>
    </div>
    </div>
  );
}

export default Resume;