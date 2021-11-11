import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardDrinksIngredientes from '../Components/CardDrinksIngredientes';
import Loading from '../Components/Loading';

function BebidasDetalhes() {
  const { dataIdCard } = useContext(ReceitasContext);

  return (
    <section>
      <Loading />
      { dataIdCard.drinks && dataIdCard.drinks
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
        ))}
    </section>
  );
}

export default BebidasDetalhes;
