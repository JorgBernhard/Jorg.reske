import './style.css';
import QR from '../../assets/JorgReskeQR.png';
import Git from '../../assets/icons/github-blue.png';
import Linked from '../../assets/icons/linkedin-blue.png';

export default function Contact() {
    return (
        <div id="contact">
            <h1>Contact</h1>
            <div className="center">
                <div className="left">
                    <h2 className="name">Jörg Bernhard</h2>
                    <p>Lets get in touch and talk about your next project.</p>
                    <h2 className="number">My Mobile Phone: +55 (84) 99968-5830</h2>
                    <a className="send-email" href="mailto:jorg.reske@gmail.com" alt="email">My Email: jorg.reske@gmail.com</a>
                    <p>Please feel free to get in touch with me.<br></br>
                        I'm happe to answer to you as soon as possible.<br></br><br></br>
                        Thank you for your interesst.

                    </p>
                </div> 
                <div className="right"> 
                    <h4 className="data-info-2">My Contact QR Code</h4>
                    <img className="QRCode-2" src={QR} alt="up" />
                    <div className="links-contact">
                    <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="git"><img src={Git} alt="git" /></a>
                    <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked"><img src={Linked} alt="linked" /></a>
                    </div>
                    </div>    
                </div>
              
        </div>
    );
}