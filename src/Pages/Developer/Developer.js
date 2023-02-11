import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Code from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';
import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';


import Dev from '../../assets/dev.png';

import './developer.css';

function Developer() {
  return (
    <div id='developer'>
      <div className="Developer">
        <div className="Container-Developer">
            <div className="Container-Developer-Left">
            </div>
            <div className="Container-Developer-Center">
              <div className="Text-Developer-All">
                <h3 className="Text-Developer-Title">Programming and Developing</h3>
                <h4 className="Text-Developer-Base">A programmer or 
                developer is an individual that builds and creat's software 
                and applications. He or she writes, debugs and executes the 
                source code of a software application, like Java Script, 
                Python, Java, Kotlin,PHP C++ e muitos outros. 
                A developer is also known as a software engineer, computer 
                programmer, programmer or software coder.
                <br></br><br></br>
                A developer is the key individual behind all software 
                applications. Generally, developers are well versed in at 
                least one programming language and proficient in the art of 
                structuring and developing software code for software or a 
                program. Depending on job role and type of software developed, 
                a developer may be classified as a software developer, 
                application developer, mobile developer, Web developer, etc.</h4>
                <img className="Dev" src={Dev} alt="dev" />
                <h4 className="Text-Developer-Base">
                Although the primary job role is writing code, a developer 
                also may gather requirements for software, design or overall 
                software architecture with a team of several other progrmmers 
                and designers etc, software documentation and other 
                related software development processes.</h4>
            
              </div>
            </div>   
            <div className="Container-Developer-Right">
            <div className="Links-Developer">
                  <a className="Casa-Developer" href='#home'><img className="Casa-Developer" src={Casa} alt="home" /></a>
                  <a className="Manager-Developer" href='#project'><img className="Ma-Developer" src={Manager} alt="manager" /></a> 
                  <a className="Log-Developer" href='#logistic'><img className="Log-Developer" src={Logistica} alt="logistic" /></a> 
                  <a className="Des-Developer" href='#designer'><img className="Des-Developer" src={Design} alt="designer" /></a> 
                  <a className="Dev-Developer" href='#developer'><img className="Dev-Developer" src={Code} alt="developer" /></a> 
                  <a className="Eu-Developer" href='#me'><img className="Eu-Developer" src={Eu} alt="me" /></a>  
                  <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                  <a className="Linked-Developer" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
