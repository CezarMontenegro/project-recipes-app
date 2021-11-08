import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import ButtonSearch from './ButtonSearch';
import ReceitasContext from '../Context/ReceitasContext';
import RadioButton from './RadioButton';

function Header({ title }) {
  const history = useHistory();
  const { visibleSearch, setSearchValue } = useContext(ReceitasContext);
  const { location: { pathname } } = history;

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <header>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Ícone de perfil"
        />
      </Link>

      <h2
        data-testid="page-title"
      >
        { title }
      </h2>
      {pathname === '/explorar' || pathname === '/explorar/comidas'
      || pathname === '/explorar/bebidas' || pathname === '/receitas-feitas'
      || pathname === '/explorar/bebidas/ingredientes'
      || pathname === '/perfil' || pathname === '/receitas-favoritas'
      || pathname === '/explorar/comidas/ingredientes'
        ? '' : <ButtonSearch /> }
      { visibleSearch
        && <input
          name="searchInput"
          type="text"
          data-testid="search-input"
          onChange={ handleChange }
        />}
      <RadioButton />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
