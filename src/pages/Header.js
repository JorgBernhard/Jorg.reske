import Whats from '../assets/whatsapp.png';
import Git from '../assets/github.png';
import Linked from '../assets/linkedin.png';
import Email from '../assets/contact-us.png';
import Portugues from '../assets/portugues.png';
import English from '../assets/english.png';

import { Outlet, Link } from "react-router-dom";
import '../css/header.css';
const Layout = () => {
  return (
    <>
      <nav className="HeaderBar">
        <div className='LayoutContainer'>
            <h3 className="Portfolio">Portfolio</h3>
            <div className="Links">
              <Link to="/portugues"><img className="PortuguesB" src={Portugues} alt="port" /></Link>
              <Link  to="/"><img className="English" src={English} alt="eng" /></Link>
            </div>
            <div className="Rechts">
              <a href='mailto:jorg.reske@gmail.com'><img className="Mail" src={Email} alt="email"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="whats"><img className="Whats" src={Whats} alt="Whats"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="github"><img className="Git" src={Git} alt="git"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="aed"><img className="Linked" src={Linked} alt="linked"></img></a>
            </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;