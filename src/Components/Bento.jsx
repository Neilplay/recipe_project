import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/recipe.css';
import tamagoyaki from '../img/tamagoyaki.webp';
const Bento = () => {
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
              src={tamagoyaki}
              className="img recipe-hero-img"
              alt="Tamagoyaki"
            />
            <article className="recipe-info">
              <h2>Bento</h2>
              <p>
                Traditional Japanese bento for a delicious lunch far from sandwiches and chips.
                The onigiri can be formed into different shapes to have a fun lunch.
              </p>
              <div className="recipe-icons">
                <article>
                  <i className="fas fa-clock"></i>
                  <h5>prep time</h5>
                  <p>30 mins.</p>
                </article>
                <article>
                  <i className="far fa-clock"></i>
                  <h5>cook time</h5>
                  <p>30 mins.</p>
                </article>
                <article>
                  <i className="fas fa-user-friends"></i>
                  <h5>serving</h5>
                  <p>1 Bento Box</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : <a href="tag-template.html">egg</a>
                <a href="tag-template.html">rice</a>
                <a href="tag-template.html">lunch</a>
                <a href="tag-template.html">bento</a>
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
                  <p>Cook Rice</p>
                  <div></div>
                </header>
                <p>
                  1. Rinse rice with cool water until the water runs clear; drain.<br />
                  2. Bring rice and 3/4 cup water to a boil in a pot.<br />
                  3. Reduce heat and let simmer until water is absorbed, about 15 minutes.<br />
                  4. Let cool, 10 to 20 minutes.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 2:</p>
                  <p>Prepare Nori</p>
                  <div></div>
                </header>
                <p>
                  1. Cut the sheet of nori into two 1-inch strips; reserve the remainder of the sheet for making tamagoyaki.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 3:</p>
                  <p>Make Onigiri</p>
                  <div></div>
                </header>
                <p>
                  1. Wet your hands and form the cooled rice into 4 equal portions.<br />
                  2. Keep your hands wet to keep rice from sticking.<br />
                  3. Create an indention in one of the rice portions using your thumb.<br />
                  4. Fill the indention with 1 teaspoon bonito flakes.<br />
                  5. Top with another rice portion to close the onigiri.<br />
                  6. Form into an oval shape and wrap the middle with a strip of nori.<br />
                  7. Make another onigiri with the remaining ingredients.<br />
                  8. Sprinkle white and black sesame seeds on top.<br />
                  9. Place in a bento box.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 4:</p>
                  <p>Scramble Eggs</p>
                  <div></div>
                </header>
                <p>
                  1. Whisk together the eggs, mirin, and 1/8 teaspoon tamari together in a bowl; divide into 3 portions.<br />
                  2. Cut remaining portion of nori sheet into four 1/2-inch strips.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 5:</p>
                  <p>Omelette</p>
                  <div></div>
                </header>
                <p>
                  1. Heat oil in a small saucepan or square tamagoyaki pan over medium-high heat.<br />
                  2. Add 1/3 of the egg mixture and cook until almost firm, 2 to 3 minutes; if omelette is too firm, it won't stick together very well.<br />
                  3. Slide onto a plate.<br />
                  4. Add the 4 strips of nori to the pan with some space between each.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 6:</p>
                  <p>Omelette Roll</p>
                  <div></div>
                </header>
                <p>
                  1. Cook another 1/3 of the omelette the same way, but roll it up carefully in the saucepan with the nori.<br />
                  2. Slide the rolled-up omelette onto the edge of the first omelette.<br />
                  3. Cook the third omelette and roll it up, sliding it on top of the second omelette.<br />
                  4. Let cool enough to touch, about 5 minutes.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 7:</p>
                  <p>Put the layered omelette in the bento box</p>
                  <div></div>
                </header>
                <p>
                  1. Roll the entire layered omelette together with nori inside.<br />
                  2. Cut into 4 pieces. Place into the bento box alongside the onigiri.
                </p>
              </div>

              <div className="single-instruction">
                <header>
                  <p>step 8:</p>
                  <p>Finishing touches</p>
                  <div></div>
                </header>
                <p>
                  1. Mix 2 tablespoons tamari, ginger, and wasabi paste together in a bowl.<br />
                  2. Put the mixture into a portable container then put inside the bento box.<br />
                  3. Add the steamed broccoli and edamame.
                </p>
              </div>
            </article>

            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <h4>ingredients for Onigiri:</h4>
                <p className="single-ingredient">½ cup uncooked short-grain white rice</p>
                <p className="single-ingredient">¾ cup water</p>
                <p className="single-ingredient">1 sheet nori (dry seaweed), or as needed</p>
                <p className="single-ingredient">2 teaspoons bonito flakes, divided</p>
                <p className="single-ingredient">1 teaspoon white sesame seeds</p>
                <p className="single-ingredient">1 teaspoon black sesame seeds</p>
              </div>
              <div>
                <h4>ingredients for Tamagoyaki:</h4>
                <p className="single-ingredient">2 large eggs</p>
                <p className="single-ingredient">1 teaspoon mirin (Japanese sweet wine)</p>
                <p className="single-ingredient">⅛ teaspoon tamari</p>
                <p className="single-ingredient">1 teaspoon vegetable oil</p>
                <p className="single-ingredient">2 tablespoons tamari</p>
                <p className="single-ingredient">1 teaspoon freshly grated ginger</p>
                <p className="single-ingredient">⅛ teaspoon wasabi paste</p>
                <p className="single-ingredient">¼ cup steamed broccoli florets</p>
                <p className="single-ingredient">½ cup cooked shelled edamame</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Bento;
