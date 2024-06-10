import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import Picture from '../assets/JorgB.png'

function About() {
  return (
    <div id='about'>
    <div className="About">
      <header className="AboutHeader">
       <div className="AboutLeft">
        <img className='JorgB' src={Picture} alt='JorgB'></img> 
        <nav className="AboutNaveBar">
           
            <Link className='AboutHome' to="/">HOME</Link>
           
            <Link className='AboutAbout' to="/about">ABOUT ME</Link>
           
            <Link className='AboutResume' to="/resume">RESUME</Link>
         
            <Link className='AboutPortfolio' to="/portfolio">PORTFOLIO</Link>
          
            <Link className='AboutContact' to="/contact">CONTACT</Link>
          
          </nav>
       </div>
       <div className="AboutRight">
          <h2 className="AboutMe">ABOUT ME</h2>
          <h3 calassName="SobreMe">I'm Jörg Bernhard, Project Manager | UX/UI Designer | App Developer</h3>
          <h2 className="What">What I do!</h2>
          <h4 className="AboutText">Welcome, were design meets innovation, and user experiences 
            are crafted with passion. Step into a world where every pixel tells a story, every 
            click ignites inspiration, and every interface is a masterpiece in the making.
            I don't just design interfaces; I sculpt digital experiences that resonate. 
            From seamless UX journeys to visually captivating UI designs, I'm here to 
            elevate your brand to new heights in the digital realm.<br></br><br></br>
            So, whether you're seeking to enchant your audience with intuitive interfaces 
            or redefine user engagement through cutting-edge design, you've found your 
            creative partner. Let's embark on a journey where imagination knows no 
            bounds and every design is a testament to excellence.
            Welcome to the artistry of UX/UI design. Welcome to my portfolio.
            <br></br><br></br>
            Feel free to contact me, I love to help and design new projects.</h4>
            <div className='AboutBoxes'>
              <div className="Box1">
              <h2 className='WebPages1'>500+</h2>
              <h2 className='WebPages2'>Web Design</h2>
              </div>
              <div className="Box2">
              <h2 className='Company1'>250+</h2>
              <h2 className='Company2'>Company Logos</h2>
              </div>
              <div className="Box3">
              <h2 className='Bussines1'>100+</h2>
              <h2 className='Bussines2'>Bussines Lettering</h2>
              </div>
              <div className="Box4">
              <h2 className='Projects1'>20+</h2>
              <h2 className='Projects2'>Wind + Solar Projects</h2>
              </div>
              <div className="Box5">
              <h2 className='Administration1'>5+</h2>
              <h2 className='Administration2'>Intern Logistic</h2>
              </div>
            </div>
       </div>
      </header>
    </div>
    </div>
  );
}

export default About;
