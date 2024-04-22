import React, { Component } from 'react';
import { Link } from "react-router-dom";


import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Logo from '../assets/Logo-gray.png';
import Linked from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Email from '../assets/email.png';
import Whats from '../assets/whats.png';

import Condo from '../assets/Condo01.png';
import Muaythai from '../assets/muaythai01.png';
import Acera from '../assets/Acera01.png';
import Maycontec from '../assets/Maycontec.png';
import IR from '../assets/IR.png';
import Restaurant from '../assets/Restaurant.png';
import Music from '../assets/Music-player02.png';
import W4YDesign from '../assets/w4y.png';

import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="ProjectsPage">
        <div className="ProjectsHeader">
                <div className="ProjectsSLeft">
                    <img className="ProjectsLogo" src={Logo} alt="logo"></img>
                    <div className="ProjectsLinks">
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
                <div className="ProjectsAll">
                  <h3 className="SomeProjects">Some of our art - design - projects</h3>
                  <h4 className="LittleMore">Just some flashes of sites and work we have done.</h4>
                <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{clickable: true}}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false
                  }}
                loop
                className='swiper-container'> 
                <SwiperSlide>
                    <img className='Foto' src={Condo} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={Acera} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={Restaurant} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={Maycontec} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={Muaythai} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={IR} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={Music} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Foto' src={W4YDesign} alt='1'/>
                </SwiperSlide>
            </Swiper>
           </div>
        </div>
      </div> 
  
  );
}
}

export default Projects;
