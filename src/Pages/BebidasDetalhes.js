import React, { useContext, useEffect } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardDrinksIngredientes from '../Components/CardDrinksIngredientes';
import Loading from '../Components/Loading';
import { urlIdDrink } from '../helper/helper';

function BebidasDetalhes() {
  const { dataIdCard, render, getCardById, id } = useContext(ReceitasContext);

  useEffect(() => { getCardById(urlIdDrink, id); }, []);

  return (
    <section>
      {render ? dataIdCard.drinks && dataIdCard.drinks
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
        )) : <Loading /> }
    </section>
  );
}

export default BebidasDetalhes;
