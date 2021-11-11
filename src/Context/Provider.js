import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';
import ingredientAPI, { categoriesData, cardById, filterCategory, firstLetterAPI,
  nameAPI } from '../services/fetchAPIs';

function Provider({ children }) {
  const [radioButtonValue, setRadioButtonValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [dataApi, setDataApi] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataFilterCategory, setDataFilterCategory] = useState([]);
  const [dataIdCard, setDataIdCard] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [id, setId] = useState('');

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

  const getCardById = async (url, param) => {
    setDataIdCard(await cardById(url, param));
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
    setDataIdCard,
    dataIdCard,
    getCardById,
    ingredients,
    setIngredients,
    id,
    setId,
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
