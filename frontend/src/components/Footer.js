import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="logo">LOGO</h3>
                <p>
                    Experience the fusion of innovation and comfort with our company, where every booking is the beginning of an unforgettable journey.
                </p>
                <div className="icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="footer-content">
                <h4>Projects</h4>
                <ul>
                    <li><a href="#">Houses</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Apartments</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">How we work</a></li>
                    <li><a href="#">Capital</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Sellings</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h4>Movement</h4>
                <ul>
                    <li><a href="#">Movement</a></li>
                    <li><a href="#">Support Us</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Renting</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h4>Help</h4>
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Condition</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
