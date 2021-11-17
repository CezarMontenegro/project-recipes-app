import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReceitasContext from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { urlIdFood, urlNameBebidas } from '../helper/helper';
import FoodProgresso from '../Components/FoodProgresso';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ProgressoComidas() {
  const { dataIdCard, getCardById, getAPIname } = useContext(ReceitasContext);
  const { id } = useParams();
  const [isFavorite, setIsfavorite] = useState(false);

  useEffect(() => { getCardById(urlIdFood, id); }, []);
  useEffect(() => { getAPIname(urlNameBebidas, ''); }, []);

  useEffect(() => {
    if (!localStorage.favoriteRecipes) {
      setIsfavorite(false);
    } else {
      const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (dataIdCard.meals) {
        const verifyIfExists = getStorage.some((obj) => obj.id
      === dataIdCard.meals[0].idMeal);
        setIsfavorite(verifyIfExists);
      }
    }
  }, [dataIdCard]);

  const handleFavorite = () => {
    setIsfavorite(!isFavorite);
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([{
          id: dataIdCard.meals && dataIdCard.meals[0].idMeal,
          type: 'comida',
          area: dataIdCard.meals && dataIdCard.meals[0].strArea,
          category: dataIdCard.meals && dataIdCard.meals[0].strCategory,
          alcoholicOrNot: '',
          name: dataIdCard.meals && dataIdCard.meals[0].strMeal,
          image: dataIdCard.meals && dataIdCard.meals[0].strMealThumb,
        }]));
    } else {
      const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      getStorage.concat({
        id: dataIdCard.meals && dataIdCard.meals[0].idMeal,
        type: 'comida',
        area: dataIdCard.meals && dataIdCard.meals[0].strArea,
        category: dataIdCard.meals && dataIdCard.meals[0].strCategory,
        alcoholicOrNot: '',
        name: dataIdCard.meals && dataIdCard.meals[0].strMeal,
        image: dataIdCard.meals && dataIdCard.meals[0].strMealThumb,
      });
      localStorage.setItem('favoriteRecipes',
        JSON.stringify(getStorage));
    }
  };

  return (
    <section>
      {dataIdCard.meals && dataIdCard.meals
        .map(({ idMeal, strMeal, strMealThumb }) => (
          <div
            key={ idMeal }
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid="recipe-photo"
              className="section-detalhes-img"
            />
            <div className="card-body card-detalhes">
              <h5 className="card-text" data-testid="recipe-title">{strMeal}</h5>
              <div>
                <input
                  type="image"
                  className="d-inline-block align-top"
                  data-testid="share-btn"
                  src={ shareIcon }
                  alt="Ícone de compartilhamento"
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
            <FoodProgresso />
          </div>
        )) }
    </section>
  );
}

export default ProgressoComidas;
