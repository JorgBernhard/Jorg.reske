import Jorg from '../../assets/Jorg.png';
import './Header-style.css';

function Header() {
  return (
    <div className="Container-main">
        <div className="Head">
          <div className="links-top">
            <div className="texto">
              <h2 className="Nome">Jörg Bernhard Reske</h2>
              <img className="Jorg" src={Jorg} alt="jorg" />
              <h2 className="Title">Product Management<br></br>Coach & Consultant</h2>
            </div>
        </div>
            <div className="links-fuss">
                <a href='#home'>HOME</a>
                <a href='#resume' >RESUME</a>
                <a href='#work' >WORK SAMPLES</a>
            </div>
        </div>
        <div className="Linke-Seite">
          <div className="Footer">
            <div className="Icons">
             
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;