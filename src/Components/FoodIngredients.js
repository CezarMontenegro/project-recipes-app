import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import getIngredients, { getQuantIngredients } from '../helper/functionsHelper';
import UlIngredients from './UlIngredients';

function FoodIngredients() {
  const { dataIdCard } = useContext(ReceitasContext);
  const cardValues = Object.entries(dataIdCard.meals[0]);
  const ingredientsValue = getIngredients(cardValues);
  const quantIngredients = getQuantIngredients(cardValues);

  return (
    <section>
      {dataIdCard.meals
        .map(({ idMeal, strCategory, strInstructions, strYoutube }) => (
          <div key={ idMeal }>
            <h5 data-testid="recipe-category">{strCategory}</h5>
            <UlIngredients
              arrayIngredients={ ingredientsValue }
              arrayMeasure={ quantIngredients }
            />
            <h5>Instructions</h5>
            <p data-testid="instructions">{strInstructions}</p>
            <video
              data-testid="video"
              controls
              src={ strYoutube }
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src={ strYoutube }
              />
            </video>
            <h3 data-testid="0-recomendation-card">Recomendadas</h3>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        ))}
    </section>
  );
}

export default FoodIngredients;
