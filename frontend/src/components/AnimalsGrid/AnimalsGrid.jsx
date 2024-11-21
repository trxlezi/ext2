import React from 'react';
import CardAnimals from '../CardAnimals/CardAnimals';
import './AnimalsGrid.css';
import lolaImg from '../../assets/lola.jpg'
import bobImg from '../../assets/bob.jpg'
import miaImg from '../../assets/mia.jpg'

function AnimalsGrid() {

  const animals = [
    { image: lolaImg, name: 'Lola', species: 'Cobra', age: 2, careDuration: 6 },
    { image: bobImg, name: 'Bob', species: 'Camaleão', age: 4, careDuration: 12 },
    { image: miaImg, name: 'Mia', species: 'Iguana', age: 3, careDuration: 9 },
  ];
  return (
    <div className="grid-container">
      {animals.map((animal) => (
        <CardAnimals
          image={animal.image} // Passando a propriedade da imagem
          key={animal.name}
          name={animal.name}
          species={animal.species}
          age={animal.age}
          careDuration={animal.careDuration}
        />
      ))}
    </div>
  );
}

export default AnimalsGrid;
