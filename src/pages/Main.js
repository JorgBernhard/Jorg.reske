import { Link } from 'react-router-dom';

import Jorg from '../assets/Jorg-work.png'

import Home from '../assets/house.png'
import AboutLink from '../assets/man.png'
import ResumeLink from '../assets/Resume.png'
import PortfolioLink from '../assets/design.png'
import ContactLink from '../assets/contact.png'
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <mainheader className="Main-header">
       <div className="MainLeft">
        <h1 className="Hallo">HI THERE!</h1>
        <div className="MainTextFull">
        <h1 className="MainFront">I'M</h1>
        <h1 className="MainNome">JÖRG BERNHARD</h1>
        </div>
        <h1 className="MainTitle">Project Manager | UX/UI Designer | App Developer</h1>
        <h3 className="MainText">I'm a versatile professional with a passion for crafting 
          exceptional digital experiences. With a blend of project management expertise, 
          UX/UI design skills, and app development capabilities, I'm dedicated to bringing 
          your vision to life.</h3>
       </div>
       <div className="MainRight">
          <img className="Jorg" src={Jorg} alt="Jorg"></img>
          <nav className="NaveBar">
            <Link className='MainHome' to="/"><img className='MainHome' src={Home} alt='home'></img></Link>
            <Link className='MainAbout' to="/about"><img  className='MainAbout' src={AboutLink} alt='about'></img></Link>
            <Link className='MainResume' to="/resume"><img  className='MainResume' src={ResumeLink} alt='Resume'></img></Link>
            <Link className='MainPortfolio' to="/portfolio"><img  className='MainPortfolio' src={PortfolioLink} alt='Portfolio'></img></Link>
            <Link className='MainContact' to="/contact"><img  className='MainContact' src={ContactLink} alt='Contact'></img></Link>
          </nav>
       </div>
      </mainheader>
    </div>
  );
}

export default Main;
