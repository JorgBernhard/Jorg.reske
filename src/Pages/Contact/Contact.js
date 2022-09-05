import './style-contact.css';
import Logo from '../../assets/logo.png';
import Page from '../../assets/old-page.png';
import QR from '../../assets/QR.png';
import Linked from '../../assets/linkedin.png';
import Github from '../../assets/github.png';

function Contact() {

  return (
    <div id="contact">
    <div className="Container-contact">
      <h3 className="Contact">My contact information</h3>
      <div className="Art">
      <img src={Logo} className="App-logo-contact" alt="logo" />
      <img src={Page} className="Page" alt="old-page" />
      <img src={QR} className="QR" alt="QR" />
      </div>
      <div className="logos">
                      <div className="Git">
                          <img src={Github} alt="git" />
                          <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="git">My Github: https://github.com/JorgBernhard</a><br></br>
                      </div>
                      <div className="Link">
                          <img src={Linked} alt="linked" />
                          <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked">My LinkedIn: https://www.linkedin.com/in/jorg-reske-b327699b/</a>
                      </div>
                  </div>
     </div>
    </div>
  );
}

export default Contact;
