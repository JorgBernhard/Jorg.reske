import QR from '../../assets/JorgReskeQR.png';
import './style.css';
function Main() {
  return (
    <div id="main">
     <header className="main-header"></header>
      <div className='center1'>
       
        <div className="schrift">
          <h2 className="nome">Jörg Bernhard</h2>
          <h3 className="job">UX UI Designer</h3>
          <h3 className="job2">Front-End Developer</h3>
          <h3 className="job3">Back-End Programmer</h3>
        </div>
        <div className="right"> 
            <img className="QRCode" src={QR} alt="up" />
        </div>
      </div>
    </div>
  );
}

export default Main;