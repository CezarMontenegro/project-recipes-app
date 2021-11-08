import React from 'react';
import searchIcon from '../images/searchIcon.svg';

const ButtonHeader = () => (
  <button
    type="button"
  >
    <img
      data-testid="search-top-btn"
      src={ searchIcon }
      alt="Lupa: Botão de pesquisa"
    />
  </button>
);

export default ButtonHeader;
