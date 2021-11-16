import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { urlIdFood, urlNameBebidas } from '../helper/helper';
import FoodProgresso from '../Components/FoodProgresso';

function ProgressoComidas() {
  const { dataIdCard, getCardById, getAPIname } = useContext(ReceitasContext);
  const { id } = useParams();

  useEffect(() => { getCardById(urlIdFood, id); }, []);
  useEffect(() => { getAPIname(urlNameBebidas, ''); }, []);

  return (
    <section>
      {dataIdCard.meals && dataIdCard.meals
        .map(({ idMeal, strMeal, strMealThumb }) => (
          <div
            key={ idMeal }
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid="recipe-photo"
              className="section-detalhes-img"
            />
            <div className="card-body card-detalhes">
              <h5 className="card-text" data-testid="recipe-title">{strMeal}</h5>
              <div>
                <input
                  type="image"
                  className="d-inline-block align-top"
                  data-testid="share-btn"
                  src={ shareIcon }
                  alt="Ícone de compartilhamento"
                />
                <img
                  className="d-inline-block align-top"
                  data-testid="favorite-btn"
                  src={ whiteHeartIcon }
                  alt="Ícone de favoritar"
                />
              </div>
            </div>
            <FoodProgresso />
          </div>
        )) }
    </section>
  );
}

export default ProgressoComidas;
