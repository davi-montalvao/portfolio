import Image, { StaticImageData } from 'next/image'
import jogoVelha from '../../components/assets/jogo-da-velha.png'
import dtmoney from '../../components/assets/dtmoney.png'
import styles from "./styles.module.scss";


interface Project {
  id: number,
  title: string,
  description: string,
  image: StaticImageData,
  liveLink: string,
  codeLink: string
}


export function Portfolio() {

 const projects = [
    {
      id: 8,
      title: `Jogo da velha`,
      description: `Jogo de estratégia simples e popular, jogado em um tabuleiro de 3x3, onde dois jogadores, 
                    X e O, alternam-se para marcar suas respectivas jogadas no tabuleiro.`,
      image: jogoVelha,
      codeLink: 'https://github.com/davi-montalvao/jogo-da-velha',
      liveLink: 'https://leandronunesdev.github.io/marvel/',
    },
    {
      id: 7,
      title: 'Dt Money',
      description: `A aplicação "dt money" é um projeto desenvolvido utilizando React.js, que faz parte do segundo capítulo do módulo "Ignite" da escola Rocktseat.`,
      image: dtmoney,
      codeLink: 'https://github.com/davi-montalvao/dt-money',
      liveLink: '',
    }
  ]



  return (
    <>
    <h1 className={styles.title} id="portfolio">🔗 Portfólio</h1>
    <div className={styles.container}>
    <>
    {projects !== null &&
     projects.map((item: Project) => (
      <div>
    
        <Image className={styles.picture} src={item.image} alt="logo linkedin" /> 
        <div>

        <h1>{item.title}</h1>
        <p className={styles.description}>
          {item.description}
        </p>
        <a href={item.codeLink} target='_blank' rel='noreferrer'>
           <button>Veja no Github</button>
        </a>
        </div>
      </div>
       
       ))}
          
       </>
    </div>
     
    </>
  );
}