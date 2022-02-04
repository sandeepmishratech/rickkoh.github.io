import React, {useState} from 'react';
import { Link } from 'gatsby';

import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
            <nav class='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-bars rotate-down' : 'fas fa-bars rotate-back'}>
                            Test
                        </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/home" onClick={closeMobileMenu} className='nav-links'>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/blog" onClick={closeMobileMenu} className='nav-links'>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/blog/test" onClick={closeMobileMenu} className='nav-links'>
                                Test
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" onClick={closeMobileMenu} className='nav-links'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar