import React from "react";
import styles from "./Donate.module.css";

function Donate() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Seja doador</h2>
                <p className={styles.description}>
                    Com a sua ajuda, podemos continuar resgatando e protegendo animais exóticos em situação de risco.
                    Ao doar, você contribui diretamente para que mais vidas sejam salvas e reabilitadas. Faça parte dessa
                    causa, seu apoio é fundamental!
                </p>
                <p className={styles.descriptionBold}>
                    Doe agora e ajude a ONGÓTICOS a continuar com seus resgates e projetos de preservação!
                </p>
                <button className={styles.donateButton}>Quero fazer uma doação</button>
            </div>
        </div>
    );
}

export default Donate;