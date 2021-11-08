import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';
import ingredientAPI, { firstLetterAPI, nameAPI } from '../services/fetchAPIs';

function Provider({ children }) {
  const [radioButtonValue, setRadioButtonValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dataIngredient, setDataIngredient] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [dataFirstLetter, setDataFirstLetter] = useState([]);
  const [visibleSearch, setVisibleSarch] = useState(false);
  const getAPIingredient = async (param) => {
    setDataIngredient(await ingredientAPI(param));
  };
  const getAPIname = async (param) => {
    setDataName(await nameAPI(param));
  };
  const getAPIFirstLetter = async (param) => {
    setDataFirstLetter(await firstLetterAPI(param));
  };

  const contextValue = {
    visibleSearch,
    setVisibleSarch,
    dataIngredient,
    dataName,
    setSearchValue,
    searchValue,
    getAPIname,
    getAPIingredient,
    getAPIFirstLetter,
    setRadioButtonValue,
    radioButtonValue,
    dataFirstLetter,
    setDataFirstLetter,
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
