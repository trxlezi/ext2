import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>ONGÓTICOS</span>
            <nav>
                {/* Normalmente não se utiliza o a no react, utiiza o LINK (NÃO SEI AINDA COMO USA) */}
                <a href="#">Home</a>
                <a href="#">Lista</a>
                <a href="#">Sobre</a>
                <a href="#">Doação</a>
            </nav>
        </header>
    );
}

export default Header;