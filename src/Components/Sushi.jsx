import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import sushi from '../img/sushi.webp';

const Sushi = () => {
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
        <div className="recipe-page">
          <section className="recipe-hero">
            <img src={sushi} className="img recipe-hero-img" alt="Sushi" />
            <article className="recipe-info">
              <h2>Sushi</h2>
              <p>
                Sushi rolls can be filled with any ingredients you choose.
                Try smoked salmon instead of imitation crabmeat.
                Serve with teriyaki sauce and wasabi.
              </p>
              <div className="recipe-icons">
                <article>
                  <i className="fas fa-clock"></i>
                  <h5>prep time</h5>
                  <p>40 min.</p>
                </article>
                <article>
                  <i className="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p>25 mins.</p>
                </article>
                <article>
                  <i className="fas fa-user-friends"></i>
                  <h5>serving</h5>
                  <p>4 cut rolls</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : <a href="tag-template.html">Salmon</a>
                <a href="tag-template.html">lunch</a>
                <a href="tag-template.html">food</a>
              </p>
            </article>
          </section>

          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              <div className="single-instruction">
                <header>
                  <p>step 1:</p>
                  <p>Gather all ingredients.</p>
                  <div></div>
                </header>
                <p>
                  1. Preheat the oven to 300 degrees F (150 degrees C).
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 2:</p>
                  <p>Cook Rice</p>
                  <div></div>
                </header>
                <p>
                  1. Bring water to a boil in a medium pot; stir in rice.<br />
                  2. Reduce heat to medium-low, cover, and simmer until rice is tender and water has been absorbed, 20 to 25 minutes.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 3:</p>
                  <p>Mix The Rice</p>
                  <div></div>
                </header>
                <p>
                  1. Mix rice vinegar, sugar, and salt in a small bowl.<br />
                  2. Gently stir into cooked rice in the pot and set aside.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 4:</p>
                  <p>Get Nori</p>
                  <div></div>
                </header>
                <p>
                  1. Lay nori sheets on a baking sheet.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 5:</p>
                  <p>Heat The Nori</p>
                  <div></div>
                </header>
                <p>
                  1. Heat nori in the preheated oven until warm, 1 to 2 minutes.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 6:</p>
                  <p>Grab a Sushi Mat</p>
                  <div></div>
                </header>
                <p>
                  1. Center 1 nori sheet on a bamboo sushi mat.<br />
                  2. Use wet hands to spread a thin layer of rice on top.<br />
                  3. Arrange 1/4 of the crabmeat, avocado, cucumber, and pickled ginger over rice in a line down the center.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 7:</p>
                  <p>Roll The Sushi Mat</p>
                  <div></div>
                </header>
                <p>
                  1. Lift one end of the mat and roll it tightly over filling to make a complete roll.<br />
                  2. Repeat with remaining ingredients.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 8:</p>
                  <p>Cut Into Many Slices You Want</p>
                  <div></div>
                </header>
                <p>
                  1. Use a wet, sharp knife to cut each roll into 4 to 6 slices.
                </p>
              </div>
            </article>

            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <p className="single-ingredient">1 ⅓ cups water</p>
                <p className="single-ingredient">⅔ cup uncooked short-grain white rice</p>
                <p className="single-ingredient">3 tablespoons rice vinegar</p>
                <p className="single-ingredient">3 tablespoons white sugar</p>
                <p className="single-ingredient">1 ½ teaspoons salt</p>
                <p className="single-ingredient">4 sheets nori seaweed sheets</p>
                <p className="single-ingredient">½ pound imitation crabmeat, flaked</p>
                <p className="single-ingredient">1 avocado - peeled, pitted, and sliced</p>
                <p className="single-ingredient">½ cucumber, peeled, cut into small strips</p>
                <p className="single-ingredient">2 tablespoons pickled ginger</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sushi;
