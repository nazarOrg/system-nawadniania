import React, { useRef } from 'react';
import '../styles/NavBar.css';
import water from '../assets/water.png';

export const NavBar = ({ hideNavbar }) => {

    const section0Ref = useRef(null);

    /* function goToSection(sectionId) {
        let section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: 'smooth' });
    } */

    return(
        <div className="navbar" /* style={{ display: hideNavbar ? 'none' : 'flex' }} */ ref={section0Ref} id='section0' >
            <div className="left-section">
                <a href='#'>
                    <img src={water} alt="logo" className='logo' />
                </a>
            </div>
            <div className="middle-section">
                <a href='#section1'>Balkony & Tarasy</a>
                <a href='#section2'>Grządki</a>
                <a href='#section3'>Żywopłoty</a>
                <a href='#section4'>Trawnik</a>
                <a href='#section5'>Instalacja wodna pod ziemią</a>
            </div>
            <div className="right-section">
                <i className="bi bi-search"></i>
                <i className="bi bi-heart"></i>
                <i className="bi bi-cart"></i>
            </div>
        </div>
    )
}