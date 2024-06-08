import React, { useState } from 'react';
import { Link, } from 'react-router-dom'; 
import '../CSS/style.css'; 
import logjap from '../img/logjap.webp';
import chef from '../img/chef.jpg';

function About() {
 
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
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recipe">Recipe</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <button className={`nav-btn-mobile ${showMenu ? 'hide' : ''}`} onClick={toggleMenu}>
            {showMenu ? 'Close' : 'Menu'}
          </button>
        </nav>
        <h1>About us</h1>
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Taste of Japan</h1>
            <p>People all over the world connect through their love of food and, within Japanese food culture, particular phrases are used to communicate the desire, gratitude, and satisfaction involved in eating. Politeness is a key part of all food cultures, and knowing when and why different phrases of thanks are used will let you pay the correct respects to the chef. Whether you’re about to dig into some sushi or just want to express how delicious your meal is, get to know these foodie phrases and put them to good use next time you tuck into some Japanese cuisine.</p>
            <Link to="/" className="hero-btn red-btn">Explore Now</Link> {/* Use Link instead of a */}
          </div>
          <div className="about-col">
            <img src={chef} alt='Chef'></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

