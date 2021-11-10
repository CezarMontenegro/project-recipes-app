/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import ButtonSearch from '../Components/ButtonSearch';
import CardFood from '../Components/CardFood';
import CardFoodFilter from '../Components/CardFoodFilter';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';
import { urlCategoriesFood,
  urlIngredientsComidas, urlFilterFood } from '../helper/helper';

function Receitas() {
  const { getAPIingredient, getApiCategories,
    dataCategories, dataFilterCategory, getApiFilter } = useContext(ReceitasContext);
  const maxCategories = 5;
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => { getAPIingredient(urlIngredientsComidas, ''); }, []);
  useEffect(() => { getApiCategories(urlCategoriesFood); }, []);

  const handleClickCategory = (param) => {
    getApiFilter(urlFilterFood, param);
  };

  useEffect(() => {
    if (dataFilterCategory.meals
      && dataFilterCategory.meals.length > 0) setIsFilter(!isFilter);
  }, [dataFilterCategory]);

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
            onClick={ () => handleClickCategory(strCategory) }
          >
            {strCategory}
          </button>
        ))}
      { isFilter ? <CardFoodFilter /> : <CardFood />}
      <Footer />
    </div>
  );
}

export default Receitas;
