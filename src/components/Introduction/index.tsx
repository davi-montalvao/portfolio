import Image from 'next/image'
import logoLinkedin from '../../components/assets/logo-linkedin.svg'
import logoGithub from '../../components/assets/logo-github.svg'
import profile from '../../components/assets/foto-perfil.jpeg'

import styles from "./styles.module.scss";

export function Introduction() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.introduction}>
        <h1 className={styles.title}>
          👋 Saudações!
        </h1>
        <p>Davi Montalvão</p>
        <p>Front-end developer </p>
        <div>
          <a 
            href="https://www.linkedin.com/in/davi-montalvao-dev/"
            target="_blank"
            rel="noreferrer"  
          >
            <Image src={logoLinkedin} alt="logo linkedin" />
          </a>
          <a 
            href="https://github.com/davi-montalvao"
            target="_blank"
            rel="noreferrer"  
          >
          <Image src={logoGithub}  alt="logo github" />
          </a>
        </div>
      </div>
      <Image className={styles.picture} src={profile} alt="logo github" />
    </div>
  );
}



