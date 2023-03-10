import Mr from '../../assets/MGRespons.png'
import './work.css';

function Work() {
  return (
    <div id='work'>
      <div className="Work">
        <div className="WorkContainer">
          <div className="WorkTextContainer">
          <h3 className="WorkResponsText">G. Manager</h3>
          <h5 className="WorkBoxesText">Just let me say, it dosn't matter 
              the dress code, if the room is elegant or not. Your team has to believe
              in you, and you must give them the deserved trust and space to do their
              jobs. Of course, since all projects are time line defined, you have to make presure
              and keep strength, but only if its going to slow. Lidership is a two sided
              sword. Think about it.... 
          </h5>
        
        <div className="WorkContainer2">
          <h3 className="WorkMRespons">Manager Responsibilities are 
            enormoues!</h3>
          <div className="Workdivide">
            <img className="MGR" src={Mr} alt="mr" />
            <h5 className="WorkText">As a product manager, my job is to figure out what people 
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
                    <br></br><br></br>Well yes, thats my job.<br></br><br></br>Analytical, innovative software development 
                    professional with extensive experience in evaluating, executing and deploying 
                    systems, improving quality and efficiency.<br></br><br></br>  
                    Adept at aligning end-user needs with 
                    complex IT solutions. Skilled troubleshooter, continually focused on identifying, isolating, and
                    resolving technical issues. Strong business acumen, accomplished in functional and 
                    technical analysis, design and documentation.<br></br> <br></br> 
                    Exceptional communicator, skilled in 
                    building effective cross-team collaborations and strengthening relationships across 
                    functions to drive cohesive, technical operations. Extensive teaching experience.
                    <br></br><br></br>Well you could go on and on...</h5>
          </div>    
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
