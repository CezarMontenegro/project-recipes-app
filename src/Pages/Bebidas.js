import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import ButtonSearch from '../Components/ButtonSearch';
import ReceitasContext from '../Context/ReceitasContext';
import { urlIngredientsBebidasInital } from '../helper/helper';
import Footer from '../Components/Footer';

function Bebidas() {
  const { dataApi, getAPIingredient } = useContext(ReceitasContext);
  const NUMBER = 12;

  useEffect(() => { getAPIingredient(urlIngredientsBebidasInital, ''); }, []);

  return (
    <div>
      <Header title="Bebidas">
        <ButtonSearch />
      </Header>
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
