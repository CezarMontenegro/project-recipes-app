import React, { useContext } from 'react';
import Header from '../Components/Header';
import ButtonSearch from '../Components/ButtonSearch';
import ReceitasContext from '../Context/ReceitasContext';

function Bebidas() {
  const { dataApi } = useContext(ReceitasContext);
  const NUMBER = 12;
  return (
    <section>
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
    </section>
  );
}

export default Bebidas;
