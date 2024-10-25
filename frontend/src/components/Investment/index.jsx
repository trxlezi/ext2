import React, { useState } from "react";
import styles from "./Investment.module.css";
import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";

function Investment() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Como seu recurso é investido</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}></div>
        <div className={styles.faqs}>
          <div className={styles.faqItem} onClick={() => toggleFAQ(0)}>
            <h2 className={styles.question}>Proteção da fauna pantaneira</h2>
            {openIndex === 0 ? (
              <img src={arrowDown} alt="" className={styles.arrows} />
            ) : (
              <img src={arrowUp} alt="" className={styles.arrows} />
            )}
            {openIndex === 0 && (
              <p className={styles.answer}>
                Seu apoio nos ajuda a proteger a fauna do Pantanal,
                implementando ações de resgate e cuidados veterinários.
              </p>
            )}
          </div>
          <div className={styles.faqItem} onClick={() => toggleFAQ(1)}>
            <h2 className={styles.question}>Campanhas de conscientização</h2>
            {openIndex === 1 ? (
              <img src={arrowDown} alt="" className={styles.arrows} />
            ) : (
              <img src={arrowUp} alt="" className={styles.arrows} />
            )}
            {openIndex === 1 && (
              <p className={styles.answer}>
                Contribuímos para a educação ambiental através de campanhas e
                atividades que conscientizam sobre a importância da preservação.
              </p>
            )}
          </div>
          <div className={styles.faqItem} onClick={() => toggleFAQ(2)}>
            <h2 className={styles.question}>
              Cuidados e bem-estar de animais que não podem retornar para a
              natureza
            </h2>
            {openIndex === 2 ? (
              <img src={arrowDown} alt="" className={styles.arrows} />
            ) : (
              <img src={arrowUp} alt="" className={styles.arrows} />
            )}
            {openIndex === 2 && (
              <p className={styles.answer}>
                Cuidamos dos animais que não podem ser reintegrados à natureza,
                proporcionando um ambiente seguro e adequado.
              </p>
            )}
          </div>
          <button className={styles.donateButton}>Fazer uma doação</button>
        </div>
      </div>
    </div>
  );
}

export default Investment;
