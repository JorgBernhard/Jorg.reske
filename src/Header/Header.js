import './style.css';
import MenuIcon from '../assets/icons/menu-gray-x.png';
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
                    <span onClick={handleSidebar}></span>
                <div className='nav-menu-items' onClick={handleSidebar}>
                    <div className="right-header">
                      
                    </div>
                    <div className="links-header">
                        <a href='#main'>Home</a>
                        <a href='#portfolio' >Portfolio</a>
                        <a href='#projects' >Projects</a>
                        <a href='#contact' >Contact</a>
                    </div>
                </div>
            </nav>
            
        </>
    );
}
