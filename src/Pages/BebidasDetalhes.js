import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardDrinksIngredientes from '../Components/CardIngredientes';
import { urlIdDrink, urlNameComidas } from '../helper/helper';

function BebidasDetalhes() {
  const { dataIdCard, getCardById, getAPIname } = useContext(ReceitasContext);
  const { id } = useParams();
  useEffect(() => { getCardById(urlIdDrink, id); }, []);
  useEffect(() => { getAPIname(urlNameComidas, ''); }, []);

  return (
    <section>
      {dataIdCard.drinks && dataIdCard.drinks
        .map(({ strDrink, idDrink, strDrinkThumb }) => (
          <div
            key={ idDrink }
          >
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid="recipe-photo"
              className="section-detalhes-img"
            />
            <div className="card-body card-detalhes">
              <h5 className="card-text" data-testid="recipe-title">{strDrink}</h5>
              <div>
                <img
                  className="d-inline-block align-top"
                  data-testid="share-btn"
                  src={ shareIcon }
                  alt="Ícone de compartilhamento"
                />
                <img
                  className="d-inline-block align-top"
                  data-testid="favorite-btn"
                  src={ blackHeartIcon }
                  alt="Ícone de favoritar"
                />
              </div>
            </div>
            <CardDrinksIngredientes />
          </div>
        )) }
    </section>
  );
}

export default BebidasDetalhes;
