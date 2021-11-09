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
      {dataApi.drinks && dataApi.drinks.slice(0, NUMBER)
        .map(({ strDrink, idDrink, strDrinkThumb }, index) => (
          <div key={ idDrink } data-testid={ `${index}-recipe-card` }>
            <img
              className="img-meals"
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
          </div>))}
      <Footer />
    </div>
  );
}

export default Bebidas;
