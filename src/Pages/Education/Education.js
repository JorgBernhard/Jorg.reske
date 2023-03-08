import Uni from '../../assets/Uni-JB.jpg';
import UniB from '../../assets/Uni-Jorg.jpg';
import CubosA from '../../assets/Certificado Cubos Academy.png';
import CubosB from '../../assets/Certificado01.png';
import Ebac from '../../assets/Certificado Ebac.png';
import HumboldtB from '../../assets/HumboldtA.jpg';
import HumboldtA from '../../assets/Humboldt.jpg';

import './education.css';

function Education() {
  return (
    <div id='education'>
      <div className="Education">
        <div className="EducationContainer">
          <h3 className="EduHigh">Educational highlights</h3>
          <div className="UniKoln">
          <h4 className="Uni">University Köln Administration Management</h4>
          <img className="UniUrk" src={Uni} alt="uni" />
          <img className="UniUrkb" src={UniB} alt="unib" />
          </div>
          <div className="Hum">
          <h4 className="Humboldt">Humboldt Tecnical School International Trade Management</h4>
          <img className="HumboldtB" src={HumboldtB} alt="humboldt" />
          <img className="HumboldtA" src={HumboldtA} alt="humboldt" />
          </div>
          <h4 className="PCD">PCD Web-Design</h4>
          <div className="Cub">
          <h4 className="Cubos">CubosAcademy Fullstack Engineer</h4>
          <img className="CubosA" src={CubosA} alt="cubos" />
          <img className="CubosB" src={CubosB} alt="cubos" />
          </div>
          <div className="EB">
          <h4 className="Google">UX UI Web Design</h4>
          <img className="Ebac" src={Ebac} alt="ebac" />
          </div>
          <h3 className="Languages">Languages</h3>
          <h4 className="Deutsch">German-native</h4>
          <h4 className="English">English-almost-native</h4>
          <h4 className="Portugues">Portuguese-native</h4>
          <h4 className="Spanish">Spanish-basic</h4>
        </div>
       </div>
    </div>
  );
}

export default Education;
