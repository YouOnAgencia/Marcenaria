import { Link } from 'react-scroll';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';


function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenu = () => {
        setShowMenu(false);
    };


    return (
        <div>

            <header id='LinkHome'>
                <div className="logoTipo">
                    LogoTipo
                </div>

                <nav className="navDesktop">
                    <i onClick={toggleMenu} className='navMobile'><FontAwesomeIcon icon={faBars} /></i>
                    <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
                        <Link duration={500} offset={0} to='LinkMain' smooth={true} onClick={closeMenu}>
                            <li><a href="#">Home</a></li>
                        </Link>

                        <Link duration={500} offset={-20} to='LinkQualidade' smooth={true} onClick={closeMenu}>
                            <li><a href="">Qualidade</a></li>
                        </Link>

                        <Link duration={500} offset={-10} to='LinkAmbientes' smooth={true} onClick={closeMenu}>
                            <li><a href="">Ambientes</a></li>
                        </Link>

                        <Link duration={500} offset={70} to='LinkAbout' smooth={true} onClick={closeMenu}>
                            <li><a href="">Quem Somos</a></li>
                        </Link>

                        <Link duration={500} offset={70} to='LinkContato' smooth={true} onClick={closeMenu}>
                            <li><a className='btnNav' href="">Contato</a></li>
                        </Link>
                    </ul>
                </nav>

            </header>


        </div>
    )
}

export default NavBar