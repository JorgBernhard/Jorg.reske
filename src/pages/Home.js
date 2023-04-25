import Jorg from '../assets/Eu.png';
import Doc from '../assets/DocMix.png';
import Time from '../assets/Timeline.png';
import Agile from '../assets/Agile.png';
import Organize from '../assets/Organize.png';

import '../css/home.css';
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div className="Home">
      <div className="HomeContainer">
      <h1 className="HeaderText">Your company with the right cloth!</h1>
      <div className='HeaderMitte'>
      <img className="Jorg" src={Jorg} alt="jorg" />
      <img className='doc' src={Doc} alt="doc" />
      <dv className='HomeText'>
      <h1 className='Name'>I'm Jörg Bernhard</h1>
      <h1 className="ManagerText">Your manager with the right understanding!</h1>
      <Link className="GeneralText" to='mailto:jorg.reske@gmail.com'>Please feel free to contact me</Link>
      </dv>
      </div>
      </div>
      <div className='Divisao'>
        <Link className="LayoutWork"  to='work'>
          <div className='BoxI'>
          <h4 className='NoM'>There is no Management without a established Time-line of production</h4>
          <img className='Time' src={Time} alt="time" />
          </div>
        </Link>
        <Link className="LayoutEducation"  to='education'>
        <div className='BoxIII'>
        <h4 className='OrganizeText'>Management is Oranization</h4>
        <img className='Organize' src={Organize} alt="Organize" />
        </div>
        </Link>
        <Link className="LayoutWork"  to='work'>
        <div className='BoxII'>
        <h4 className='AgileM'>Today we use Management with Agile Methodology</h4>
        <img className='Agile' src={Agile} alt="agile" />
        </div>
        </Link>
    </div>
    <Outlet />
    </div>
    </>
  );
}

export default Home;
