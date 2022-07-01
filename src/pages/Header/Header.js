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
                        <a href='#main'>Home</a>
                        <a href='#wall' >My Wall</a>
                        <a href='#projects' >My Projects</a>
                        <a href='#contact' >My Contact</a>
                </ul>
            </nav>
        </>
    );
}
