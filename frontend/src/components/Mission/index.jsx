import React from "react";
// import missionPic from "../../assets/missionPic.jpg"
import styles from "./Mission.module.css";

function Mission() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Missão</h1>
        <p className={styles.description}>
          Lutar pela defesa dos direitos animais por meio de ações ativas e
          preventivas, que valorizem práticas sustentáveis e potencializem
          forças para uma transformação integrada.
        </p>
        <button className={styles.contributeButton}>Contribuir</button>
      </div>
      <div className={styles.imageContainer}>
        {/* <img src={missionPic} alt="" /> */}
      </div>
    </section>
  );
}

export default Mission;
