import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer
    data-testid="footer"
    className="footer-app"
  >
    <img
      data-testid="drinks-bottom-btn"
      src={ drinkIcon }
      alt="Bebidas"
    />
    <img
      data-testid="explore-bottom-btn"
      src={ exploreIcon }
      alt="Explorar"
    />
    <img
      data-testid="food-bottom-btn"
      src={ mealIcon }
      alt="Comidas"
    />
  </footer>
);

export default Footer;
