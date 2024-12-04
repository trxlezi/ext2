import React from 'react';
import styles from './AnimalsGrid.module.css';
import lolaImg from '../../assets/lola.jpg';
import bobImg from '../../assets/bob.jpg';
import miaImg from '../../assets/mia.jpg';

function AnimalsGrid() {
  const animals = [
    { image: lolaImg, name: 'Lola', species: 'Cobra', age: 2, careDuration: 6 },
    { image: bobImg, name: 'Bob', species: 'Camaleão', age: 4, careDuration: 12 },
    { image: miaImg, name: 'Mia', species: 'Iguana', age: 3, careDuration: 9 },
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Animais Resgatados</h1>
      <div className={styles.gridContainer}>
        {animals.map((animal, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.image} src={animal.image} alt={animal.name} />
            <div className={styles.cardContent}>
              <h3>{animal.name}</h3>
              <p><strong>Espécie:</strong> {animal.species}</p>
              <p><strong>Idade:</strong> {animal.age} anos</p>
              <p><strong>Tempo de cuidado:</strong> {animal.careDuration} meses</p>
              <button className={styles.button}>Saiba mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalsGrid;
