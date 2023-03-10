import English from '../../assets/CV Jorg Reske.pdf';

import './home.css';

function Home() {
  return (
    <div id="home">
    <div className="Home">
      <div className='HomeContainer'>
        <div className="HomeData">
          <h3 className='Welcome'>Hi, My name is Jörg Bernhard</h3>
          <h3 className='Job'>I'm Manager</h3>

        </div>
          
        <div className="HomeLinks">
        <a className="Mail" href='mailto:jorg.reske@gmail.com'>Email</a>  
        <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp">Whats</a> 
        <a className="Resume" href={English} download="English">Resume</a>
        <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git">Github</a> 
        <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked">LinkedIn</a>
            
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
