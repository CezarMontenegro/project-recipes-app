import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { urlIdFood, urlNameBebidas } from '../helper/helper';
import FoodIngredients from '../Components/FoodIngredients';

const copy = require('clipboard-copy');

function ComidaDetalhes() {
  const { dataIdCard, getCardById, getAPIname } = useContext(ReceitasContext);
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => { getCardById(urlIdFood, id); }, []);
  useEffect(() => { getAPIname(urlNameBebidas, ''); }, []);

  const handleShare = () => {
    copy(pathname);
    global.alert('Link Copiado!');
  };

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
                  onClick={ handleShare }
                />
                <img
                  className="d-inline-block align-top"
                  data-testid="favorite-btn"
                  src={ whiteHeartIcon }
                  alt="Ícone de favoritar"
                />
              </div>
            </div>
            <FoodIngredients />
          </div>
        )) }
    </section>
  );
}

export default ComidaDetalhes;
