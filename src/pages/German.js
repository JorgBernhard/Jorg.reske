import '../css/german.css';
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

import Resume from '../assets/JBR PM eng.pdf';

const German = () => {
    return <>
    <div className="German">
       <div className="GermanContainer">
         <div className="LeftContainer">
            <img className='GJorg' src={Jorg} alt="jorg"></img>
            <div className="GText">
               <h2 className='GName'>Jörg Bernhard</h2>
               <h2 className='GWork'>Geschäftsführer</h2>
               <h2 className='GWorkI'>Firmen / Produkt / Transport</h2>
               <h2 className='GWorkII'>UX/UI Designer</h2>
               <h2 className='GWorkIII'>Programmierer JavaScript</h2>
               <h2 className='GWorkIV'>Front-End / Back-End</h2>
            </div>
         </div>
         <div className="GRightContainer">
            <div className="EngResume">
         <a className="Resume" href={Resume} download="Resume">Lebenslauf auf English runterladen</a>
         </div>
            <h3 className="GBem">Wilkommen zu meinem Portfolio</h3>
            <h4 className="GText-Right">Vielen Dank fürs Interesse. <br></br> <br></br>
            Ich arbeite entweder direkt für ein Unternehmen oder als Berater, um Bereiche 
            und Abteilungen eines Unternehmens für eine gesteigerte Effizienz und 
            Geschwindigkeit zu organisieren und umzustrukturieren. Ich habe etwa 8 bis 
            10 Jahre Erfahrung im Management in verschiedenen Unternehmen. <br></br> <br></br>
            Im Laufe der Jahre habe ich gelernt, dass es nicht darauf ankommt, wie der 
            Dresscode ist oder ob der Raum elegant ist oder nicht. Ihr Team muss an Sie 
            glauben, und Sie müssen ihnen das Vertrauen und den Raum geben, den sie 
            verdienen, um ihre Aufgaben zu erledigen. <br></br> <br></br>
            Natürlich müssen Sie, da alle Projekte definierte Zeiträume haben, Druck 
            ausüben und standhaft bleiben, aber nur, wenn es notwendig ist, um 
            Verzögerungen zu verhindern. Führung ist ein zweischneidiges Schwert. 
            Denken Sie darüber nach...</h4>
            <div className="GSecond">
            <img className='GAgile' src={Agile} alt="agile"></img>
            <h4 className="GText-Agile">Sie benötigen Fähigkeiten und eine sehr gute 
            Organisation, umsetzbare Ideen zu haben. Planungstools wie TimePlanner und 
            Agile Methodologien sind perfekt.<br></br><br></br>  Softskills sind ein Muss.
            </h4>
            </div>
         </div>
       </div>
         <div className="GBodenContainer">
            <h3 className="GDesign">UX/UI Design</h3>
            <h4 className="GText-Design">
            In den letzten zwei Jahrzehnten habe ich Webdesign, Firmenlogos und Kunst im 
            Allgemeinen erstellt. Alles begann im Jahr 1990, als mich ein 
            Logistikunternehmen bat, ein Lager zu entwerfen, und niemand in der Lage war, 
            ein neues Logo zu erstellen. Also nahm ich an einem Designseminar am 
            Wochenende teil (mit Schwerpunkt auf Tools wie Photoshop, Adobe Flash und 
            mehr) und begann meine kreative Reise. Später habe ich mich weitergebildet 
            und bin in diesem Bereich auch als Lehrer tätig geworden.<br></br> <br></br>
            Heute habe ich über hundert Webseiten, Banner und Logos erstellt.
            </h4>
            <h4 className="GSome-Design">
               Hir einige meiner Arbeiten.
            </h4>
            <div className="GCards">
            <img className='Amarals' src={Amarals} alt="Amarals"></img>
            <img className='Condo' src={Condo} alt="Condo"></img>
            <img className='Acera' src={Acera} alt="Acera"></img>
            </div>
            <h3 className="GClient">Einige Kunden.</h3>
            <div className='GBodenImages'>
                <img className='GClients' src={Acerac} alt="acera" />
                <img className='GClients' src={Bmg} alt="bmg" />
                <img  className='GClients' src={Dewi} alt="Dewi" />
                <img  className='GClients' src={Epe} alt="Epe" />
                <img  className='GClients' src={Fuhrlaender} alt="Fuhrlaender" />
                <img  className='GClients' src={Kfw} alt="Kfw" />
              </div>
              <div className='GBodenImagesII'>
                <img  className='GClientsII' src={Natural} alt="natural" />
                <img  className='GClientsII' src={Siah} alt="Siah" />
                <img  className='GClientsII' src={Siemens} alt="Siemens" />
                <img  className='GClientsII' src={Vestas} alt="Vestas" />
                <img  className='GClientsII' src={Windex} alt="Windex" />
              </div>
         </div>
    </div>
    </>
  };
  
  export default German;