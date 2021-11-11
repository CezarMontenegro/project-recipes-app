import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const Loading = () => (
  <div>
    <img
      alt="foto"
      data-testid="recipe-photo"
      className="section-detalhes-img"
    />
    <div className="card-body card-detalhes">
      <h5 className="card-text" data-testid="recipe-title">Bebida</h5>
      <div>
        <img
          className="d-inline-block align-top"
          data-testid="favorite-btn"
          src={ blackHeartIcon }
          alt="Ícone de compartilhamento"
        />
        <img
          className="d-inline-block align-top"
          data-testid="share-btn"
          src={ shareIcon }
          alt="Ícone de favoritar"
        />
      </div>
    </div>
    <div>
      <h5 data-testid="recipe-category">Categoria</h5>
      <span>
        <h5 data-testid="0-ingredient-name-and-measure">Ingredientes</h5>
      </span>
      <h5>Instructions</h5>
      <p data-testid="instructions">Instrução</p>
      <h3 data-testid="0-recomendation-card">Recomendadas</h3>
      <video controls width="360px" data-testid="video">
        <source type="video/mp4" />
        <track kind="captions" />
      </video>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  </div>
);

export default Loading;
