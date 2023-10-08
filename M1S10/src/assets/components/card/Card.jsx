import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './card.css';


function Card({ nome, laboratorio, preco, favorito, onFavoritarClick }) {
  return (
    <div className="card-medicamento">
      <a onClick={onFavoritarClick} className={`favoritar-button ${favorito ? 'favorito' : ''}`}>
        <FontAwesomeIcon icon={faHeart} style={{ color: favorito ? 'red' : 'gray' }} />
      </a>
      <div className="card-medicamento-info">
        <img
          src="caminho-para-imagem-genérica.jpg" // Use uma imagem genérica
          alt="Imagem de Medicamento"
          className="card-medicamento-img"
        />
        <div className="card-medicamento-text">
          <h3>{nome}</h3>
          <p>Laboratório: {laboratorio}</p>
          <p>Preço: R$ {preco}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
