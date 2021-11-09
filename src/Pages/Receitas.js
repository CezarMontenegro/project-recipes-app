import React, { useContext } from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';

function Receitas() {
  const { dataApi } = useContext(ReceitasContext);
  const NUMBER = 12;
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
          </div>))}
    </div>
  );
}

export default Receitas;
