import Casa from '../../assets/white-house.png';
import Manager from '../../assets/white-management.png';
import Logistica from '../../assets/white-transporte.png';
import Design from '../../assets/white-design-grafico.png';
import Dev from '../../assets/white-code.png';
import Eu from '../../assets/white-man-user.png';

import Contact from '../../assets/white-contact-us.png';
import Linked from '../../assets/white-linkedin.png';


import English from '../../assets/CV-JorgReske.pdf';

import './me.css';

function Me() {
  return (
    <div id='me'>
    <div className="Me">
    <div className="Container-Me">
        <div className="Container-Me-Left">
        </div>
        <div className="Container-Me-Center">
          <div className="Text-Me-All">
          <h2 className="Jorg-Me" >Jörg Bernhard Reske</h2>
          <h3 className="Title-Me" >Product Management • UX Design • Software Engineering • 
          Software Application Developer</h3>
          <h4 className="Text-Me" >Analytical, innovative software development professional 
            with extensive experience in evaluating, executing and deploying 
            systems, improving quality and efficiency. Adept at aligning 
            end-user needs with complex IT solutions.S killed troubleshooter, 
            continually focused on identifying, isolating, and resolving 
            technical issues. Strong business acumen, accomplished in f
            unctional and technical analysis, design and documentation. 
            Exceptional communicator, skilled in building effective 
            cross-team collaborations and strengthening relationships 
            across functions to drive cohesive, technical operations. 
            Extensive teaching experience.</h4>
            <h3 className="Title-Me" >Career Acomplishments</h3>
            <h4 className="Text-Me" >210 MW windfarm in successful operation, and another 800 MW 
              registered and under development all over the country. 
              Specialist to prepare and adapt wind plant projects for 
              auction, construction, and operation in full compliancy with 
              Brazilian regulations. Created for Acera a significant pipline 
              of projects under development, and contracted areas totaling 
              10.000, ha in the South of Brazil, as well as 3.500, ha in the 
              NE. Those are the most promising regions for wind power in 
              Brazil. Developed and marked a network for ATT to establish 
              cellular connections all over the continent. Connected TTI 
              (Hellmann) international to all branches all over the South 
              America. Developed e warehous for TKS inthe name of Garoto, 
              capacity of 10650 pallets, fully automatic, 7 trans-elevators, 
              top security sprinkler system.</h4>
              <h3 className="Title-Me" >Professional Experience</h3>
              <h4 className="Text-Me" >General Manager 2009 - 2022 <br></br>
                Acera Consulting Services, 
                a successful consulting firm. Integrated agile and traditional 
                methodologies into software engineering and development 
                processes for various companies. <br></br><br></br>
                IT Manager for South America 2007 - 2009<br></br>
                IT Network Services, successful construction of IT network 
                to distant windfarms.<br></br><br></br>
                General Manager Siah 2002 - 2007<br></br>
                General Manager structuring sales organization. Inhouse IT 
                structuring, Servers Net and “WiFi networks”. Elaboration of 
                projects for Desbravador.<br></br><br></br>
                General Manager Hotel Rosa Nautica 2001 - 2007<br></br>
                Basic Hotel Management, structuring, organization and Finance 
                organization.<br></br><br></br>
                Project Manager TTI 1998 - 2001<br></br>
                Project Manager, IT - implementation, introduction of ISO 9002
                <br></br><br></br>
                Project Manager ATT USA 1997 – 1998<br></br>
                Wireless Project development for ATT - Desert of Maricopa 
                Arizona USA.<br></br><br></br>
                Project Manager Assistant TKS 1993 - 1997<br></br>
                Project Coordination;</h4>
                <h3 className="Title-Me">Education</h3>
                <h4 className="Text-Me">University Köln Administration 
                Management<br></br>Humboldt Tecnical School International 
                Trade Management<br></br>PCD Web-Design<br></br>CubosAcademy 
                Fullstack Engineer<br></br>UX UI Web-Design</h4>
                <h3 className="Title-Me">Languages</h3>
                <h4 className="Text-Me">German • Native<br></br>
                English • almost native<br></br>Portuguese • almost native
                <br></br>Spanish • basic</h4>
                </div>
                <div className="Resume">
                </div>
                  <a className="English-Resume" href={English} download="English">Download Resume PDF</a>
              </div>
        <div className="Container-Me-Right">
              <div className="Links-Me">
                  <a className="Casa-Me" href='#home'><img className="Casa-Me" src={Casa} alt="home" /></a>
                  <a className="Manager-Me" href='#project'><img className="Ma-Me" src={Manager} alt="manager" /></a> 
                  <a className="Log-Me" href='#logistic'><img className="Log-Me" src={Logistica} alt="logistic" /></a> 
                  <a className="Des-Me" href='#designer'><img className="Des-Me" src={Design} alt="designer" /></a> 
                  <a className="Dev-Me" href='#developer'><img className="Dev-Me" src={Dev} alt="developer" /></a> 
                  <a className="Eu-Me" href='#me'><img className="Eu-Me" src={Eu} alt="me" /></a>  
                  <a className="email" href="mailto:jorg.reske@gmail.com" alt="email"><img className="Contact" src={Contact} alt="Contact" /></a> 
                  <a className="Linked-Me" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a> 
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
