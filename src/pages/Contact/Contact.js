import './style.css';
import ArrowUp from '../../assets/icons/arrow-up.png';
import QR from '../../assets/JorgReskeQR.png';

export default function Contact() {
    return (
        <div id="contact">
            <h1>Contact</h1>
            <div className="center">
                <div className="left">
                    <h2 className="name">Jörg Bernhard</h2>
                    <h2 className="number">My Mobile Phone: +55 (84) 99968-5830</h2>
                    <a className="email" href="mailto:jorg.reske@gmail.com" alt="email">My Email: jorg.reske@gmail.com</a>
                    <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="portfolio">My Github: https://github.com/JorgBernhard</a>
                    <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked">My LinkedIn: https://www.linkedin.com/in/jorg-reske-b327699b/</a>
                </div> 
                <div className="right"> 
                    <h4 className="data-info-2">My Contact QR Code</h4>
                    <img className="QRCode-2" src={QR} alt="up" />
                </div>
            </div>    
                <div className="ende">
                    <a className="feil" href="# "><img src={ArrowUp} alt="up" /></a>
                </div>
        </div>
    );
}