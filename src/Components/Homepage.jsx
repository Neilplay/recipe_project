import React, { useState } from 'react';
import { Link, } from 'react-router-dom'; 
import '../CSS/style.css'; // Assuming the CSS file is in the CSS folder relative to this component
import logjap from '../img/logjap.webp';
import ramen from '../img/ramen.webp';
import sushi from '../img/sushi.webp';
import bento from '../img/bento.webp';
import katsu from '../img/katsu.webp';
import tako from '../img/tako.webp';
import dango from '../img/dango.webp';


const Homepage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <header className="header">
        <nav>
          <a href="/">
            <img src={logjap} alt="Logo" width="50px" height="50px" />
          </a>
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
        <section className="text-box">
          <h1>The Taste of Japan</h1>
        </section>
      </header>

      <section className="Body">
        <h1>Seasonal Foods</h1>
        <p>For the season of SPRING</p>
        <div className="row">
          <div className="Body-col">
            <img src={ramen} alt="Ramen" />
            <div className="layer">
              <h3>Ramen</h3>
            </div>
          </div>
          <div className="Body-col">
            <img src={sushi} alt="Sushi" />
            <div className="layer">
              <h3>Sushi</h3>
            </div>
          </div>
          <div className="Body-col">
            <img src={bento} alt="Bento" />
            <div className="layer">
              <h3>Bento</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="Food">
        <h1>Food of the Week</h1>
        <p>Magazine <br /> Highlight</p>
        <div className="row">
          <div className="Food-Col">
            <img src={katsu} alt="Tonkatsu" />
            <h3>Tonkatsu <br /> Main Dish</h3>
          </div>
          <div className="Food-Col">
            <img src={tako} alt="Takoyaki" />
            <h3>Takoyaki <br /> Snack </h3>
          </div>
          <div className="Food-Col">
            <img src={dango} alt="Dango" />
            <h3>Dango <br /> Dessert</h3>
          </div>
        </div>
      </section>

      <section className="footer">
        <h4>About my Website</h4>
        <p>This is a website that showcases the most staple Japanese dishes.</p>
      </section>
    </div>
  );
};

export default Homepage;





