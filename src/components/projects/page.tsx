"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Github,ArrowRight, Star, Code, Globe } from 'lucide-react'
import { TranslatedH2, TranslatedP, TranslatedSpan } from "@/components/translated-text/page"

// Importação direta das imagens
import jogoDaVelhaImage from "@/assets/jogo-da-velha.png"
import portfolioImage from "@/assets/leiaute-web.jpeg"
import dtMoneyImage from "@/assets/dt-money.png"
import marvelImage from "@/assets/marvel.png"
import batmanImage from "@/assets/batman.jpeg"
import starWars from "@/assets/star-wars.png"
import footballTeamsImage from "@/assets/football-teams.png"
import buscaCineImage from "@/assets/busca-cine.jpeg"

const categories = [
  { name: { pt: "Todos", en: "All" }, value: "all", color: "from-[#ffd95a] to-[#ff6b6b]" },
  { name: { pt: "Frontend", en: "Frontend" }, value: "frontend", color: "from-[#4ecdc4] to-[#45b7d1]" },
  { name: { pt: "Games", en: "Games" }, value: "games", color: "from-[#ff6b6b] to-[#ff8e8e]" },
  { name: { pt: "APIs", en: "APIs" }, value: "apis", color: "from-[#ffd95a] to-[#4ecdc4]" },
]

const projects = [
  {
    title: "Batman Universe",
    description: {
      pt: "Explore o mundo obscuro e complexo do Batman, de personagens icônicos a locais lendários. Interface moderna com design responsivo.",
      en: "Explore the dark and complex world of Batman, from iconic characters to legendary locations. Modern interface with responsive design."
    },
    image: batmanImage,
    github: "https://github.com/davi-montalvao/Universe-Batman",
    site: "https://universe-batman.vercel.app/",
    technologies: ["React", "TypeScript", "CSS3", "Responsivo"],
    featured: true,
    category: "Frontend"
  },
  {
    title: "Jogo da Velha",
    description: {
      pt: "Jogo de estratégia simples e popular, jogado em um tabuleiro de 3x3, onde dois jogadores, X e O, alternam-se para marcar suas respectivas jogadas.",
      en: "Simple and popular strategy game, played on a 3x3 board, where two players, X and O, take turns to mark their respective moves."
    },
    image: jogoDaVelhaImage,
    github: "https://github.com/davi-montalvao/jogo-da-velha",
    site: "https://jogo-da-velha-nu-olive.vercel.app/",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game"],
    featured: false,
    category: "Game"
  },
  {
    title: "Star Wars Explorer",
    description: {
      pt: "Interface para explorar informações detalhadas sobre o universo de Star Wars. Os usuários podem navegar por diferentes categorias de personagens, locais e veículos.",
      en: "Interface to explore detailed information about the Star Wars universe. Users can navigate through different categories of characters, locations and vehicles."
    },
    image: starWars,
    github: "https://github.com/davi-montalvao/star-wars",
    site: "https://star-wars-taupe-eta.vercel.app/",
    technologies: ["React", "API", "Styled Components", "Responsivo"],
    featured: true,
    category: "Frontend"
  },
  {
    title: "Portfólio Profissional",
    description: {
      pt: "Aplicação portfolio é uma apresentação concisa e impactante sobre minhas experiências, habilidades e projetos. Feito com componentes React, Typescript e Sass.",
      en: "Portfolio application is a concise and impactful presentation about my experiences, skills and projects. Made with React components, TypeScript and Sass."
    },
    image: portfolioImage,
    github: "https://github.com/davi-montalvao/portfolio",
    site: "https://www.davimontalvao.com.br/",
    technologies: ["React", "TypeScript", "Sass", "Responsivo"],
    featured: true,
    category: "Portfolio"
  },
  {
    title: "DT Money",
    description: {
      pt: "Aplicação de controle financeiro desenvolvida utilizando React.js, que faz parte do segundo capítulo do módulo 'Ignite' da escola Rocktseat.",
      en: "Financial control application developed using React.js, which is part of the second chapter of the 'Ignite' module from Rocktseat school."
    },
    image: dtMoneyImage,
    github: "https://github.com/davi-montalvao/dt-money",
    site: "https://dt-money-phi-self.vercel.app/",
    technologies: ["React", "TypeScript", "Styled Components", "Financeiro"],
    featured: false,
    category: "Financeiro"
  },
  {
    title: "Marvel Comics",
    description: {
      pt: "Site de busca de quadrinhos usando a API da Marvel. Feito com componentes React, TypeScript e Styled Components.",
      en: "Comic search site using the Marvel API. Made with React components, TypeScript and Styled Components."
    },
    image: marvelImage,
    github: "https://github.com/davi-montalvao/marvel",
    site: "https://marvel-black-six.vercel.app/",
    technologies: ["React", "TypeScript", "API", "Comics"],
    featured: false,
    category: "Entertainment"
  },
  {
    title: "Football Teams",
    description: {
      pt: "Aplicativo web para formar times de futebol balanceados automaticamente. Suporta Futsal, Society e Campo com diferentes posições e sistema de avaliação de habilidades.",
      en: "Web application to automatically form balanced football teams. Supports Futsal, Society and Field with different positions and skill rating system."
    },
    image: footballTeamsImage,
    github: "https://github.com/davi-montalvao/football-teams",
    site: "https://football-teams-six.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    featured: true,
    category: "Frontend"
  }
  ,
  {
    title: "Busca Cine",
    description: {
      pt: "Site de busca de filmes com informações, trailers e detalhes de exibição. Interface limpa e responsiva para encontrar filmes rapidamente.",
      en: "Movie search site with information, trailers and screening details. Clean, responsive interface to find films quickly."
    },
    image: buscaCineImage,
    github: "https://github.com/davi-montalvao/buscacine",
    site: "https://buscacine-i8v2.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: false,
    category: "Frontend"
  }
]

export function Projects() {
  const ref = useRef(null)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#ffd95a]/5 to-[#ff6b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4ecdc4]/5 to-[#45b7d1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-white/20 mb-6">
            <Code className="h-5 w-5 text-[#ffd95a]" />
            <TranslatedSpan pt="Meus Trabalhos" en="My Work" className="text-sm text-slate-300" />
          </div>

          <TranslatedH2
            pt="Portfólio de Projetos"
            en="Project Portfolio"
            className="text-4xl lg:text-5xl font-bold mb-6"
          />

          <TranslatedP
            pt="Uma seleção dos meus melhores projetos, demonstrando habilidades técnicas e criatividade"
            en="A selection of my best projects, demonstrating technical skills and creativity"
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300"
            >
              <span className={`text-sm bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-medium`}>
                <TranslatedSpan pt={category.name.pt} en={category.name.en} />
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="relative overflow-hidden glass-effect border border-white/20 hover:border-white/40 transition-all duration-500 h-full">
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] text-slate-900 text-xs font-semibold">
                      <Star className="h-3 w-3" />
                      <TranslatedSpan pt="Destaque" en="Featured" />
                    </div>
                  </motion.div>
                )}

                {/* Image Container */}
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold group-hover:text-[#ffd95a] transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#4ecdc4]/20 to-[#45b7d1]/20 text-[#4ecdc4] font-medium">
                        {project.category}
                      </span>
                    </div>

                    <CardDescription className="text-slate-300 leading-relaxed">
                      <TranslatedSpan pt={project.description.pt} en={project.description.en} />
                    </CardDescription>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.1 }}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300 border border-white/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <Github className="h-4 w-4" />
                      <TranslatedSpan pt="Código" en="Code" />
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <Globe className="h-4 w-4" />
                      <TranslatedSpan pt="Demo" en="Demo" />
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ffd95a]/5 via-[#ff6b6b]/5 to-[#4ecdc4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl glass-effect border border-white/20">
            <div className="text-center">
              <TranslatedH2
                pt="Tem um projeto em mente?"
                en="Have a project in mind?"
                className="text-xl font-semibold text-white mb-2"
              />
              <TranslatedP
                pt="Vamos trabalhar juntos para torná-lo realidade!"
                en="Let's work together to make it a reality!"
                className="text-slate-300 mb-4"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold"
                asChild
              >
                <a href="#contato">
                  <TranslatedSpan pt="Vamos Conversar" en="Let's Talk" />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
