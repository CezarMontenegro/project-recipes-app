import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasContext from '../Context/ReceitasContext';
import { urlIngredientsComidasNoFilter } from '../helper/helper';

function ExplorarComidasIngredientes() {
  const { getIngredientsList, ingredientsList } = useContext(ReceitasContext);
  const NUMBER = 12;

  useEffect(() => { getIngredientsList(urlIngredientsComidasNoFilter); }, []);

  return (
    <section>
      <Header title="Explorar Ingredientes" />
      {ingredientsList.meals && ingredientsList.meals.slice(0, NUMBER)
        .map(({ idIngredient, strIngredient }, index) => (
          <div
            key={ idIngredient }
            data-testid={ `${index}-ingredient-card` }
            className="card div-card col-sm-2 card-food"
          >
            <input
              className="card-img-top"
              type="image"
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}.png` }
              alt={ strIngredient }
              data-testid={ `${index}-card-img` }
              onClick={ () => handleClick(idMeal) }
            />
            <div className="card-body">
              <h5
                className="card-text"
                data-testid={ `${index}-card-name` }
              >
                {strIngredient}

              </h5>
            </div>
          </div>))}
      <Footer />
    </section>
  );
}

export default ExplorarComidasIngredientes;
