import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import getIngredients, { getQuantIngredients } from '../helper/functionsHelper';
import UlIngredients from './UlIngredients';

function FoodIngredients() {
  const { dataIdCard, dataApi } = useContext(ReceitasContext);
  const cardValues = Object.entries(dataIdCard.meals[0]);
  const ingredientsValue = getIngredients(cardValues);
  const quantIngredients = getQuantIngredients(cardValues);
  const maxSugestions = 6;
  const sugestions = dataApi.drinks && dataApi.drinks.slice(0, maxSugestions);

  return (
    <section>
      {dataIdCard.meals && dataIdCard.meals
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
            <h3>Recomendadas</h3>
            <section className="section-carousel">
              { sugestions && sugestions
                .map(({ strDrink, strAlcoholic, strDrinkThumb }, index) => (
                  <div key={ index } className="div-carousel">
                    <h3 data-testid={ `${index}-recomendation-title` }>{strDrink}</h3>
                    <h3 data-testid={ `${index}-recomendation-card` }>{strAlcoholic}</h3>
                    <img src={ strDrinkThumb } alt="img drink" />
                  </div>
                ))}
            </section>
            <section className="section-btn-recipe">
              <button
                type="button"
                data-testid="start-recipe-btn"
                className="btn-startRecipe"
              >
                Iniciar Receita
              </button>

            </section>
          </div>
        ))}
    </section>
  );
}

export default FoodIngredients;
