import React from 'react';
import './CardAnimals.css';

function CardAnimals({ name, species, age, careDuration }) {
  return (
    <div className="card">
      <img src={`images/${name.toLowerCase()}.jpg`} alt={`${name} - ${species}`} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Espécie: {species}</p>
        <p>Idade: {age}</p>
        <p>Período em cuidados: {careDuration}</p>
      </div>
    </div>
  );
}

export default CardAnimals;