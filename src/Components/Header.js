import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import ButtonHeader from './ButtonHeader';

function Header({ title }) {
  const history = useHistory();
  const { location: { pathname } } = history;
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
        ? '' : <ButtonHeader /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
