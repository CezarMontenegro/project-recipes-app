import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';
import ingredientAPI, { categoriesData, filterCategory, firstLetterAPI,
  nameAPI } from '../services/fetchAPIs';

function Provider({ children }) {
  const [radioButtonValue, setRadioButtonValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dataApi, setDataApi] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataFilterCategory, setDataFilterCategory] = useState([]);
  const [visibleSearch, setVisibleSarch] = useState(false);

  const getAPIingredient = async (url, param) => {
    setDataApi(await ingredientAPI(url, param));
  };
  const getAPIname = async (url, param) => {
    setDataApi(await nameAPI(url, param));
  };
  const getAPIFirstLetter = async (url, param) => {
    setDataApi(await firstLetterAPI(url, param));
  };
  const getApiCategories = async (url) => {
    setDataCategories(await categoriesData(url));
  };

  const getApiFilter = async (url, param) => {
    setDataFilterCategory(await filterCategory(url, param));
  };

  const contextValue = {
    visibleSearch,
    setVisibleSarch,
    dataApi,
    setSearchValue,
    setDataApi,
    searchValue,
    getAPIname,
    getAPIingredient,
    getAPIFirstLetter,
    setRadioButtonValue,
    getApiCategories,
    dataCategories,
    radioButtonValue,
    dataFilterCategory,
    setDataFilterCategory,
    getApiFilter,
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
