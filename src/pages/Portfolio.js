import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Picture from '../assets/JorgB.png'

import Acera from '../work/Acera.png'
import Back from '../work/backwork.png'
import Condo from '../work/Condo.png'
import Icon from '../work/Icon.png'
import IR from '../work/IR.png'
import Maycontec from '../work/Maycontec.png'
import Muaythai from '../work/Muaythai.png'
import Music from '../work/Music.png'
import Restaurant from '../work/Restaurant.png'
import Restaurant02 from '../work/Restaurant02.png'
import Restaurant03 from '../work/Restaurant03.png'
import w4y from '../work/w4y.png'

function Portfolio() {
  return (
    <div id='portfolio'>
    <div className="Portfolio">
      <header className="PortfolioHeader">
      <div className="PortfolioLeft">
        <img className='JorgB' src={Picture} alt='JorgB'></img> 
        <nav className="PortfolioNaveBar">
           
            <Link className='PortfolioHome' to="/">HOME</Link>
           
            <Link className='PortfolioAbout' to="/About">ABOUT ME</Link>
           
            <Link className='PortfolioResume' to="/resume">RESUME</Link>
         
            <Link className='PortfolioPortfolio' to="/portfolio">PORTFOLIO</Link>
          
            <Link className='PortfolioContact' to="/contact">CONTACT</Link>
          
          </nav>
       </div>
       <div className="PortfolioRight">
       <h2 className="PortfolioTitle">PORTFOLIO</h2>
       <h4 className="PortfolioInformation">SOME OF MY WORK, ALL ARROUND THE FIELD</h4>
        <div classNamae="PortfolioBoxes">
            <div className='PortfolioLine1'>
                <img className='PorfolioImg' src={Acera} alt="acera"></img>
                <img  className='PorfolioImg' src={Condo} alt="Condo"></img>
                <img className='PorfolioImg'  src={Restaurant02} alt="Restaurant02"></img>
                <img  className='PorfolioImg' src={Maycontec} alt="Maycontec"></img>
              </div>
              <div className='PortfolioLine2'>
                <img  className='PorfolioImg' src={Icon} alt="Icon"></img>
                <img  className='PorfolioImg' src={Restaurant03} alt="Restaurant03"></img>
                <img  className='PorfolioImg' src={IR} alt="IR"></img>
                <img  className='PorfolioImg' src={Muaythai} alt="Muaythai"></img>
              </div>
              <div className='PortfolioLine3'>
                <img  className='PorfolioImg' src={Music} alt="Music"></img>
                <img  className='PorfolioImg' src={Back} alt="Back"></img>
                <img  className='PorfolioImg' src={w4y} alt="w4y"></img>
                <img  className='PorfolioImg' src={Restaurant} alt="Restaurant"></img>
              </div>
            
        </div>
       </div>
      </header>
    </div>
    </div>
  );
}

export default Portfolio;