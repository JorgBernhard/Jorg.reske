import '../css/portugues.css';
import Jorg from '../assets/jorg.png';
import Agile from '../assets/Agile.png';
import Amarals from '../assets/Amarals.png';
import Acera from '../assets/Acera.png';
import Condo from '../assets/Condo.png';


import Acerac from '../assets/clientes/acerac.png';
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

import Resume from '../assets/Jorg Reske Resume.pdf';

const Portugues = () => {
    return <>
    <div className="Portugues">
       <div className="PortuguesContainer">
       <div className="LeftContainer">
       <img className='PortJorg' src={Jorg} alt="jorg"></img>
            <div className="PortText">
               <h2 className='PortName'>Jörg Bernhard</h2>
               <h2 className='PortWork'>Gerente</h2>
               <h2 className='PortWorkI'>Geral / Producto / Logística</h2>
               <h2 className='PortWorkII'>UX/UI Designer</h2>
               <h2 className='PortWorkIII'>Desenvolvedor JavaScript</h2>
               <h2 className='PortWorkIV'>Front-End / Back-End</h2>
            </div>
         </div>
         <div className="RightContainer">
         <div className="EngResumePo">
         <a className="Resume" href={Resume} download="Resume">Download my Resume</a>
         </div>
            <h3 className="PortBem">Bem Vindo ao meu Portfolio</h3>
            <h4 className="PortText-Right">Obrigado pelo Interesse. <br></br> <br></br>
            Eu trabalho diretamente para uma empresa ou como consultor, organizando e reestruturando áreas e seções dela, obtendo um nível de eficiência maior e mais ágil. Tenho de 8 a 10 anos de experiência atuando em várias empresas e segmentos. <br></br><br></br>
Durante os anos, aprendi que não importa a elegância das pessoas se o lugar está no último andar. Sua equipe precisa acreditar em você, e eles precisam receber respeito e confiança para fazer o trabalho deles. <br></br><br></br>
Claro, como todos os projetos, de certa forma alinhados a uma linha do tempo, você precisa pressionar no momento certo e também fazer elogios. Gerenciamento é uma espada de dois lados. Pense sobre isso...
             </h4>
            <div className="PortSecond">
            <img className='PortAgile' src={Agile} alt="agile"></img>
            <h4 className="PortText-Agile">Você precisa Skills e uma otima organização.
            Planejamento (Time Planer), Agile Methodologies são muito importante.
            <br></br> <br></br> 
            Softskills são obrigação.
            </h4>
            </div>
         </div>
       </div>
         <div className="PortBodenContainer">
            <h3 className="PortDesign">UX/UI Design</h3>
            <h4 className="PortText-Design">
             
Nos últimos 2 decênios, tenho criado web design, logotipos empresariais e arte em geral. Tudo começou em 1990, quando fui chamado para projetar um logotipo para uma empresa de logística e ninguém conseguia criar o novo logo. Então, participei de um seminário de fim de semana em design (com Photoshop, Adobe Flash, entre outros) e comecei a criar. Mais tarde, fiz um curso e me tornei professor no assunto. <br></br> <br></br>
Atualmente, tenho mais de cem páginas da web, banners e logotipos criados.
            </h4>
            <h4 className="PortSome-Design">
               Ultimos trabalhos do meu design.
            </h4>
            <div className="PortCards">
            <img className='Amarals' src={Amarals} alt="Amarals"></img>
            <img className='Condo' src={Condo} alt="Condo"></img>
            <img className='Acera' src={Acera} alt="Acera"></img>
            </div>
            <h3 className="PortClient">Alguns dos meus Clientes.</h3>
               <div className='UsBodenImages'>
                <img className='UsClients' src={Acerac} alt="acera" />
                <img className='UsClients' src={Bmg} alt="bmg" />
                <img  className='UsClients' src={Dewi} alt="Dewi" />
                <img  className='UsClients' src={Epe} alt="Epe" />
                <img  className='UsClients' src={Fuhrlaender} alt="Fuhrlaender" />
                <img  className='UsClients' src={Kfw} alt="Kfw" />
              </div>
              <div className='UsBodenImagesII'>
                <img  className='UsClientsII' src={Natural} alt="natural" />
                <img  className='UsClientsII' src={Siah} alt="Siah" />
                <img  className='UsClientsII' src={Siemens} alt="Siemens" />
                <img  className='UsClientsII' src={Vestas} alt="Vestas" />
                <img  className='UsClientsII' src={Windex} alt="Windex" />
              </div>
         </div>
         </div>
    </>
  };
  
  export default Portugues;