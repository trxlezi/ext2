import React from "react";
import styles from "./DonatePage.module.css";

function DonatePage() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Faça sua doação</h2>
                <p className={styles.intro}>
                    Hoje a ONGÓTICOS é a maior organização de proteção animal do Brasil. Atua há XX anos pela defesa dos direitos e respeito aos animais. Entenda como você pode nos ajudar a continuar lutando por eles.
                </p>
            </div>
            <div className={styles.cards}>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <h3>Doando R$ 10,00</h3>
                        <p>Você ajuda a impulsionar nossas campanhas de conscientização</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Doando R$ 20,00</h3>
                        <p>Você ajuda a alimentar um animal em abrigos parceiros e com os custos de monitoramento de fauna</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Doando R$ 50,00</h3>
                        <p>Você ajuda com medicamentos mensais dos animais em abrigos parceiros e animais silvestres em reabilitação no Pantanal</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <h3>Doando R$ 100,00</h3>
                        <p>Você ajuda com todos os custos de uma castração segura e nos cuidados médicos veterinários das onças sob os nossos cuidados</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Doando + de R$ 100,00</h3>
                        <p>Nós conseguimos expandir nossos mutirões de castração e auxilia na manutenção da nossa Base de Atendimento Ampara Pantanal</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Doe pelo PIX</h3>
                        <p>Acesse a área Pix dentro do app do seu banco e aponte para o QR Code abaixo:</p>
                        <img className={styles.qrCode} src="../../assets/qrCode.jpg" alt="QR Code para doação pelo PIX"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonatePage;
