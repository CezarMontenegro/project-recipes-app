import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ReceitasContext from '../Context/ReceitasContext';
import getIngredients, { getQuantIngredients } from '../helper/functionsHelper';
import CheckboxIngredients from './CheckboxIngredients';

function FoodProgresso() {
  const { dataIdCard } = useContext(ReceitasContext);
  const cardValues = Object.entries(dataIdCard.meals[0]);
  const ingredientsValue = getIngredients(cardValues);
  const quantIngredients = getQuantIngredients(cardValues);
  const { isFinishedRecip } = useContext(ReceitasContext);
  const history = useHistory();
  return (
    <section>
      { dataIdCard.meals && dataIdCard.meals
        .map(({ idMeal: idFood, strCategory, strInstructions }) => (
          <div key={ idFood }>
            <h5 data-testid="recipe-category">
              {strCategory}
            </h5>
            <CheckboxIngredients
              arrayIngredients={ ingredientsValue }
              arrayMeasure={ quantIngredients }
            />
            <h5>Instructions</h5>
            <p data-testid="instructions">{strInstructions}</p>
            <section className="section-btn-recipe">
              <button
                type="button"
                data-testid="finish-recipe-btn"
                className="btn-startRecipe"
                disabled={ isFinishedRecip }
                onClick={ () => history.push('/receitas-feitas') }
              >
                Finalizar Receita
              </button>
            </section>
          </div>
        ))}
    </section>
  );
}

export default FoodProgresso;
