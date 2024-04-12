// import { Link } from 'react-scroll';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState, useEffect } from 'react';


// function NavBar() {

//     const [showMenu, setShowMenu] = useState(false);
//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };
//     const closeMenu = () => {
//         setShowMenu(false);
//     };

//     return (
//         <div>

//             <header id='LinkHome'>
//                 <div className="logoTipo">
//                     LogoTipo
//                 </div>

//                 <nav className="navDesktop">
//                     <i onClick={toggleMenu} className='navMobile'><FontAwesomeIcon icon={faBars} /></i>
//                     <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
//                         <Link duration={500} offset={0} to='LinkMain' smooth={true} onClick={closeMenu}>
//                             <li><a href="#">Home</a></li>
//                         </Link>

//                         <Link duration={500} offset={-20} to='LinkQualidade' smooth={true} onClick={closeMenu}>
//                             <li><a href="">Qualidade</a></li>
//                         </Link>

//                         <Link duration={500} offset={-10} to='LinkAmbientes' smooth={true} onClick={closeMenu}>
//                             <li><a href="">Ambientes</a></li>
//                         </Link>

//                         <Link duration={500} offset={70} to='LinkAbout' smooth={true} onClick={closeMenu}>
//                             <li><a href="">Quem Somos</a></li>
//                         </Link>

//                         <Link duration={500} offset={70} to='LinkContato' smooth={true} onClick={closeMenu}>
//                             <li><a className='btnNav' href="">Contato</a></li>
//                         </Link>
//                     </ul>
//                 </nav>
//             </header>

//         </div>
//     )
// }

// export default NavBar

import { Link } from 'react-scroll';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 90; // ajuste necessário, pode variar dependendo do layout do seu site
            let currentSec = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSec = section.id;
                }
            });

            setCurrentSection(currentSec);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            <li><a className={currentSection === 'LinkMain' ? 'active' : ''} href="#">Home</a></li>
                        </Link>

                        <Link duration={500} offset={-20} to='LinkQualidade' smooth={true} onClick={closeMenu}>
                            <li><a className={currentSection === 'LinkQualidade' ? 'active' : ''} href="">Qualidade</a></li>
                        </Link>

                        <Link duration={500} offset={-10} to='LinkAmbientes' smooth={true} onClick={closeMenu}>
                            <li><a className={currentSection === 'LinkAmbientes' ? 'active' : ''} href="">Ambientes</a></li>
                        </Link>

                        <Link duration={500} offset={70} to='LinkAbout' smooth={true} onClick={closeMenu}>
                            <li><a className={currentSection === 'LinkAbout' ? 'active' : ''} href="">Quem Somos</a></li>
                        </Link>

                        <Link duration={500} offset={70} to='LinkContato' smooth={true} onClick={closeMenu}>
                            <li className={currentSection === 'LinkContato' ? 'active' : ''}><a className='btnNav' href="">Contato</a></li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;