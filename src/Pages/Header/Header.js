import Git from '../../assets/github.png';
import Linked from '../../assets/linkedin.png'
import './header.css';

function Header() {
  return (
    <div id='header'>
      <div className="Header">
        <div className="HeaderContainer">
          <div className="LinksHeader">
            <a className="HeaderHome" href='#home'>Home</a>
            <a className="HeaderWork"  href='#work'>Work</a>
            <a className="HeaderEducation"  href='#education'>Education</a>
            <a className="HeaderContact"  href='#contact'>Contact</a>
            <div className="RechtsHeader">
            <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git"><img className="Git" src={Git} alt="Git" /></a> 
            <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
