import './styles.css';
import WayIconWhite from '../../assets/w4y-white.png'
import WayIconBlack from '../../assets/w4y.png'

function Main() {
  return (
    <div id="main">
      <div className='left-side'>
        <div className='main-left'>
          <h1>You need it</h1>
        </div>
      </div>

      <div className='right-side'>
        <div className='header'>
          <a href='# '>Home</a>
          <a href='#about-us' >About Us</a>
          <a href='#ourteam' >Our Team</a>
          <a href='#projects' >Projects</a>
          <a href='#contacts' >Contacts</a>
        </div>

        <div className='main-right'>
          <h1>We build it</h1>
        </div>
        {window.screen.width > 800 &&  <img className='logo' alt='logo' src={WayIconWhite} /> }

        {window.screen.width < 800 &&  <img className='logo' alt='logo' src={WayIconBlack} /> }
       
      </div>
    </div>
  );
}

export default Main;
