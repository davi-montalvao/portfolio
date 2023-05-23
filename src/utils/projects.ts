import jogoVelha from '../components/assets/jogo-da-velha.png'
import dtmoney from '../components/assets/dtmoney.png'
import marvel from '../components/assets/marvel.png'
import portfolio from '../components/assets/portfolio.png'



const projects = [
  {
    id: 1,
    title: `Jogo da velha`,
    description: `Jogo de estratégia simples e popular, jogado em um tabuleiro de 3x3, onde dois jogadores, 
                  X e O, alternam-se para marcar suas respectivas jogadas no tabuleiro.`,
    image: jogoVelha,
    codeLink: 'https://github.com/davi-montalvao/jogo-da-velha',
    liveLink: 'https://leandronunesdev.github.io/marvel/',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'A aplicação portfolio é uma apresentação concisa e impactante sobre minhas experiências, habilidades e projetos. Feito com componentes React, Typescript e Sass.',
    image: portfolio,
    codeLink: 'https://github.com/davi-montalvao/portfolio',
    liveLink: '',
  },
  {
    id: 3,
    title: 'Dt Money',
    description: `A aplicação "dt money" é um projeto desenvolvido utilizando React.js, que faz parte do segundo capítulo do módulo "Ignite" da escola Rocktseat.`,
    image: dtmoney,
    codeLink: 'https://github.com/davi-montalvao/dt-money',
    liveLink: '',
  },
  {
    id: 4,
    title: 'Marvel',
    description: `Site de busca de quadrinhos usando a API da Marvel. Feito com componentes React, TypeScript e Styled Components.`,
    image: marvel,
    codeLink: 'https://github.com/davi-montalvao/marvel',
    liveLink: '',
  },

]

export { projects }