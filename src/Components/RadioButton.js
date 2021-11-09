/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';
import urlLetraBebidas, { urlIngredientsBebidas, urlIngredientsComidas,
  urlLetraComidas, urlNameBebidas, urlNameComidas } from '../helper/helper';

function RadioButton() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const { setRadioButtonValue, dataApi,
    searchValue, radioButtonValue,
    getAPIingredient, getAPIname, getAPIFirstLetter } = useContext(ReceitasContext);

  const handleChange = ({ target }) => {
    setRadioButtonValue(target.value);
  };

  const redirectPage = () => {
    if (pathname === '/comidas') {
      history.push(`/comidas/${dataApi.meals[0].idMeal}`);
    } else {
      history.push(`/bebidas/${dataApi.drinks[0].idDrink}`);
    }
  };

  useEffect(() => {
    if (dataApi.meals && dataApi.meals.length === 1) redirectPage();
  }, [dataApi]);

  useEffect(() => {
    if (dataApi.drinks && dataApi.drinks.length === 1) redirectPage();
  }, [dataApi]);

  const verifyRadioValue = () => {
    if (radioButtonValue === 'ingredient') {
      getAPIingredient(pathname === '/comidas'
        ? urlIngredientsComidas : urlIngredientsBebidas, searchValue);
    }
    if (radioButtonValue === 'name') {
      getAPIname(pathname === '/comidas'
        ? urlNameComidas : urlNameBebidas, searchValue);
    }
    if (radioButtonValue === 'first-letter' && searchValue.length === 1) {
      getAPIFirstLetter(pathname === '/comidas'
        ? urlLetraComidas : urlLetraBebidas, searchValue);
    }
    if (radioButtonValue === 'first-letter' && searchValue.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const handleClick = () => {
    verifyRadioValue();
  };

  return (
    <div>
      <input
        type="radio"
        data-testid="ingredient-search-radio"
        name="radio-input"
        onChange={ handleChange }
        value="ingredient"
      />
      Ingrediente
      <input
        type="radio"
        data-testid="name-search-radio"
        name="radio-input"
        onChange={ handleChange }
        value="name"
      />
      Nome
      <input
        type="radio"
        data-testid="first-letter-search-radio"
        name="radio-input"
        onChange={ handleChange }
        value="first-letter"
      />
      {' '}
      Primeira letra
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default RadioButton;
