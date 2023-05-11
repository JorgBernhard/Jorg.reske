import Whats from '../assets/whatsapp.png';
import Git from '../assets/github.png';
import Linked from '../assets/linkedin.png';
import Email from '../assets/contact-us.png';
import Avatar from '../assets/Eu.png';
import Agile from '../assets/Agile.png';
import Doc from '../assets/DocMix.png';
import CardI from '../assets/Amarals.png';
import CardII from '../assets/Acera.png';
import CardIII from '../assets/Condo.png';
import Resume from '../assets/Jorg Reske Resume.pdf';

import Acera from '../assets/clientes/acera.png';
import Bmg from '../assets/clientes/bmg.png';
import Dewi from '../assets/clientes/dewi.png';
import Epe from '../assets/clientes/epe.png';
import Fuhrlaender from '../assets/clientes/fuhrlaender.png';
import Kfw from '../assets/clientes/kfw.png';
import Natural from '../assets/clientes/natural power.png';
import Siah from '../assets/clientes/Siah.png';
import Siemens from '../assets/clientes/Simens.png';
import Vestas from '../assets/clientes/vestas.png';
import Windex from '../assets/clientes/windex.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Kopf">
        <h3 className="Portf">Portfolio</h3>
        <div className="Links">
              <a href='mailto:jorg.reske@gmail.com'><img className="Mail" src={Email} alt="email"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="whats"><img className="Whats" src={Whats} alt="Whats"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="github"><img className="Git" src={Git} alt="git"></img></a>
              <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked"></img></a>
        </div>
      </div>
      <div className="Container">
          <div className="LinkeSeite">
            <div className='ConteudoLinks'>
                <img className="Avatar" src={Avatar} alt="avatar" />
                <img className="Doc" src={Doc} alt="doc" />
                <div className="Texto">
                  <h2 className="Header">Ola, sou Jörg Bernhard</h2>
                  <h2 className="Profissao">UX / UI DESIGNER</h2>
                </div>
            </div>
            <div className='ConteudoLinksII'>
                <h2 className="Portfolio">Informação geral</h2>
                <h3 className="TextoGeral">Bem vindo a meu portfolio, sou Jörg Bernhard e estou imigrando 
                para UX/UI Designer com uma vasta experiência de mais de 12 anos no mercado. Ja criei mais de 
                100 páginas de internet, logos de empresas, banner e documentações de projetos durante minha 
                carreira. <br></br>No meio da minha vida profissional foi direcionado a ser Gerente de Projetos,
                Design, Geral, Informática e Marketing, +8 anos no total, mais agora estou voltando para o 
                design. </h3>
              <h2 className="Projetos">Alguns trabalhos feitos</h2>
              <div className="Cards">
                <img className="CardI" src={CardI} alt="cardI" />
                <img className="CardII" src={CardII} alt="cardII" />
                <img className="CardIII" src={CardIII} alt="cardIII" />
              </div>
            </div>
            <div className='ConteudoLinksIII'>
              <h1 className='UsBodenText'>Alguns Clientes.</h1>
             <div className='UsBodenImages'>
                <img className='UsClients' src={Acera} alt="acera" />
                <img className='UsClients' src={Bmg} alt="bmg" />
                <img  className='UsClients' src={Dewi} alt="Dewi" />
                <img  className='UsClients' src={Epe} alt="Epe" />
                <img  className='UsClients' src={Fuhrlaender} alt="Fuhrlaender" />
                <img  className='UsClients' src={Kfw} alt="Kfw" />
                <img  className='UsClients' src={Natural} alt="natural" />
                <img  className='UsClients' src={Siah} alt="Siah" />
                <img  className='UsClients' src={Siemens} alt="Siemens" />
                <img  className='UsClients' src={Vestas} alt="Vestas" />
                <img  className='UsClients' src={Windex} alt="Windex" />
              </div>
            </div>
          </div>
        <div className='RechteSeite'>
            <div className='ConteudoRechts'>
              <h2 className="Head">Soft-skills: importantes <br></br>e necessárias</h2>
              <h4 className="Skillset">
                Paixão<br></br>
                Mente aberta<br></br>
                Compreensão<br></br>
                Colaboração<br></br>
                Empatia<br></br>
                Interesse<br></br>
                Vontade de areender<br></br>
                Auto-controle<br></br>
                Solucionar problemas<br></br>
                Pensamento analitico<br></br>
                Ensinamento<br></br>
                Metodologia Agile
              </h4>
              <img className="Agile" src={Agile} alt="agile" />
            </div>  
            <div className='ConteudoRechtsII'>
                <h2 className="Languages">Comunicação</h2>
                <h4 className="Linguas">
                  Alemão - nativo<br></br>
                  Inglês - quase nativo<br></br>
                  Português - nativo<br></br>
                  Espanhol - básico<br></br>
                </h4>
            </div>
            <div className='ConteudoRechtsIII'>
                <h2 className="ResumePort">Baixar meu Resume <br></br>em Portugês</h2>
                <a className="Resume" href={Resume} download="Resume">Resume</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
