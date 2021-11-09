import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';

function RadioButton() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const { setRadioButtonValue,
    searchValue, radioButtonValue,
    getAPIingredient, getAPIname,
    getAPIFirstLetter } = useContext(ReceitasContext);

  const urlIngredientsComidas = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
  const urlNameComidas = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlLetraComidas = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

  const urlIngredientsBebidas = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  const urlNameBebidas = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlLetraBebidas = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

  const handleChange = ({ target }) => {
    setRadioButtonValue(target.value);
  };

  const handleClick = async () => {
    if (radioButtonValue === 'ingredient') {
      await getAPIingredient(pathname === '/comidas'
        ? urlIngredientsComidas : urlIngredientsBebidas, searchValue);
    }
    if (radioButtonValue === 'name') {
      await getAPIname(pathname === '/comidas'
        ? urlNameComidas : urlNameBebidas, searchValue);
    }
    if (radioButtonValue === 'first-letter' && searchValue.length === 1) {
      await getAPIFirstLetter(pathname === '/comidas'
        ? urlLetraComidas : urlLetraBebidas, searchValue);
    }
    if (radioButtonValue === 'first-letter' && searchValue.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
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
