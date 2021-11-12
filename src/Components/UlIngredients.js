import React from 'react';
import PropTypes from 'prop-types';

const UlIngredients = ({ arrayIngredients, arrayMeasure }) => (
  <section>
    <h5>
      Ingredientes
      <ul>
        { arrayIngredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}

          </li>
        ))}
      </ul>
      <h5> Measure </h5>
      <ul>
        { arrayMeasure.map((measure, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {measure}

          </li>
        ))}
      </ul>
    </h5>
  </section>

);

UlIngredients.propTypes = {
  arrayIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  arrayMeasure: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UlIngredients;
