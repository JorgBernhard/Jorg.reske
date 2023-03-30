
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className='HeaderContainer'>
      <div className="LinksHeader">
            <a className="HeaderHome" href='#home'>Home</a>
            <a className="HeaderWork"  href='#work'>Work</a>
            <a className="HeaderEducation"  href='#education'>Education</a>
            <a className="HeaderW4YDesign" target="_blank" rel="noreferrer"  href='http://localhost:3000/#main'>W4Y Design</a>
            <a className="HeaderContact"  href='#contact'>Contact</a>
      </div>
      </div>
    </div>
  );
}

export default Header;
