import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import ramen from '../img/soup.webp';
import sushi from '../img/food1.webp';
import bento from '../img/bento2.webp';
import dango from '../img/chichi.webp';
import takoyaki from '../img/takoyaki.webp';
const Recipe = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav>
        <div className={`nav-links ${showMenu ? 'show-drawer' : ''}`} id="navLinks">
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

      <main className="page">
        <section className="recipes-container">
          <div className="tags-container">
            <h4>recipes</h4>
            <div className="tags-list">
              <a href="tag-template.html">Beef (1)</a>
              <a href="tag-template.html">Breakfast (2)</a>
              <a href="tag-template.html">Carrots (3)</a>
              <a href="tag-template.html">Food (4)</a>
            </div>
          </div>
          <div className="recipes-list">
            <Link to="/ramen" className="recipe">
              <img src={ramen} className="img recipe-img" alt="" />
              <h5>Ramen</h5>
              <p>Prep : 30min | Cook : 12hours</p>
            </Link>
            <Link to="/sushi" className="recipe">
              <img src={sushi} className="img recipe-img" alt="" />
              <h5>Sushi</h5>
              <p>Prep : 40min | Cook : 25min</p>
            </Link>
            <Link to="/bento" className="recipe">
              <img src={bento} className="img recipe-img" alt="" />
              <h5>Bento</h5>
              <p>Prep : 30min | Cook : 30min</p>
            </Link>
            <Link to="/dango" className="recipe">
              <img src={dango} className="img recipe-img" alt="" />
              <h5>Chi Chi Dango</h5>
              <p>Prep : 15min | Cook : 1hour</p>
            </Link>
            <Link to="/takoyaki" className="recipe">
              <img src={takoyaki} className="img recipe-img" alt="" />
              <h5>Takoyaki</h5>
              <p>Prep : 20min | Cook : 15min</p>
            </Link>
          </div>
        </section>
      </main>
      <script src="../recipe.js"></script>
    </div>
  );
}

export default Recipe;
