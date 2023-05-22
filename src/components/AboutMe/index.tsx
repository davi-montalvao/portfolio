
import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <>
      <h1 className={styles.title} id="aboutMe">🧐 Sobre mim</h1>
      <p className={styles.description}>
        Sou um desenvolvedor frontend com mais de 15 anos de experiência em projetos de tecnologia da informação. 
        Tenho uma paixão por desenvolver soluções criativas e inovadoras para atender às necessidades dos usuários. 
        Ao longo dos anos, trabalhei em diversos projetos desafiadores e contribuí para a criação de produtos que 
        trouxeram benefícios para empresas e usuários finais. Além disso, mantenho-me atualizado com as últimas tendências 
        e tecnologias do mercado.
      </p>
    </>

  );
}
