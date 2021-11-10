import React, { useContext, useEffect } from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';
import { urlIngredientsComidas } from '../helper/helper';

function Receitas() {
  const { dataApi, getAPIingredient } = useContext(ReceitasContext);
  const NUMBER = 12;

  useEffect(() => { getAPIingredient(urlIngredientsComidas, ''); }, []);

  return (
    <div>
      <Header title="Comidas">
        <ButtonSearch />
      </Header>
      <section className="display-card">
        {dataApi.meals && dataApi.meals.slice(0, NUMBER)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <div
              key={ idMeal }
              data-testid={ `${index}-recipe-card` }
              className="card div-card col-sm-2 card-food"
            >
              <img
                className="card-img-top"
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
            </div>))}
      </section>
      <Footer />
    </div>
  );
}

export default Receitas;
