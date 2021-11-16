import React from 'react';
import PropTypes from 'prop-types';

const CheckboxIngredients = ({ arrayIngredients }) => (
  <section>
    <h5>
      Ingredientes
      { arrayIngredients.map((ingredientValue, index) => {
        const ingredient = ingredientValue.replace('strIngredient', '')
          .replace('-', ' - ');
        return (
          <div key={ index }>
            <label
              htmlFor={ index }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              { ingredient}
              <input
                type="checkbox"
                id={ index }
              />
            </label>
          </div>
        );
      })}
    </h5>
  </section>

);

CheckboxIngredients.propTypes = {
  arrayIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckboxIngredients;
