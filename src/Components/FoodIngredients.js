/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import ReceitasContext from '../Context/ReceitasContext';
import getIngredients, { getQuantIngredients } from '../helper/functionsHelper';
import { urlNameBebidas } from '../helper/helper';
import UlIngredients from './UlIngredients';

function FoodIngredients() {
  const { dataIdCard, dataApi, getAPIname } = useContext(ReceitasContext);
  const [isInprogress, setIsInProgress] = useState(false);
  const cardValues = Object.entries(dataIdCard.meals[0]);
  const ingredientsValue = getIngredients(cardValues);
  const quantIngredients = getQuantIngredients(cardValues);
  const maxSugestions = 6;
  const sugestions = dataApi.drinks && dataApi.drinks.slice(0, maxSugestions);
  const { idMeal } = dataIdCard.meals[0];
  const { id } = useParams();
  const history = useHistory();

  const handleInitRecip = () => {
    history.push(`/comidas/${id}/in-progress`);
  };

  useEffect(() => {
    if (!localStorage.inProgressRecipes) {
      setIsInProgress(false);
    } else {
      const recipsInStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      setIsInProgress(idMeal in recipsInStorage.meals);
    }
  }, []);

  useEffect(() => { getAPIname(urlNameBebidas, ''); }, []);

  return (
    <section>
      {dataIdCard.meals && dataIdCard.meals
        .map(({ idMeal: idFood, strCategory, strInstructions, strYoutube }) => (
          <div key={ idFood }>
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
                onClick={ handleInitRecip }
              >
                { !isInprogress
                  ? 'Iniciar Receita' : 'Continuar Receita' }
              </button>

            </section>
          </div>
        ))}
    </section>
  );
}

export default FoodIngredients;
