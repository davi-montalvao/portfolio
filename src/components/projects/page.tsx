"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

// Importação direta das imagens
import jogoDaVelhaImage from "@/assets/jogo-da-velha.png"
import portfolioImage from "@/assets/leiaute-web.png"
import dtMoneyImage from "@/assets/dt-money.png"
import marvelImage from "@/assets/marvel.png"

const projects = [
  {
    title: "Jogo da velha",
    description: "Jogo de estratégia simples e popular, jogado em um tabuleiro de 3x3, onde dois jogadores, X e O, alternam-se para marcar suas respectivas jogadas no tabuleiro.",
    image: jogoDaVelhaImage,
    github: "https://github.com/davi-montalvao/jogo-da-velha"
  },
  {
    title: "Portfólio",
    description: "A aplicação portfolio é uma apresentação concisa e impactante sobre minhas experiências, habilidades e projetos. Feito com componentes React, Typescript e Sass.",
    image: portfolioImage,
    github: "https://github.com/davi-montalvao/portfolio"
  },
  {
    title: "Dt Money",
    description: "A aplicação 'dt money' é um projeto desenvolvido utilizando React.js, que faz parte do segundo capítulo do módulo 'Ignite' da escola Rocktseat.",
    image: dtMoneyImage,
    github: "https://github.com/davi-montalvao/dt-money"
  },
  {
    title: "Marvel",
    description: "Site de busca de quadrinhos usando a API da Marvel. Feito com componentes React, TypeScript e Styled Components.",
    image: marvelImage,
    github: "https://github.com/davi-montalvao/marvel"
  }
]

export function Projects() {
  return (
    <section id="portfolio" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-lg">🔗</span>
          <h2 className="text-2xl font-bold">Portfólio</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-slate-800 bg-[#ffd95a]/20 backdrop-blur-sm">
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4 text-slate-300">
                    {project.description}
                  </CardDescription>
                  <Button variant="secondary" className="bg-[#ffd95a] text-slate-900 hover:bg-[#ffd95a]/80" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Veja no Github
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
