/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { urlIdDrink, urlNameComidas } from '../helper/helper';
import DrinksIngredients from '../Components/DrinksIngredients';

const copy = require('clipboard-copy');

function BebidasDetalhes() {
  const { dataIdCard, getCardById, getAPIname } = useContext(ReceitasContext);
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const [isFavorite, setIsfavorite] = useState(false);

  useEffect(() => { getCardById(urlIdDrink, id); }, []);
  useEffect(() => { getAPIname(urlNameComidas, ''); }, []);
  useEffect(() => {
    if (!localStorage.favoriteRecipes) {
      setIsfavorite(false);
    } else {
      const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (dataIdCard.drinks) {
        const verifyIfExists = getStorage.some((obj) => obj.id
      === dataIdCard.drinks[0].idDrink);
        setIsfavorite(verifyIfExists);
      }
    }
  }, [dataIdCard]);

  const handleShare = () => {
    copy(pathname);
    global.alert('Link Copiado!');
  };

  const handleFavorite = () => {
    setIsfavorite(!isFavorite);
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([{
          id: dataIdCard.drinks && dataIdCard.drinks[0].idDrink,
          type: 'bebida',
          area: '',
          category: dataIdCard.drinks && dataIdCard.drinks[0].strCategory,
          alcoholicOrNot: dataIdCard.drinks && dataIdCard.drinks[0].strAlcoholic,
          name: dataIdCard.drinks && dataIdCard.drinks[0].strDrink,
          image: dataIdCard.drinks && dataIdCard.drinks[0].strDrinkThumb,
        }]));
    } else {
      const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      getStorage.concat({
        id: dataIdCard.drinks && dataIdCard.drinks[0].idDrink,
        type: 'bebida',
        area: '',
        category: dataIdCard.drinks && dataIdCard.drinks[0].strCategory,
        alcoholicOrNot: dataIdCard.drinks && dataIdCard.drinks[0].strAlcoholic,
        name: dataIdCard.drinks && dataIdCard.drinks[0].strDrink,
        image: dataIdCard.drinks && dataIdCard.drinks[0].strDrinkThumb,
      });
      localStorage.setItem('favoriteRecipes',
        JSON.stringify(getStorage));
    }
  };

  return (
    <section>
      {dataIdCard.drinks && dataIdCard.drinks
        .map(({ strDrink, idDrink, strDrinkThumb }) => (
          <div
            key={ idDrink }
          >
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid="recipe-photo"
              className="section-detalhes-img"
            />
            <div className="card-body card-detalhes">
              <h5 className="card-text" data-testid="recipe-title">{strDrink}</h5>
              <div>
                <input
                  type="image"
                  className="d-inline-block align-top"
                  data-testid="share-btn"
                  src={ shareIcon }
                  alt="Ícone de compartilhamento"
                  onClick={ handleShare }
                />
                <input
                  type="image"
                  className="d-inline-block align-top"
                  data-testid="favorite-btn"
                  src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
                  alt="Ícone de favoritar"
                  onClick={ handleFavorite }
                />
              </div>
            </div>
            <DrinksIngredients />
          </div>
        )) }
    </section>
  );
}

export default BebidasDetalhes;
