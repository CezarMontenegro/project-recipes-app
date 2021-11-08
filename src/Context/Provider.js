import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';

function Provider({ children }) {
  const [visibleSearch, setVisibleSarch] = useState(false);
  const contextValue = {
    visibleSearch,
    setVisibleSarch,
  };

  return (
    <ReceitasContext.Provider value={ contextValue }>
      { children }
    </ReceitasContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
