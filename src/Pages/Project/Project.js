import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Dev from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';
import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';


import Acera01 from '../../assets/WindFarm04.png';
import Acera02 from '../../assets/WindFarm03.png';
import Acera03 from '../../assets/WindFarm02.png';
import Acera04 from '../../assets/WindFarm01.png';

import './project.css';

function Project() {
  return (
    <div id='project'>
      <div className="Project">
        <div className="Container-Project">
          <div className="Container-Project-Left">
          </div>
          <div className="Container-Project-Center">
              <div className="Text-Project-All">
                <h3 className="Title-Project" >My Manager Goals</h3>
                <h4 className="Text-Project" >As a product manager, my job is to figure out what people 
                  need and deliver it to them. To do that successfully, we 
                  need to be involved in all aspects of the development 
                  process, doing things as diverse as facilitating vision 
                  and scope definition to designing user manuals to 
                  understanding an engineering requirement and explaining it 
                  to a non-technical audience.<br></br> I help Companies around the 
                  globe to find their path to solving user problems while 
                  contributing to bussiness goals that matter.<br></br><br></br> Being a source 
                  of truth requires a diverse combination of soft-skills and 
                  hardskills, the understanding of the business reason, to be 
                  able to create a product, visiond by the development 
                  community, receiving user information, envolving UX UI 
                  Designer and achieving a scope, with garanty of quality.
                  <br></br><br></br>Well yes, thats my job.</h4>
                  <h3 className="Title-Project" >Some management work</h3>
                  <h4 className="Text-Project" >Wind Farm Project</h4>
                  <h4 className="Text-Project" >Project of Wind-Farm mounted 
                  and certified. Introduction of the company, services 
                  provided, risc management presented and listed. Governament 
                  support assigned and timeline established.</h4>
                  <div className="Acera">
                    <img className="Acera01" src={Acera01} alt="Acera01" />
                    <img className="Acera02" src={Acera02} alt="Acera02" />
                    </div>
                    <div className="Acera2">
                    <img className="Acera03" src={Acera03} alt="Acera03" />
                    <img className="Acera04" src={Acera04} alt="Acera04" />
                  </div>
                  </div>
          </div>   
          <div className="Container-Project-Right">
          <div className="Links-Project">
                  <a className="Casa-Project" href='#home'><img className="Casa-Project" src={Casa} alt="home" /></a>
                  <a className="Manager-Project" href='#project'><img className="Ma-Project" src={Manager} alt="manager" /></a> 
                  <a className="Log-Project" href='#logistic'><img className="Log-Project" src={Logistica} alt="logistic" /></a> 
                  <a className="Des-Project" href='#designer'><img className="Des-Project" src={Design} alt="designer" /></a> 
                  <a className="Dev-Project" href='#developer'><img className="Dev-Project" src={Dev} alt="developer" /></a> 
                  <a className="Eu-Project" href='#me'><img className="Eu-Project" src={Eu} alt="me" /></a>  
                  <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                  <a className="Linked-Project" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              </div>
          </div>
          </div>
      </div>
    </div>
  );
}


export default Project;
