import { useState  } from 'react';

import styles from "./styles.module.scss";

export function MenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`${styles.menuHamburguer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href='#aboutMe'>Sobre mim</a>
          </li>
          <li>
            <a href='#portfolio'>Portfólio</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#career'>Carreira</a>
          </li>
          <li>
            <a href='#contacts'>Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
