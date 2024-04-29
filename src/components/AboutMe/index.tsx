
import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <main className={styles.container}>
      <div>
        <div>
          <p id="aboutMe">🧐 Sobre mim</p>
        </div>
      </div>
      <p className={styles.description}>
        Possuo 16 anos de experiência em tecnologia, sendo 12 anos dedicados ao desenvolvimento 
        cobol - mainframe e 4 anos ao desenvolvimento web e mobile. 
        Tenho uma paixão por criar soluções criativas e inovadoras para atender às necessidades 
        dos usuários. Durante minha trajetória profissional, enfrentei diversos projetos 
        desafiadores e contribuí para a criação de produtos que trouxeram benefícios significativos 
        tanto para as empresas quanto para os usuários finais. Além disso, estou constantemente atualizado 
        com as últimas tendências e tecnologias do mercado, garantindo que minhas habilidades estejam sempre em evolução.
      </p>
    </main>

  );
}
