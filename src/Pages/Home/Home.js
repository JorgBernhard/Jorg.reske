import Jorg from '../../assets/Jorg.png';

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
         
        </div>
        <div className="Container-Home-Center">
              <img className="JorgB" src={Jorg} alt="jorg" />
       
              <h3 className="Jorg">Jörg Bernhard</h3>
              <h5 className="WebDesign">W4Y Design ® All Rights ar reserved - Since 2010</h5>
        </div>
        <div className="Container-Home-Right">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
