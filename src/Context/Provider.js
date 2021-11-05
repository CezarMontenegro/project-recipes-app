import React from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './Context';

function Provider({ children }) {
  const contextValue = {

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
