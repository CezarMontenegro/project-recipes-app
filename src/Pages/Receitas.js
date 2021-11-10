/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';
import { urlCategoriesFood, urlIngredientsComidas } from '../helper/helper';

function Receitas() {
  const { dataApi, getAPIingredient, getApiCategories,
    dataCategories } = useContext(ReceitasContext);
  const NUMBER = 12;
  const maxCategories = 5;

  useEffect(() => { getAPIingredient(urlIngredientsComidas, ''); }, []);
  useEffect(() => { getApiCategories(urlCategoriesFood); }, []);

  return (
    <div>
      <Header title="Comidas">
        <ButtonSearch />
      </Header>
      {dataCategories.meals && dataCategories.meals.slice(0, maxCategories)
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
