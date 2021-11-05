import React from 'react';

function Header() {
  return (
    <header>
      <button
        type="button"
        name="profile"
        data-testid="profile-top-btn"
      >
        Profile
      </button>

      <h2
        data-testid="page-title"
      >
        Comidas
      </h2>

      <button
        type="button"
        name="search"
        data-testid="search-top-btn"
      >
        Lupa
      </button>
    </header>
  );
}

export default Header;
