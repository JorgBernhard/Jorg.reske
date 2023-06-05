import '../css/main.css';
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

const Main = () => {
    return <>
    <div className="Main">
       <div className="MainContainer">
         <div className="LeftContainer">
            <img className='Jorg' src={Jorg} alt="jorg"></img>
            <div className="Text">
               <h2 className='Name'>Jörg Bernhard</h2>
               <h2 className='Work'>Manager</h2>
               <h2 className='WorkI'>General / Product / Logistic</h2>
               <h2 className='WorkII'>UX/UI Designer</h2>
               <h2 className='WorkIII'>Developer JavaScript</h2>
               <h2 className='WorkIV'>Front-End / Back-End</h2>
            </div>
         </div>
         <div className="RightContainer">
            <div className="EngResumePo">
         <a className="Resume" href={Resume} download="Resume">Download my Resume</a>
         </div>
            <h3 className="Bem">Welcome to my Portfolio</h3>
            <h4 className="Text-Right">Thank you for your interest. <br></br> <br></br>
            I work directly for a company or as a consultant to organize and restructure areas and sections of a company for increased efficiency and speed. I have about 8 to 10 years of experience in management across several companies. <br></br><br></br>
Over the years, I've learned that it doesn't matter what the dress code is or whether the room is elegant or not. Your team needs to believe in you, and you must give them the trust and space they deserve to do their jobs. <br></br><br></br>
Of course, since all projects have defined timelines, you have to apply pressure and stay strong, but only when necessary to prevent delays. Leadership is a double-edged sword. Think about it...
            </h4>
            <div className="Second">
            <img className='Agile' src={Agile} alt="agile"></img>
            <h4 className="Text-Agile">You need Skills and very good organsation
            ideas. Planing like TimePlaner, Agile Methodologies are perfect. 
            Softskills are must.
            </h4>
            </div>
         </div>
       </div>
         <div className="BodenContainer">
            <h3 className="Design">UX/UI Design</h3>
            <h4 className="Text-Design">
            Over the past two decades, I have been creating web design, company logos, and art in general. It all started in 1990 when I was approached by a logistics company to design a warehouse, and no one was able to create a new logo. So, I attended a weekend design seminar (covering tools like Photoshop, Adobe Flash, and more) and began my creative journey. Later on, I pursued further education and became a teacher in this field. <br></br><br></br>
Today, I have created over a hundred web pages, banners, and logos.
            </h4>
            <h4 className="Some-Design">
               Here some of my design.
            </h4>
            <div className="Cards">
            <img className='Amarals' src={Amarals} alt="Amarals"></img>
            <img className='Condo' src={Condo} alt="Condo"></img>
            <img className='Acera' src={Acera} alt="Acera"></img>
            </div>
            <h3 className="EngClient">Some of my Clients.</h3>
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
  
  export default Main;