import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import ButtonSearch from '../Components/ButtonSearch';
import ReceitasContext from '../Context/ReceitasContext';
import { urlCategoriesDrinks, urlIngredientsBebidasInital,
  urlFilterDrink } from '../helper/helper';
import Footer from '../Components/Footer';
import CardDrink from '../Components/CardDrink';
import CardDrinkFilter from '../Components/CardDrinkFilter';

function Bebidas() {
  const { getAPIingredient, getApiCategories,
    dataCategories, getApiFilter } = useContext(ReceitasContext);
  const maxCategories = 5;
  const [isFilter, setIsFilter] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => { getAPIingredient(urlIngredientsBebidasInital, ''); }, []);
  useEffect(() => { getApiCategories(urlCategoriesDrinks); }, []);

  const handleClickCategory = (param) => {
    getApiFilter(urlFilterDrink, param);
    if (param === category) {
      setIsFilter(false);
    }
    if (param !== category) {
      setCategory(param);
      setIsFilter(true);
    }
  };

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
            onClick={ () => handleClickCategory(strCategory) }
          >
            {strCategory}
          </button>
        ))}
      { isFilter ? <CardDrinkFilter /> : <CardDrink />}
      <Footer />
    </div>
  );
}

export default Bebidas;
