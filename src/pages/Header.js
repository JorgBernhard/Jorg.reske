import Whats from '../assets/whatsapp.png';
import Git from '../assets/github.png';
import Linked from '../assets/linkedin.png';
import Email from '../assets/contact-us.png';

import '../css/header.css';

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="Header">
      <div className='HeaderContainer'>
         <div className="HeaderOben">
            <Link to='mailto:jorg.reske@gmail.com'><img className="Mail" src={Email} alt="email"></img></Link>
            <Link target="_blank" rel="noreferrer" to={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="whats"><img className="Whats" src={Whats} alt="Whats"></img></Link>
            <Link target="_blank" rel="noreferrer" to={"https://github.com/JorgBernhard"} alt="github"><img className="Git" src={Git} alt="git"></img></Link>
            <Link target="_blank" rel="noreferrer" to={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked"></img></Link>
        </div>
        <div className="HeaderDivison">
        <div className="HeaderUnten">
            <Link className="HeaderHome" to='/'>Home</Link>
            <Link className="HeaderWork"  to='work'>Work</Link>
            <Link className="HeaderEducation"  to='education'>Education</Link>
            {/* <Link className="HeaderW4YDesign" target="_blank" rel="noreferrer"  to='https://www.w4y.net.br/'>W4Y Design</Link> */}
            <Link className="HeaderContact"  to='contact'>Contact</Link>
      </div>
        </div>
        </div>
     </nav>
      <Outlet />
     </>
  );
}

export default Header;