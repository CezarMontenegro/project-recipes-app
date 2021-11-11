import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';

function CardIngredientes() {
  const { dataIdCard } = useContext(ReceitasContext);

  return (
    <section>
      { dataIdCard.drinks && dataIdCard.drinks
        .map(({ idDrink, strCategory, strInstructions }) => (
          <div key={ idDrink }>
            <h5 data-testid="recipe-category">{strCategory}</h5>
            <span>
              <h5 data-testid="0-ingredient-name-and-measure">Ingredientes</h5>
            </span>
            <h5>Instructions</h5>
            <p data-testid="instructions">{strInstructions}</p>
            <h3 data-testid="0-recomendation-card">Recomendadas</h3>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        ))}
    </section>
  );
}

export default CardIngredientes;
