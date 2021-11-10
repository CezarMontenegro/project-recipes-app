/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import ButtonSearch from '../Components/ButtonSearch';
import ReceitasContext from '../Context/ReceitasContext';
import { urlCategoriesDrinks, urlIngredientsBebidasInital } from '../helper/helper';
import Footer from '../Components/Footer';

function Bebidas() {
  const { dataApi, getAPIingredient, getApiCategories,
    dataCategories } = useContext(ReceitasContext);
  const NUMBER = 12;
  const maxCategories = 5;

  useEffect(() => { getAPIingredient(urlIngredientsBebidasInital, ''); }, []);
  useEffect(() => { getApiCategories(urlCategoriesDrinks); }, []);

  return (
    <div>
      <Header title="Bebidas">
        <ButtonSearch />
      </Header>
      {dataCategories.drinks && dataCategories.drinks.slice(0, maxCategories)
        .map(({ strCategory }, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        ))}
      <section className="display-card">
        {dataApi.drinks && dataApi.drinks.slice(0, NUMBER)
          .map(({ strDrink, idDrink, strDrinkThumb }, index) => (
            <div
              key={ idDrink }
              data-testid={ `${index}-recipe-card` }
              className="card div-card col-sm-2 card-food"
            >
              <img
                className="card-img-top"
                src={ strDrinkThumb }
                alt={ strDrink }
                data-testid={ `${index}-card-img` }
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
      <Footer />
    </div>
  );
}

export default Bebidas;
