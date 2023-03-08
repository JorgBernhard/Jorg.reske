import Me from '../../assets/Eu.png';

import English from '../../assets/CV Jorg Reske.pdf';

import './home.css';

function Home() {
  return (
    <div id='home'>
    <div className="Home">
      <div className="HomeContainer">
        <div className="Container">
          <img className="Me" src={Me} alt="me" />
          <h3 className="Jorg">Hi, I'm Jörg Bernhard</h3>
          <h3 className="Cabeca">I'm Project Manager</h3>
        </div>
        <div className="Respons">
          <h3 className="ResponsText">Manager responsibilities are 
          enormoues!</h3>
          <h5 className="ResponsText2">Wana see more, just click</h5>
        <div className="HomeLinks">
        <a className="WorkButtom" href="#work">Manager Responsibilities</a>
        <a className="Mail" href='mailto:jorg.reske@gmail.com'>Send me a email</a>  
        <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp">Whatsapp Comunication</a> 
        <a className="English-Resume" href={English} download="English">Download Resume PDF</a>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
