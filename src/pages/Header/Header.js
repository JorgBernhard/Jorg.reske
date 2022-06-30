import './style.css';
import MenuIcon from '../../assets/icons/menu.png';
import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='nav-icon'>
                <img src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <span onClick={handleSidebar}>x</span>
                <ul className='nav-menu-items' onClick={handleSidebar}>

                    <li>
                        <a href='#main'>Home</a>
                    </li>
                    <li>
                        <a href='#wall' >My Wall</a>
                    </li>
                    <li>
                        <a href='#projects' >My Projects</a>
                    </li>
                    <li>
                        <a href='#contact' >My Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
