import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Dev from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';
import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';

import './Header-style.css';

function Header() {
  return (
    <div id='header'>
        <div className="Header-Container-main">
              <div className="Header-Linke-Seite">

              </div>
              <div className="Header-Mittel-Seite">

              </div>
              <div className="Header-Rechte-Seite">
                  <div className="Header-Links">
                    <a className="Casa-Header" href='#home'><img className="Casa-Header" src={Casa} alt="home" /></a>
                    <a className="Manager-Header" href='#project'><img className="Ma-Header" src={Manager} alt="manager" /></a> 
                    <a className="Log-Header" href='#logistic'><img className="Log-Header" src={Logistica} alt="logistic" /></a> 
                    <a className="Des-Header" href='#designer'><img className="Des-Header" src={Design} alt="designer" /></a> 
                    <a className="Dev-Header" href='#developer'><img className="Dev-Header" src={Dev} alt="developer" /></a> 
                    <a className="Eu-Header" href='#me'><img className="Eu-Header" src={Eu} alt="me" /></a>  
                    <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                    <a className="Linked-Header" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Header;