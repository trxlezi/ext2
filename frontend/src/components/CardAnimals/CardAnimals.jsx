import React from 'react';
import styles from './CardAnimals.module.css';

function CardAnimals({ image, name, species, age, careDuration }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${name} - ${species}`} />
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <p>Espécie: {species}</p>
        <p>Idade: {age} anos</p>
        <p>Tempo de cuidado: {careDuration} meses</p>
        <a href="#" className={styles.button}>
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default CardAnimals;
