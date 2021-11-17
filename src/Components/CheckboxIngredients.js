import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

const CheckboxIngredients = ({ arrayIngredients, arrayMeasure }) => {
  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  const handleClick = ({ target }) => {
    const { checked, value } = target;
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { cocktails, meals } = getStorage;
    if (pathname === `/comidas/${id}/in-progress`) {
      if (checked) {
        localStorage.setItem('inProgressRecipes',
          JSON.stringify({ cocktails: { ...cocktails },
            meals: { ...meals, [id]: value } }));
      }
    } else {
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({ cocktails: { ...cocktails,
          [id]: value },
        meals: { ...meals } }));
    }
  };

  return (

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
                { `${ingredient} - ${arrayMeasure[index].replace('strMeasure', '')
                  .replace('-', '')}`}
                <input
                  type="checkbox"
                  id={ index }
                  onChange={ handleClick }
                  value={ (index + 1) }
                />
              </label>
            </div>
          );
        })}
      </h5>
    </section>
  );
};

CheckboxIngredients.propTypes = {
  arrayIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  arrayMeasure: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckboxIngredients;
