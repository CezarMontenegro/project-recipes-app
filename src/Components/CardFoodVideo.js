import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';

function CardFoodVideo() {
  const { dataIdCard } = useContext(ReceitasContext);

  return (
    <section>
      { dataIdCard.meals && dataIdCard.meals
        .map(({ idMeal, strCategory, strInstructions, strYoutube }) => (
          <div key={ idMeal }>
            <h5 data-testid="recipe-category">{strCategory}</h5>
            <span>
              <h5 data-testid="0-ingredient-name-and-measure">Ingredientes</h5>
            </span>
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

export default CardFoodVideo;
