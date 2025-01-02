import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

// stickyHeader.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 90) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


const Header = () => {
    return (
        <header className="header">
            <div className="logo">LOGO</div>
            <nav id="navbar">
                <ul className='nav-list'>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About Us</Link></li>
                    <li><Link to="/buying" className='nav-link'>Buying</Link></li>
                    <li><Link to="/selling" className='nav-link'>Selling</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
