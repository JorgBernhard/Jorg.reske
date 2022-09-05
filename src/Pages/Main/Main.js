import './style-main.css';
import Logo from '../../assets/logo-circle.png';
import Center from '../../assets/center.png';

function Main() {
  return (
    <div id="main">
    <div className="Container-main">
    <img src={Logo} className="MyLogo" alt="logo" />
    <img src={Center} className="Center" alt="center" />
      <h3 className="Arte">Magic & Design</h3>
      <h3 className="Jorg">Jörg Bernhard</h3>
      </div>
    </div>
  );
}

export default Main;
