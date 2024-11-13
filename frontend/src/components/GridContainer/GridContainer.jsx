import React from 'react';
import CardAnimals from '../CardAnimals/CardAnimals';
import './GridContainer.css';

const animals = [
  { id: 1, name: "Lola", species: "Iguana", age: "3 anos", careDuration: "2 meses" },
  { id: 2, name: "Tico", species: "Papagaio", age: "5 anos", careDuration: "1 ano" },
  { id: 3, name: "Spike", species: "Serpente", age: "2 anos", careDuration: "6 meses" },
];

function GridContainer() {
  return (
    <div className="grid-container">
      {animals.map((animal) => (
        <CardAnimals key={animal.id} {...animal} />
      ))}
    </div>
  );
}

export default GridContainer;