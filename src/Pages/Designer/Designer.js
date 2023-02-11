import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Dev from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';
import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';

import Design01 from '../../assets/Security.png';
import Design02 from '../../assets/Condo.png';
import Design03 from '../../assets/IsabellaReske.png';
import Design04 from '../../assets/Magic.png';
import Design05 from '../../assets/MuayTai.png';
import Design06 from '../../assets/Puppy.png';

import './designer.css';

function Designer() {
  return (
    <div id='designer'>
      <div className="Designer">
        <div className="Container-Designer">
            <div className="Container-Designer-Left">
            </div>
            <div className="Container-Designer-Center">
                <div className="Text-Designer-All">
                    <h3 className="Title-Designer" >UX UI Designer</h3>
                    <h4 className="Text-Designer" >Art is something beautiful,
                    unique, just singular. Still we are creating art for our 
                    selfs. <br></br><br></br>
                    Beeig a UX UI Designer brings with it resposability, a 
                    amount of time and coordination with others to achieve 
                    the desierd result.<br></br>
                    It dosn't matter what your designing it already 
                    has a purpose, it's needed. The project rent to UX Reseach, 
                    e team, maybe directed by your self has already created 
                    the idea. Now it's time to make it solid in color and form,
                    so people can look at it and help you smoothening out the edges. 
                    And than little by little the shapes become definitive. <br></br><br></br>
                    I love Design and Art.</h4>
                </div>
                <div className="AllDesignPictures">
                  <div className="DesignPicures">
                    <img className="Design01" src={Design01} alt="Design01" />
                    <img className="Design02" src={Design02} alt="Design02" />
                    </div>
                    <div className="DesignPicturess">
                    <img className="Design03" src={Design03} alt="Design03" />
                    <img className="Design04" src={Design05} alt="Design04" />
                  </div>
                  <div className="DesignPicturesss">
                    <img className="Design05" src={Design04} alt="Design05" />
                    <img className="Design06" src={Design06} alt="Design06" />
                  </div>
                  </div>
            </div>   
              <div className="Container-Designer-Right">
              <div className="Links-Designer">
                  <a className="Casa-Designer" href='#home'><img className="Casa-Designer" src={Casa} alt="home" /></a>
                  <a className="Manager-Designer" href='#project'><img className="Ma-Designer" src={Manager} alt="manager" /></a> 
                  <a className="Log-Designer" href='#logistic'><img className="Log-Designer" src={Logistica} alt="logistic" /></a> 
                  <a className="Des-Designer" href='#designer'><img className="Des-Designer" src={Design} alt="designer" /></a> 
                  <a className="Dev-Designer" href='#developer'><img className="Dev-Designer" src={Dev} alt="developer" /></a> 
                  <a className="Eu-Designer" href='#me'><img className="Eu-Designer" src={Eu} alt="me" /></a>  
                  <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                  <a className="Linked-Designer" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              </div>
              </div>
        </div>
      </div>
    </div>
   
  );
}

export default Designer;
