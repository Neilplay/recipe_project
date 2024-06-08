import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import takoyaki from '../img/takoyaki.webp';

const Takoyaki = () => {
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
              src={takoyaki}
              className="img recipe-hero-img"
              alt="Takoyaki"
            />
            <article className="recipe-info">
              <h2>Takoyaki</h2>
              <p>
                Takoyaki literally translated means octopus fried, but they aren’t just fried octopus – they’re tiny, 
                piping hot balls of batter filled with green onions, ginger, crispy tempura bits and octopus. 
                It’s crisp, it’s gooey, it’s delicious.
              </p>
              <div className="recipe-icons">
                <article>
                  <i className="fas fa-clock"></i>
                  <h5>prep time</h5>
                  <p>20 mins.</p>
                </article>
                <article>
                  <i className="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p>15 mins.</p>
                </article>
                <article>
                  <i className="fas fa-user-friends"></i>
                  <h5>serving</h5>
                  <p>64 takoyaki balls</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : <a href="tag-template.html">octopus</a>
                <a href="tag-template.html">snack</a>
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
                  <p>Mix batter </p>
                  <div></div>
                </header>
                <p>
                  1. Beat the eggs and add the water and stock granules.<br />
                  2. Add the egg-water-dashi mixture to the flour and salt and mix well. <br />
                  3. Heat up your pan and oil the individual compartments with an oil brush or use a paper towel dipped in oil.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 2:</p>
                  <p>Pour Batter</p>
                  <div></div>
                </header>
                <p>
                  1. When the pan is hot, pour the batter into the individual compartments up to the top. Don’t worry if the batter overflows a bit.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 3:</p>
                  <p>add fillings</p>
                  <div></div>
                </header>
                <p>
                  1. Add green onions, your protein, tempura bits/rice krispies, ginger, and shredded cheese (if using).
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 4:</p>
                  <p>Turn takoyaki</p>
                  <div></div>
                </header>
                <p>
                  1. After a while, the bottom of the takoyaki will be cooked through. At this point, you can use a skewer or two to turn them over 90 degrees.<br />
                  2. Let cook for a minute or so and then do another 90 degree turn. The balls will become easier to turn the more they cook.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 5:</p>
                  <p>Wait till brown</p>
                  <div></div>
                </header>
                <p>
                  1. The takoyaki are done when they’re lightly brown and crispy on the outside and they turn easily in their holes.<br />
                  2. Overall I’d say it takes about 10-15 minutes per batch, from start to finish, depending on how crispy or soft you like your takoyaki.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 6:</p>
                  <p>Serve</p>
                  <div></div>
                </header>
                <p>
                  1. To serve, place the takoyaki on a plate and drizzle with Japanese mayonnaise and takoyaki sauce.<br />
                  2. Generously sprinkle on the bonito flakes and aonori. Enjoy, but be careful, the insides are hot!
                </p>
              </div>
            </article>

            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <h4>Takoyaki mix:</h4>
                <p className="single-ingredient">3 large eggs lightly beaten</p>
                <p className="single-ingredient">4.25 cups cold water</p>
                <p className="single-ingredient">2 tsp instant dashi</p>
                <p className="single-ingredient">2 tsp soy sauce</p>
                <p className="single-ingredient">1/2 tsp salt</p>
                <p className="single-ingredient">2.5 cups all purpose flour about 300g</p>
              </div>

              <div>
                <h4>Takoyaki filling:</h4>
                <p className="single-ingredient">1/2 lb boiled octopus 0.5" cubed</p>
                <p className="single-ingredient">1 bunch green onions sliced</p>
                <p className="single-ingredient">1 cup tempura bits or rice krispies</p>
                <p className="single-ingredient">beni shoga/pickled ginger if desired</p>
                <p className="single-ingredient">shredded or cubed cheese if desired</p>
              </div>

              <div>
                <h4>Takoyaki toppings:</h4>
                <p className="single-ingredient">mayo preferably Japanese/Kewpie Brand</p>
                <p className="single-ingredient">takoyaki sauce</p>
                <p className="single-ingredient">bonito flakes</p>
                <p className="single-ingredient">aonori or seaweed strips</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Takoyaki;
