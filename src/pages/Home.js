import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../assets/Logo-gray.png';
import Linked from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Email from '../assets/email.png';
import Whats from '../assets/whats.png';

import Restaurant from '../assets/Restaurant.png';
import IR from '../assets/IR.png';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <div className="HomeHead">
        <div className="HomeSLeft">
        <img className="HomeLogo" src={Logo} alt="logo"></img>
        <div className="HomeLinks">
              <Link className="MyHome" to="/">Home</Link>
              <Link className="Projects" to="/projects">Projects</Link>
              <Link className="Me" to="/me">Me</Link>
        </div>
        <div className="Imagens">
            <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="Linked"></img></a>
            <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git"><img className="Github" src={Github} alt="Github"></img></a> 
            <a className="Mail" href='mailto:jorg.reske@gmail.com'><img className="Email" src={Email} alt="Email"></img></a>
            <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats"></img></a> 
        </div>
        </div>
        <div className="HomeCenter">
            <h3 className='HomeName'>This is WE 4 YOU Design</h3>
            <h4 className="HomeInfo">Welcome to W4Y, where design meets innovation, and user 
            experiences are crafted with passion. Step into a world where every pixel tells a story, 
            every click ignites inspiration, and every interface is a masterpiece in the making.<br></br><br></br> 
            At W4Y, we don't just design interfaces; we sculpt digital experiences that resonate. 
            From seamless UX journeys to visually captivating UI designs, we're here to elevate your 
            brand to new heights in the digital realm.<br></br><br></br>
            So, whether you're seeking to enchant your audience with intuitive interfaces or 
            redefine user engagement through cutting-edge design, you've found your creative partner 
            in us. Let's embark on a journey where imagination knows no bounds and every design is a 
            testament to excellence.<br></br><br></br>
            Welcome to the artistry of UX/UI design. Welcome to W4Y.<br></br><br></br>
            <br></br><br></br>
            Feel free to contact us, we love to help and design new projects.</h4>
        </div>
        <div className="HomeSRight">
          <h4 className="Some">Some of our art-design</h4>
          <div className="HomeBox">
              <img className="Restaurant" src={Restaurant} alt="restaurant"></img>
              <img className="IR" src={IR} alt="ir"></img>
           </div>
        </div>
      </div> 
    </div>
  );
}
}

export default Home;
