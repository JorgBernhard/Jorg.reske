import './Home-style.css';

function Home() {
  return (
    <div id='home'>
    <div className="Home-Container">
      <div className="Linke-Seite">
        <h3 className="Welcome">Welcome to my Portfolio</h3>
        <h3 className="Goals">My Manager Goals</h3>
        <h4 className="PM-text">As a product manager, my job is to figure out what people need and 
        deliver it to them. To do that successfully, we need to be involved in all aspects of the 
        development process, doing things as diverse as facilitating vision and scope definition 
        to designing user manuals to understanding an engineering requirement and explaining it to a 
        non-technical audience.<br></br>I help Companies around the globe to find their path
        to solving user problems while contributing to bussiness goals that matter.<br></br><br></br>
        Being a source of truth requires a diverse combination of soft-skills and hardskills, the 
        understanding of the business reason, to be able to create a product, visiond by the development 
        community, receiving user information, envolving UX UI Designer and achieving a scope, 
        with garanty of quality.<br></br><br></br> Well yes, thats my job.
        </h4>
        <h3 className="Contact">Contact:</h3>
        <div className="info">
        <h5 className="Celular">(5584) 99968-5830 </h5>
        <a className="email" href="mailto:jorg.reske@gmail.com" alt="email">jorg.reske@gmail.com</a>
        <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked">LinkedIn</a>
      </div>
      <div className="Home-line"></div>
      </div>
     </div>
    </div>
  );
}

export default Home;
