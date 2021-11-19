import React from 'react';
import CardDrinkFavorite from '../Components/CardDrinkFavorite';
import CardFoodFavorite from '../Components/CardFoodFavorite';
import Header from '../Components/Header';

function ReceitasFavoritas() {
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return (
    <section>
      <Header title="Receitas Favoritas" />
      <section>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        {getFavoriteRecipes
          .map(({ name, type, category, area, image, id, alcoholicOrNot }, index) => (
            <section key={ id }>
              { type === 'comida' ? <CardFoodFavorite
                name={ name }
                category={ category }
                image={ image }
                area={ area }
                index={ index }
                id={ id }
              />
                : (
                  <CardDrinkFavorite
                    alcoholicOrNot={ alcoholicOrNot }
                    name={ name }
                    image={ image }
                    index={ index }
                  />)}
            </section>
          )) }
      </section>
    </section>
  );
}

export default ReceitasFavoritas;
