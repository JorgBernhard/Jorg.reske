import EnglishR from '../../assets/JBR-PM-eng.pdf';
import './Resume-style.css';

function Resume() {
  return (
    <div id='resume'>
    <div className="Resume">
      <div className="Das-Resume">
      <a className="English-Resume" href={EnglishR} download="EnglishR">Download Resume PDF</a>
        <h3 className="My-Resume">Jörg Bernhard Reske</h3>
        <h4 className="PM">Software Application Developer</h4>
        <h4 className="Position">Product Management  •  UX Design  •  Software Engineering</h4>
      </div>
      <div className="Divide">
        <div className="Links">
          <h5 className="agil">
            Business Analysis<br></br>
            Business Development<br></br>
            Risk/Crisis Management<br></br>
            Due Dilegence<br></br>
            Project & Site Negotiation<br></br>
            Green Field Development<br></br>
            Pre-Construction Planning<br></br>
            Financial Model<br></br>
            Project Management<br></br>
            HSE<br></br>
            Site Operation<br></br>
            Agile Methodologies/SDLC<br></br>
            Wireframes, UX, Prototyping<br></br>
            Database Design, Data Migration<br></br>
            Software Engineering<br></br>
            QA Management<br></br>
            Training, Instructional Design</h5>
        </div>  
        <div className="Rechts">
          <h5 className="Extras">Analytical, innovative software development professional with 
          extensive experience in evaluating, executing and deploying systems, improving quality and 
          efficiency. Adept at aligning end-user needs with complex IT solutions.<br></br><br></br> Skilled troubleshooter, 
          continually focused on identifying, isolating, and resolving technical issues. Strong business 
          acumen, accomplished in functional and technical analysis, design and documentation. 
          <br></br><br></br>Exceptional communicator, skilled in building effective cross-team collaborations and 
          strengthening relationships across functions to drive cohesive, technical operations. 
          Extensive teaching experience.</h5>
        </div>  
     </div>
     <h4 className="Career">CAREER ACCOMPLISHMENTS</h4>
     <h5 className="Acomplished">210 MW windfarm in successful operation, and another 800 MW 
          registered and under development all over the country. Specialist to prepare and 
          adapt wind plant projects for auction, construction, and operation in full compliancy with 
          Brazilian regulations.<br></br><br></br>
          Created for Acera a significant pipline of projects under development, and contracted areas 
          totaling 10.000, ha in the South of Brazil, as well as 3.500, ha in the NE. 
          Those are the most promising regions for wind power in Brazil.<br></br><br></br>
          Developed and marked a network for ATT to establish cellular connections all over the 
          continent.<br></br><br></br>
          Connected TTI (Hellmann) international to all branches all over the South America. <br></br><br></br>
          Developed e warehous for TKS inthe name of Garoto, capacity of 10650 pallets, fully automatic, 
          7 trans-elevators, top security sprinkler system.
          </h5>  
          <h4 className="Professional">PROFESSIONAL EXPERIENCE</h4>
          <h5 className="GeneralManager-Acera">
            General Manager 2009 - 2022<br></br>
            Acera Consulting Services, a successful consulting firm. Integrated agile and traditional methodologies 
            into software engineering and development processes for various companies. </h5>
          <h5 className="PacifcHydro">IT Manager for South America 2007 - 2009<br></br>
          IT Network Services, successful construction of IT network to distant windfarms.</h5>
          <h5 className="GeneralManagerSiah">General Manager Siah 2002 - 2007<br></br>
          General Manager structuring sales organization. inhouse IT structuring, Servers Net 
          and “WiFi networks”. Elaboration of projects for Desbravador.</h5>
          <h5 className="Nautica">General Manager Hotel Rosa Nautica 2001 - 2007<br></br>
          Basic Hotel Management, structuring, organization and Finance organization.</h5>
          <h5 className="TTI">Project Manager TTI 1998 - 2001<br></br> 
          Project Manager,  IT - implementation, introduction of ISO 9002. </h5>
          <h5 className="ATT">Project Manager ATT USA 1997 – 1998<br></br> 
          Wireless Project development for ATT - Desert of Maricopa Arizona USA.</h5>
          <h5 className="TKS">Project Manager Assistant 1993 - 1997<br></br>
          Project Coordination; </h5>
          <h4 className="Education">EDUCATION</h4>
          <h5 className="University">University Köln Administration Management</h5>
          <h5 className="Humboldt">Humboldt Tecnical School International Trade Management</h5>
          <h5 className="PCD">PCD Web-Design</h5>
          <h5 className="CubosAcademy">CubosAcademy Fullstack Engineer</h5>
          <h5 className="EBAC">UX UI Web-Design</h5>
       <h4 className="Languages">LANGUAGES</h4>
          <h5 className="German">German  •  Native</h5>
          <h5 className="English">English  •  almost native</h5>
          <h5 className="Portuguese">Portuguese  •  almost native</h5>
          <h5 className="Spanish">Spanish  •  basic</h5>
          <div className="line"></div>
 </div>
    </div>
  );
}

export default Resume;
