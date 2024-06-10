import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Picture from '../assets/JorgB.png'
import Computer from '../assets/Internet.png'
import Telefone from '../assets/telefone.png'


function Contact() {
  return (
    <div id='contact'>
    <div className="Contact">
      <header className="ContactHeader">
      <div className="ContactLeft">
        <img className='JorgB' src={Picture} alt='JorgB'></img> 
        <nav className="ContactNaveBar">
           
            <Link className='ContactHome' to="/">HOME</Link>
           
            <Link className='ContactAbout' to="/About">ABOUT ME</Link>
           
            <Link className='ContactResume' to="/resume">RESUME</Link>
         
            <Link className='ContactPortfolio' to="/portfolio">PORTFOLIO</Link>
          
            <Link className='ContactContact' to="/contact">CONTACT</Link>
          
          </nav>
       </div>
       <div className="ContactRight">
       <h2 className="ContactTitle">Contact</h2>
       <div className="ContactLine">
          <h4 className="ContactInfo1">Feel</h4>
          <h4 className="ContactInfo2">free</h4>
          <h4 className="ContactInfo3">to contact me!</h4>
       </div>
       <h2 className='Happy'>I'm happy to answer any questions you may have. My services are 
        available for freelance or contract work. Currently, I am based in Brazil. You can 
        contact me via telephone, WhatsApp, or email.</h2>
       <div className="Icons">
        <div className='ComputerIcon'>
            <img className="Computer" src={Computer} alt="computer"></img>
            <h4 className="ComputerText">jorg.reske@gmail.com<br></br>
            https://www.linkedin.com/in/jorg-reske-b327699b/<br></br>
            https://github.com/JorgBernhard</h4>
        </div>
        <div className='TelefoneIcon'>
        <img className="Telefone" src={Telefone} alt="telefone"></img>
        <h4 className="TelefoneText">+55 (84) 99968-5830<br></br>whatsapp</h4>
          </div>
       </div>
       <h4 className="ContactThanks">THANK YOU FOR YOUR PATIENCE!</h4>
       </div>
      </header>
    </div>
    </div>
  );
}

export default Contact;