
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className='HeaderContainer'>
      <div className="LinksHeader">
            <a className="HeaderHome" href='#home'>Home</a>
            <a className="HeaderWork"  href='#work'>Work</a>
            <a className="HeaderEducation"  href='#education'>Education</a>
            <a className="HeaderContact"  href='#contact'>Contact</a>
      </div>
      </div>
    </div>
  );
}

export default Header;
