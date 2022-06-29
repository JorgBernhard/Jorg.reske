import './styles.css';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import QR from '../../assets/JorgReskeQR.png';
import Mapa from '../../assets/mapa-natal.png'


export default function Contacts() {
    return (
        <div id="contacts">
            <h1>Contacts</h1>
            <div className="center">
                <div className="left">
                    <h2 className="name">Jörg Bernhard</h2>
                    <h2 className="beruf">UX / UI Designer</h2>
                    <h2 className="number">My handy: +55 (84) 99968-5830</h2>
                    
                    <a className="email" href="mailto:jorg.reske@gmail.com" alt="email">My Email: jorg.reske@gmail.com</a>
                    <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="portfolio">Github</a>
                    <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked">LinkedIn</a>
                </div> 
                <div className="mitte">
                <h3 className="free">Freelance jobs YES</h3> 
                <img className="mapa" src={Mapa} alt="mapa-natal" />
                </div>
                <div className="right"> 
                    <h4 className="data-info">My Contact Data</h4>
                    <img className="QRCode" src={QR} alt="up" />
                </div>
            </div>    
                <div className="ende">
                    <a className="feil" href="# "><img src={ArrowUp} alt="up" /></a>
                </div>
        </div>
    );
}