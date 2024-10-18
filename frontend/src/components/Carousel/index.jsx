import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const images = [image1, image2, image3];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300); // Duracao da animação (300ms)
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300); // Duracao da animação (300ms)
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={goToPrevious}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex}`}
          className={`${styles.image} ${fade ? styles.fadeIn : styles.fadeOut}`}
        />
      </div>
      <button className={styles.nextButton} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageCarousel;
