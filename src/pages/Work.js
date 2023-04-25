import Time from '../assets/Timeline.png';
import Agile from '../assets/Agile.png';

import '../css/work.css';

function Work() {
  return (
    <div className="Work">
      <div className='WorkContainer'>
        <h1 className='WorkManagement'>Managment</h1>
        <h3 className='WorkTextGeral'>Just let me say, it dosn't matter the dress code, if the room is elegant or not. Your team has to believe in you, and you must give them the deserved trust and space to do their jobs. Of course, since all projects are time line defined, you have to make presure and keep strength, but only if its going to slow. Lidership is a two sided sword. Think about it....</h3>
      </div>
      <div className='WorkCMitte'>
        <div className='WorkBoxI'>
            <img className='WorkTime' src={Time} alt="time" />
        </div>
          <h3 className='WorkTText'>Management without the use of a established time line is not 
          possible. During any project you will have several number of actions at the same time. How 
          to control and when relocate the working group. The time line is the basis protocol to 
          ceep your management function. Be on time all the time.</h3>
      </div>
      <div className='WorkCBoden'>
      <h3 className='WorkTTextII'>As a product manager, my job is to figure out what people need and 
      deliver it to them. To do that successfully, we need to be involved in all aspects of the 
      development process, doing things as diverse as facilitating vision and scope definition to 
      designing user manuals to understanding an engineering requirement and explaining it to a 
      non-technical audience. I help Companies around the globe to find their path to solving 
      user problems while contributing to bussiness goals that matter.<br></br>
      Being a source of truth requires a diverse combination of soft-skills and hardskills, the 
      understanding of the business reason, to be able to create a product, visiond by the 
      development community, receiving user information, envolving UX UI Designer and achieving a 
      scope, with garanty of quality.<br></br>
      Well yes, thats my job.<br></br><br></br>
     </h3>
      <div className='WorkBoxII'>
        <img className='WorkAgile' src={Agile} alt="agile" />
        </div>
      </div>
    </div>
  );
}

export default Work;