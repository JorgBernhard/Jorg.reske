
import { Outlet, Link } from "react-router-dom";

import Logo from '../assets/Logo-gray.png';
import Linked from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Email from '../assets/email.png';
import Whats from '../assets/whats.png';


import './Header.css';

const Header = () => {
    return (
      <>
     
      <nav className="Header">
      <div className="HeaderHeader">
        <div className="HeaderSLeft">
        <img className="HeaderLogo" src={Logo} alt="logo"></img>
        <div className="HeaderLinks">
              <Link className="MyHome" to="/">Home</Link>
              <Link className="Projects" to="/projects">Projects</Link>
              <Link className="Me" to="/me">Me</Link>
        </div>
        <div className="Imagens">
            <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="Linked"></img></a>
            <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git"><img className="Github" src={Github} alt="Github"></img></a> 
            <a className="Mail" href='mailto:jorg.reske@gmail.com'><img className="Email" src={Email} alt="Email"></img></a>
            <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats"></img></a> 
        </div>
        </div>
        </div>
        </nav>

<Outlet />
</>
)
};

export default Header;