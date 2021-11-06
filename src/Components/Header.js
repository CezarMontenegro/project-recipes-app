import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [searchBar, setSearchBar] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

  const openSearchBar = () => {
    setSearchBar(!setSearchBar);
  };

  // https://dev.to/raaynaldo/react-router-usehistory-uselocation-and-useparams-10cd
  const handleTitle = () => {
    switch (pathname) {
    case '/comidas':
      return 'Comidas';
    case '/bebidas':
      return 'Bebidas';
    case '/explorar/comidas':
      return 'Explorar Comidas';
    case '/explorar/bebidas':
      return 'Explorar Bebidas';
    case '/receitas-feitas':
      return 'Receitas Feitas';
    case '/receitas-favoritas':
      return 'Receitas Favoritas';
    case '/perfil':
      return 'Perfil';
    case '/explorar':
      return 'Explorar';
    case '/explorar/comidas/area':
      return 'Explorar Origem ';
    case '/explorar/comidas/ingredientes':
      return 'Explorar Ingredientes ';
    case '/explorar/bebidas/ingredientes':
      return 'Explorar Ingredientes ';
    default:
      return 'Comidas';
    }
  };

  const renderButton = () => (
    <button
      type="button"
      onClick={ openSearchBar }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Lupa: Botão de pesquisa"
      />
    </button>
  );

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
        { handleTitle() }
      </h2>
      {pathname === '/explorar' || pathname === '/explorar/comidas'
      || pathname === '/explorar/bebidas' || pathname === '/receitas-feitas'
      || pathname === '/explorar/bebidas/ingredientes'
      || pathname === '/perfil' || pathname === '/receitas-favoritas'
      || pathname === '/explorar/comidas/ingredientes'
        ? '' : renderButton()}
      { searchBar }
    </header>
  );
}

export default Header;
