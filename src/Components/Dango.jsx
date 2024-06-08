import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import dango from '../img/chichi.webp';

const Dango = () => {
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
            <img
              src={dango}
              className="img recipe-hero-img"
              alt="Chi Chi Dango"
            />
            <article className="recipe-info">
              <h2>Chi Chi Dango</h2>
              <p>
                Chi chi dango, a mochiko dessert confection, is a soft, chewy Japanese treat that is very similar in taste to mochi. 
                It's traditionally served at Girl's Day or Boy's Day celebrations. 
                It makes a great snack for picnics or parties. This recipe is easy to make, but don't double the directions — follow them exactly as written.
              </p>
              <div className="recipe-icons">
                <article>
                  <i className="fas fa-clock"></i>
                  <h5>prep time</h5>
                  <p>15 mins.</p>
                </article>
                <article>
                  <i className="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p>1 Hour</p>
                </article>
                <article>
                  <i className="fas fa-user-friends"></i>
                  <h5>serving</h5>
                  <p>36 pieces</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : <a href="tag-template.html">sweets</a>
                <a href="tag-template.html">desserts</a>
                <a href="tag-template.html">mochi</a>
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
                  <p>Pre heat</p>
                  <div></div>
                </header>
                <p>
                  1. Preheat the oven to 350 degrees F (175 degrees C).<br />
                  2. Grease a 9x13-inch pan with cooking spray.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 2:</p>
                  <p>Mix powder</p>
                  <div></div>
                </header>
                <p>
                  1. Whisk mochiko, sugar, and baking powder together in a bowl.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 3:</p>
                  <p>add liquids</p>
                  <div></div>
                </header>
                <p>
                  1. Combine water, coconut milk, vanilla, and food coloring in a medium bowl.<br />
                  2. Blend in dry ingredients, then pour into the prepared pan.<br />
                  3. Cover with foil.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 4:</p>
                  <p>bake the mixture</p>
                  <div></div>
                </header>
                <p>
                  1. Bake in the preheated oven for 1 hour.<br />
                  2. Remove from the oven and let cool completely, 30 minutes to 1 hour.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 5:</p>
                  <p>prepare the dessert</p>
                  <div></div>
                </header>
                <p>
                  1. Dust a work surface with potato starch.<br />
                  2. Invert the pan onto the work surface.<br />
                  3. Use a plastic knife to cut into 36 squares.
                </p>
              </div>
            </article>

            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <p className="single-ingredient">cooking spray</p>
                <p className="single-ingredient">1 pound mochiko (glutinous rice flour)</p>
                <p className="single-ingredient">2 ½ cups white sugar</p>
                <p className="single-ingredient">1 teaspoon baking powder</p>
                <p className="single-ingredient">2 cups water</p>
                <p className="single-ingredient">1 (14 ounce) can coconut milk</p>
                <p className="single-ingredient">1 teaspoon vanilla extract</p>
                <p className="single-ingredient">¼ teaspoon red food color</p>
                <p className="single-ingredient">¼ cup potato starch, or as needed</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dango;
