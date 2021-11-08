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
  const getAPIingredient = async (url, param) => {
    setDataIngredient(await ingredientAPI(url, param));
  };
  const getAPIname = async (url, param) => {
    setDataName(await nameAPI(url, param));
  };
  const getAPIFirstLetter = async (url, param) => {
    setDataFirstLetter(await firstLetterAPI(url, param));
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
