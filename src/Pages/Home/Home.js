import Jorg from '../../assets/Jorg.png';

import Contact from '../../assets/contact-us.png';
import Linked from '../../assets/linkedin.png';
import Whats from '../../assets/whatsapp.png';

import './home.css';

function Home() {
  return (
    <div id='home'>
    <div className="Home">
      <div className="Container-Home">
        <div className="Container-Home-Left">
          <div className="Sites-Home">
              <a className="Project" href='#project' >Project Manager</a>
              <a className="Logistic" href='#logistic' >Logstic Manager</a>
              <a className="Designer" href='#designer' >UX UI Designer</a>
              <a className="Developer" href='#developer' >Full Stack Developer</a>
              <a className="Me" href='#me' >Just Me</a>
          </div>
          <div className="Links-Home">
              <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
              <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              <a className="Whatsapp" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats" /></a> 
              </div>
        </div>
        <div className="Container-Home-Center">
              <img className="JorgB" src={Jorg} alt="jorg" />
              <h5 className="WebDesign">W4Y Design ® All Rights ar reserved - Since 2010</h5>
        </div>
        <div className="Container-Home-Right">
              <h3 className="Reske">Reske</h3>
              <h3 className="Bernhard">Bernhard</h3>
              <h3 className="Jorg">Jörg</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
