/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PropTypes from 'prop-types';

const CheckBox = ({ idValue, checkValue }) => {
  const [isChecked, setIsChecked] = useState('checked');
  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  const verifyPageFood = () => {
    if (localStorage.inProgressRecipes) {
      const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const verify = getStorage.meals[id]
        ? getStorage.meals[id].some((item) => item === checkValue)
        : false;
      console.log(verify);
      console.log(getStorage);
      setIsChecked(verify === true ? 'checked' : false);
    } else { setIsChecked(false); }
  };

  const verifyPageDrinks = () => {
    if (localStorage.inProgressRecipes) {
      const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const verify = getStorage.cocktails[id]
        ? getStorage.cocktails[id].some((item) => item === checkValue)
        : false;
      setIsChecked(verify);
    } else { setIsChecked(false); }
  };

  useEffect(() => {
    if (pathname === `/comidas/${id}/in-progress`) {
      verifyPageFood();
    } else { verifyPageDrinks(); }
  }, []);

  const addValueFoodInStorage = (value) => {
    if (!localStorage.inProgressRecipes) {
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({ cocktails: {},
          meals: { [id]: [Number(value)] } }));
    } else {
      let storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      storage = { ...storage,
        meals: { ...storage.meals,
          [id]: storage.meals[id]
            ? [...storage.meals[id], Number(value)]
            : [Number(value)] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    }
  };

  const addValueDrinkInStorage = (value) => {
    if (!localStorage.inProgressRecipes) {
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({ cocktails: { [id]: [Number(value)] },
          meals: { } }));
    } else {
      let storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      storage = { ...storage,
        cocktails: { ...storage.cocktails,
          [id]: storage.cocktails[id]
            ? [...storage.cocktails[id], Number(value)]
            : [Number(value)] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    }
  };

  const handleChange = ({ target }) => {
    if (target.checked) {
      setIsChecked('checked');
    } else { setIsChecked(false); }

    const { checked, value } = target;
    if (pathname === `/comidas/${id}/in-progress` && checked) {
      addValueFoodInStorage(value);
    }
    if (pathname !== `/comidas/${id}/in-progress` && checked) {
      addValueDrinkInStorage(value);
    }
  };

  return (
    <input
      type="checkbox"
      id={ idValue }
      onChange={ handleChange }
      defaultChecked={ isChecked }
      checked={ isChecked }
      value={ checkValue }
    />
  );
};

CheckBox.propTypes = {
  idValue: PropTypes.number.isRequired,
  checkValue: PropTypes.number.isRequired,
};

export default CheckBox;
