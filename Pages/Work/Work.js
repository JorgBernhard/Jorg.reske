import WF01 from '../../assets/WindFarm01.png'
import WF02 from '../../assets/WindFarm02.png'
import WF03 from '../../assets/WindFarm03.png'
import WF04 from '../../assets/WindFarm04.png'
import DS01 from '../../assets/DS01.png'
import DS02 from '../../assets/DS02.png'
import DS03 from '../../assets/DS03.png'
import DS04 from '../../assets/DS04.png'
import DS05 from '../../assets/DS05.png'
import DS06 from '../../assets/DS06.png'

import './Work-style.css';

function Work() {
  return (
    <div id='work'>
    <div className="Work">
      <div className="Work-page">
        <h3 className="work-title">Work Samples</h3>
        <h4 className="WindFarm">Wind Farm Project</h4>
        <h5 className="WF-Text">
          Project of Wind-Farm mounted and certified. Introduction of the company, services provided,
          risc management presented and listed. Governament support assigned, timeline established and 
          even pre-calculated investments per MW installed.
        </h5>
        <div className="WF">
        <img className="WF04" src={WF04} alt="wf04" />
        <img className="WF03" src={WF03} alt="wf04" />
        </div>
        <div className="WF2">
        <img className="WF01" src={WF01} alt="wf04" />
        <img className="WF02" src={WF02} alt="wf04" />
        </div>
        <h4 className="Design">Some Design Samples</h4>
        <h5 className="Design-Text">
          Picked some design sample-projects, just for ideas.
        </h5>
        <div className="DS">
        <img className="DS01" src={DS01} alt="ds01" />
        <img className="DS02" src={DS02} alt="ds02" />
        </div>
        <div className="DS2">
        <img className="DS03" src={DS03} alt="ds03" />
        <img className="DS04" src={DS04} alt="ds04" />
        </div>
        <div className="DS3">
        <img className="DS05" src={DS05} alt="ds05" />
        <img className="DS06" src={DS06} alt="ds06" />
        </div>
        <div className="border"></div>
      </div>
     </div>
    </div>
  );
}

export default Work;
