
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>Home</a>
        <a href='#aboutMe'>Sobre mim</a>
        <a href='#portfolio'>Portfólio</a>
        <a href='#skills'>Skills</a>
        <a href='#contacts'>Contato</a>
       </div>
    </header>
  );
}
