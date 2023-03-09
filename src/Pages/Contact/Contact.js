import Jorg from '../../assets/Jorg.png';
import Fim from '../../assets/fim2.png'
import './contact.css';

function Contact() {
  return (
    <div id='contact'>
      <div className="Contact">
        <div className="ContactContainer">
          <h3 className="Thanks">Thank's a lot.</h3>
          <h3 className="Please">Here my adress information, feel free to contact me.</h3>
          <div className="Divi">
          <h3 className="ContactInfo">
            Jörg Bernhard Reske<br></br>
            Rua Lagoa Nove, 124 - Bloco B 402<br></br>
            Cep: 59152-655<br></br>
            Nova Parnamirim - Natal - Brasil<br></br><br></br>
            Phone: +55 (84) 99968-5830 / Whatsapp & Telegram<br></br>
            Email: jorg.reske@gmail.com<br></br>
          </h3>
          <img className="Foto" src={Jorg} alt="jorg" />
          </div>
          <div className="RegularFim">
          <img className="Fim" src={Fim} alt="fim" />
          <h5 className="Line">W4Y Design - All rights reserved ® - w4ysolutions@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
