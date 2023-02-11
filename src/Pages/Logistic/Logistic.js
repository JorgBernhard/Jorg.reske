import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Dev from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';
import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';


import Logistics from '../../assets/operacao-logistica.jpg';
import LogisticService from '../../assets/layers-logistics-services.png';

import './logistic.css';

function Logistic() {
  return (
    <div id='logistic'>
      <div className="Logistic">
        <div className="Container-Logistic">
          <div className="Container-Logistic-Left">
          </div>
          <div className="Container-Logistic-Center">
              <div className="Text-Logistic-All">
              <h3 className="Title-Logistic" >Some Idea of Logistic</h3>
              <h4 className="Text-Project" >The overal process of managing
              how resources are aquired, stored, and transported to is final 
              destination.</h4>
              <img className="Logistic-Pic" src={Logistics} alt="Logistic-Pic" />
              <h4 className="Text-Logistic-Entrance">All over the world you se companies
              working with logistic systems or even are logistic compaanies. Container-ship 
              transport, Air-transport, Trucks and Trains howling what ever bin yesd somwere
              to the right destiny. Someone had to organize, see that the Truck is picking up 
              the container from the ship tha just arrived. The timplan has to be written,
              and passed true all envolved partners, so that cargo is on time in the right 
              place. Documentation has to be written and checked, and so on.......</h4>
              <div className="divide">
                <h4 className="Text-Logistic-Piramide">Every one needs logistic services, 
                companies are lost, sections dont comunicate with each other, documentation 
                and planing are nedded, so that a company can function correctly. Thats Logistic 
                too.</h4>
              <img className="Logistic-Pic2" src={LogisticService} alt="Logistic-Pic2" />
              </div>
              <h4 className="Text-Logistic-Final">With more than 10 years of experience, 
              I'm able to successful organize and proceess all necessary to the acomplish
              any necessary task.</h4>
             
              </div>
          </div>   
          <div className="Container-Logistic-Right">
          <div className="Links-Logistic">
                  <a className="Casa-Logistic" href='#home'><img className="Casa-Logistic" src={Casa} alt="home" /></a>
                  <a className="Manager-Logistic" href='#project'><img className="Ma-Logistic" src={Manager} alt="manager" /></a> 
                  <a className="Log-Logistic" href='#logistic'><img className="Log-Logistic" src={Logistica} alt="logistic" /></a> 
                  <a className="Des-Logistic" href='#designer'><img className="Des-Logistic" src={Design} alt="designer" /></a> 
                  <a className="Dev-Logistic" href='#developer'><img className="Dev-Logistic" src={Dev} alt="developer" /></a> 
                  <a className="Eu-Logistic" href='#me'><img className="Eu-Logistic" src={Eu} alt="me" /></a>  
                  <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                  <a className="Linked-Logistic" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Logistic;
