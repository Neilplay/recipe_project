import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import ramen from '../img/soup.webp';

const Ramen = () => {
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
            <img src={ramen} className="img recipe-hero-img" alt="Tonkatsu Ramen" />
            <article className="recipe-info">
              <h2>Tonkatsu Ramen</h2>
              <p>
                Tonkotsu ramen is an excellent introduction to Japanese noodle soups.
                Deeply flavoured tonkotsu pork broth,
                ramen noodles and chashu pork belly come together
                to create comfort in a bowl.
              </p>
              <div className="recipe-icons">
                <article>
                  <i className="fas fa-clock"></i>
                  <h5>prep time</h5>
                  <p>30 min.</p>
                </article>
                <article>
                  <i className="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p>12 Hours.</p>
                </article>
                <article>
                  <i className="fas fa-user-friends"></i>
                  <h5>serving</h5>
                  <p>4 Bowls</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : <a href="tag-template.html">beef</a>
                <a href="tag-template.html">breakfast</a>
                <a href="tag-template.html">pancakes</a>
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
                  <p>Chashu pork belly</p>
                  <div></div>
                </header>
                <p>
                  1. Combine the soy, sake, mirin, sugar, garlic and green onions in a ziploc bag large enough to hold the pork belly. Stick a straw in the bag and seal the ziploc bag up against it (so the straw is the only opening). Suck as much of the air out as you can and seal.<br />
                  2. Sous vide the pork for 10-11 hours at 170F.<br />
                  3. Remove pork from the ziploc bag. Discard the bag and marinade.<br />
                  4. Let the chashu pork belly cool completely.<br />
                  5. Slice across the chashu pork (so you get bacon like slices) – into 8-12 slices about 1/8 to 3/16 inches thick. Reserve. You won’t need all the pork for 4 servings.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 2:</p>
                  <p>Soy bacon tare</p>
                  <div></div>
                </header>
                <p>
                  1. Combine all the ingredients in a small sauce pan. Simmer at the lowest setting for about an hour. Top up with a bit of chicken stock if needed.<br />
                  2. Remove the bacon.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 3:</p>
                  <p>Miso tare</p>
                  <div></div>
                </header>
                <p>
                  1. Combine all ingredients in a small sauce pan and simmer at the lowest setting for about 5 minutes.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 4:</p>
                  <p>Medium boiled eggs</p>
                  <div></div>
                </header>
                <p>
                  1. Bring enough water to cover the eggs to a boil. If you have a way to prick the eggshell do it. Boil large eggs for 6 minutes 30 seconds. If using extra large eggs boil them for 7 minutes 30 seconds. You may have to adjust your times slightly depending on the exact size of your eggs but this should get you pretty close.<br />
                  2. Submerge the eggs in cold or ice water to chill. This stops the egg yolks from continuing to set up. Peel. Cut in half right before you serve your tonkotsu ramen.
                </p>
              </div>
              <div className="single-instruction">
                <header>
                  <p>step 5:</p>
                  <p>Assemble the tonkotsu ramen</p>
                  <div></div>
                </header>
                <p>
                  1. Boil the ramen noodles in plenty of water as directed by the packaging. If there’s no translation on the packaging usually its 4 minutes. You don’t need to salt the water.<br />
                  2. Cook the mushrooms alongside the noodles – you just want them softened.<br />
                  3. Gently fry the chashu pork in a non-stick skillet until lightly browned.<br />
                  4. Place 1/4 of whichever tare you are using in the bottom of four bowls.<br />
                  5. Ladle in about 1/2 cup of the tonkotsu broth into each of the bowls and stir to mix.<br />
                  6. Add the noodles. Pour in another 1 1/2 cups of the tonkotsu broth per bowl.<br />
                  7. Top with the egg, mushrooms, pork and green onions.
                </p>
              </div>
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <p className="single-ingredient">8 cups tonkotsu pork broth </p>
                <p className="single-ingredient">12 oz good quality dried ramen noodles</p>
                <p className="single-ingredient">4 large or extra large eggs</p>
                <p className="single-ingredient">2-3 oz enoki or other mushrooms</p>
                <p className="single-ingredient">thinly sliced green onions</p>
              </div>
              <div>
                <h4>ingredients for Chashu pork belly</h4>
                <p className="single-ingredient">2 lb pork belly (rolled and tied) </p>
                <p className="single-ingredient">1/4 cup soy sauce</p>
                <p className="single-ingredient">1/2 cup sake</p>
                <p className="single-ingredient">1/2 cup mirin (sweet Japanese wine)</p>
                <p className="single-ingredient">1/4 cup sugar</p>
                <p className="single-ingredient">2-3 cloves garlic (left whole)</p>
                <p className="single-ingredient">2 green onions (coarsely chopped)</p>
              </div>
              <div>
                <h4>ingredients for Soy bacon tare</h4>
                <p className="single-ingredient">2 slices bacon </p>
                <p className="single-ingredient">1/4 cup soy sauce</p>
                <p className="single-ingredient">2 Tbsp mirin</p>
                <p className="single-ingredient">2 Tbsp sake</p>
                <p className="single-ingredient">4 Tbsp shiro miso</p>
              </div>
              <div>
                <h4>ingredients for Miso Tare</h4>
                <p className="single-ingredient">1/2 cup shiro miso</p>
                <p className="single-ingredient">1/4 cup sake</p>
                <p className="single-ingredient">1/4 cup mirin</p>
                <p className="single-ingredient">pinch shichimi togarashi</p>
                <p className="single-ingredient">1-2 tsp kosher salt</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Ramen;
