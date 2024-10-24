import React from "react";
import styles from "./ImpactPage.module.css";

function ImpactPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>Nosso Impacto</h1>
            <div className={styles.section}>
                <h2 className={styles.header}>paçaro</h2>
                <ul className={styles.list}>
                    <li>+297 toneladas de ração doadas</li>
                    <li>60k animais castrados</li>
                    <li>600k animais amparados com doações de medicamentos e vacinas</li>
                    <li>+24.5k animais adotados</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.header}>Silvestre</h2>
                <ul className={styles.list}>
                    <li>BAAP única base de atendimento à fauna do Pantanal norte</li>
                    <li>+750 animais silvestres diretamente impactados</li>
                    <li>+100k pessoas impactadas diretamente com ações de educação ambiental</li>
                    <li>+12m de pessoas impactadas com campanhas digitais em 2023</li>
                </ul>
            </div>
        </div>
    );
}

export default ImpactPage;
