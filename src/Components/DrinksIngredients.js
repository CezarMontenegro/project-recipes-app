import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import getIngredients, { getQuantIngredients } from '../helper/functionsHelper';
import UlIngredients from './UlIngredients';

function DrinksIngredients() {
  const { dataIdCard } = useContext(ReceitasContext);
  const cardValues = Object.entries(dataIdCard.drinks[0]);
  const ingredientsValue = getIngredients(cardValues);
  const quantIngredients = getQuantIngredients(cardValues);

  return (
    <section>
      { dataIdCard.drinks && dataIdCard.drinks
        .map(({ idDrink, strCategory, strInstructions, strAlcoholic }) => (
          <div key={ idDrink }>
            <h5 data-testid="recipe-category">
              {strCategory}
              <h5>{strAlcoholic}</h5>
            </h5>
            <UlIngredients
              arrayIngredients={ ingredientsValue }
              arrayMeasure={ quantIngredients }
            />
            <h5>Instructions</h5>
            <p data-testid="instructions">{strInstructions}</p>
            <h3 data-testid="0-recomendation-card">Recomendadas</h3>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        ))}
    </section>
  );
}

export default DrinksIngredients;
