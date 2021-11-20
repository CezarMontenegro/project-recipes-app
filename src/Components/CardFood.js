import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';

const CardFood = () => {
  const { dataApi } = useContext(ReceitasContext);
  const NUMBER = 12;

  return (
    <section className="display-card">
      {dataApi.meals && dataApi.meals.slice(0, NUMBER)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link
            key={ idMeal }
            to={ `/comidas/${idMeal}` }
          >
            <div
              key={ idMeal }
              data-testid={ `${index}-recipe-card` }
              className="card div-card col-sm-2 card-food"
            >
              <input
                className="card-img-top"
                type="image"
                src={ strMealThumb }
                alt={ strMeal }
                data-testid={ `${index}-card-img` }
              />
              <div className="card-body">
                <h5
                  className="card-text"
                  data-testid={ `${index}-card-name` }
                >
                  {strMeal}
                </h5>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default CardFood;
