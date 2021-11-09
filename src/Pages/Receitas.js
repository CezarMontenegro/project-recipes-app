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
      {dataApi.meals && dataApi.meals.slice(0, NUMBER)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
            <img
              className="img-meals"
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
            {console.log(index)}
          </div>))}
      <Footer />
    </div>
  );
}

export default Receitas;
