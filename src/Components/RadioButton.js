import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';

function RadioButton() {
  const { setRadioButtonValue,
    searchValue, radioButtonValue,
    getAPIingredient, getAPIname, getAPIFirstLetter } = useContext(ReceitasContext);

  const handleChange = ({ target }) => {
    setRadioButtonValue(target.value);
  };

  const handleClick = () => {
    if (radioButtonValue === 'ingredient') {
      getAPIingredient(searchValue);
    }
    if (radioButtonValue === 'name') {
      getAPIname(searchValue);
    }
    if (radioButtonValue === 'first-letter' && searchValue.length === 1) {
      getAPIFirstLetter(searchValue);
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
