import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css'; 
import logjap from '../img/logjap.webp';

function ContactUs() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <section className="sub-header">
                <nav>
                    <Link to="/"><img src={logjap} alt="logo" width="50px" height="50px" /></Link>
                    <div className={`nav-links ${showMenu ? 'show-drawer' : ''}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Recipe">Recipes</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <button className={`nav-btn-mobile ${showMenu ? 'hide' : ''}`} onClick={toggleMenu}>
                        {showMenu ? 'Close' : 'Menu'}
                    </button>
                </nav>
            </section>

            <section id="contact-menu" className="contact-section">
                <div className="contact-container">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-left"
                        id="contactForm"
                    >
                        <div className="contact-title">
                            <h2>CONTACT US</h2>
                            <hr />
                            <p>We would like to hear your message for us</p>
                        </div>
                        <input
                            type="hidden"
                            name="access_key"
                            value="bdc5c5cb-aae5-4c56-aa33-3ce007a3da05"
                        />
                        <input
                            type="text"
                            name="Name"
                            placeholder="Enter your Name"
                            className="contact-inputs"
                            id="name"
                        />
                        <div id="nameError" className="error"></div>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter your Email"
                            className="contact-inputs"
                            id="email"
                        />
                        <div id="emailError" className="error"></div>
                        <textarea
                            name="message"
                            placeholder="Enter your Message for us"
                            className="contact-inputs"
                            id="message"
                        ></textarea>
                        <div id="messageError" className="error"></div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;

