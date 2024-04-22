import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../assets/Logo-gray.png';
import Linked from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Email from '../assets/email.png';
import Whats from '../assets/whats.png';

import English from '../assets/CV Jorg English.pdf';

import './Me.css';

class Me extends Component {
  render() {
    return (
      <div className="MePage">
      <div className="MeHead">
        <div className="MeSLeft">
        <img className="MeLogo" src={Logo} alt="logo"></img>
        <div className="MeLinks">
              <Link className="MyHome" to="/">Home</Link>
              <Link className="Projects" to="/projects">Projects</Link>
              <Link className="Me" to="/me">Me</Link>
            <a className="English-Resume" href={English} download="English">Resume</a>
        </div>
        <div className="Imagens">
            <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="Linked"></img></a>
            <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git"><img className="Github" src={Github} alt="Github"></img></a> 
            <a className="Mail" href='mailto:jorg.reske@gmail.com'><img className="Email" src={Email} alt="Email"></img></a>
            <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats"></img></a> 
        </div>
        </div>
        <div className="MeRight">
          <h3 className="Behind">Behind all the art and design, to the end .. is Me.</h3>
          <h3 className="Me-Definition">Project Manager | UX/UI Designer | App Developer</h3>
          <p className="MeText">I'm Jörg Bernhard, a versatile professional with a passion for 
          crafting exceptional digital experiences. With a blend of project management 
          expertise, UX/UI design skills, and app development capabilities, 
          I'm dedicated to bringing your vision to life.<br></br><br></br>
          Services Offered:<br></br><br></br>
          Project Management:<br></br> Experienced in overseeing complex projects, ensuring 
          timely delivery and exceeding client expectations.<br></br><br></br>
          UX/UI Design:<br></br> Proficient in creating captivating user interfaces that 
          enhance user experience and drive engagement.<br></br><br></br>
          App Development:<br></br> Skilled in developing mobile applications that meet the 
          unique needs of clients and users.<br></br><br></br>
          Let's collaborate to elevate your digital presence and achieve your business goals. 
          Contact me to discuss how I can help bring your ideas to reality.</p>
        </div>
      </div> 
    </div>
  );
}
}

export default Me;
