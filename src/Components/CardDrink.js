import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';

const CardDrink = () => {
  const { dataApi } = useContext(ReceitasContext);
  const NUMBER = 12;
  const history = useHistory();

  const handleClick = (param) => {
    history.push(`/bebidas/${param}`);
  };

  return (
    <section className="display-card">
      {dataApi.drinks && dataApi.drinks.slice(0, NUMBER)
        .map(({ strDrink, idDrink, strDrinkThumb }, index) => (
          <div
            key={ idDrink }
            data-testid={ `${index}-recipe-card` }
            className="card div-card col-sm-2 card-food"
          >
            <input
              type="image"
              className="card-img-top"
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
              onClick={ () => handleClick(idDrink) }
            />
            <div className="card-body">
              <h5
                className="card-text"
                data-testid={ `${index}-card-name` }
              >
                {strDrink}

              </h5>
            </div>
          </div>))}
    </section>
  );
};

export default CardDrink;
