
import React from 'react';
import './style.css';

import Linked from '../assets/icons/linkedin-icon.svg';
import Github from '../assets/icons/github-icon.svg';

function Contact() {
 
    return (
      <div id="contact">
        <div className="Contact">
            <div className="Background-contact">
              <div className="Center-contact">
                <div ClassName="left-side-contact">
                  <h1 className="contact-header">My Contact</h1>
                  <h3>Hi there, here is how to find me!</h3>
                  <h4>Jorg Bernhard Reske<br></br>
                      Mobile: +55 (84) 99968-5830 (Whats-up / Telegram)<br></br>
                      Adress: <br></br>
                      Rua Lagoa Nova, 124 / Bloco B 402<br></br>
                      Nova Parnamirim / Parnamirim<br></br>
                      Cep: 59152-655<br></br>
                      Brazil<br></br>
                  </h4>
                <div className="emailOrg">
                  <a className="send-email" href="mailto:jorg.reske@gmail.com" alt="email">My Email: jorg.reske@gmail.com</a><br></br>
               </div>
                  <div className="logos">
                      <div className="logo1">
                          <img src={Github} alt="git" />
                          <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="git">My Github: https://github.com/JorgBernhard</a><br></br>
                      </div>
                      <div className="logo1">
                          <img src={Linked} alt="linked" />
                          <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked">My LinkedIn: https://www.linkedin.com/in/jorg-reske-b327699b/</a>
                      </div>
                  </div>

                    <div ClassName="right-side-contact">
                
              </div>    
                  </div>
              </div>
          
            </div>
        </div>
      </div>
  );
}

export default Contact;
