"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Zap, Target, TrendingUp } from 'lucide-react'
import { TranslatedH2, TranslatedP, TranslatedSpan } from "@/components/translated-text/page"

const skills = [
  {
    name: "React",
    icon: "/icons/react.svg",
    level: "Avançado",
    category: "Frontend",
    description: "Desenvolvimento de interfaces modernas e responsivas"
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    level: "Avançado",
    category: "Linguagem",
    description: "Programação funcional e orientada a objetos"
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    level: "Intermediário",
    category: "Linguagem",
    description: "Tipagem estática para JavaScript"
  },
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    level: "Avançado",
    category: "Framework",
    description: "React framework para produção"
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    level: "Avançado",
    category: "Versionamento",
    description: "Controle de versão e colaboração"
  },
  {
    name: "HTML5",
    icon: "/icons/html5.svg",
    level: "Avançado",
    category: "Markup",
    description: "Estruturação semântica de conteúdo"
  },
  {
    name: "CSS3",
    icon: "/icons/css3.svg",
    level: "Avançado",
    category: "Estilização",
    description: "Design responsivo e animações"
  },
  {
    name: "Sass",
    icon: "/icons/sass.svg",
    level: "Intermediário",
    category: "Pré-processador",
    description: "CSS com funcionalidades avançadas"
  },
  {
    name: "Node.js",
    icon: "/icons/node.svg",
    level: "Intermediário",
    category: "Backend",
    description: "JavaScript no servidor"
  }
]

const categories = [
  { name: "Frontend", icon: Code, color: "from-[#ffd95a] to-[#ff6b6b]" },
  { name: "Backend", icon: Zap, color: "from-[#4ecdc4] to-[#45b7d1]" },
  { name: "Linguagens", icon: Target, color: "from-[#ff6b6b] to-[#ff8e8e]" },
  { name: "Ferramentas", icon: TrendingUp, color: "from-[#ffd95a] to-[#4ecdc4]" },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ffd95a]/5 to-[#ff6b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#4ecdc4]/5 to-[#45b7d1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-white/20 mb-6">
            <Target className="h-5 w-5 text-[#ffd95a]" />
            <TranslatedSpan
              pt="Habilidades & Experiências"
              en="Skills & Experience"
              className="text-sm text-slate-300"
            />
          </div>

          <TranslatedH2
            pt="Skills & Experiências"
            en="Skills & Experience"
            className="text-4xl lg:text-5xl font-bold mb-6"
          />

          <TranslatedP
            pt="Tecnologias e ferramentas que utilizo para criar soluções inovadoras e eficientes"
            en="Technologies and tools I use to create innovative and efficient solutions"
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300"
            >
              <category.icon className={`h-4 w-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
              <TranslatedSpan
                pt={category.name}
                en={category.name}
                className="text-sm text-slate-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="relative overflow-hidden glass-effect border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd95a]/20 via-[#ff6b6b]/20 to-[#4ecdc4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 p-6 text-center">
                  {/* Icon */}
                  <motion.div
                    className="relative mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="rounded-xl transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd95a]/20 to-[#ff6b6b]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white group-hover:text-[#ffd95a] transition-colors duration-300">
                      {skill.name}
                    </h3>

                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#ffd95a]/20 to-[#ff6b6b]/20 text-[#ffd95a] font-medium">
                        {skill.level}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#ffd95a]/5 to-[#ff6b6b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl glass-effect border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ffd95a]">17+</div>
              <TranslatedSpan
                pt="Anos de Experiência"
                en="Years of Experience"
                className="text-sm text-slate-400"
              />
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff6b6b]">50+</div>
              <TranslatedSpan
                pt="Projetos Entregues"
                en="Projects Delivered"
                className="text-sm text-slate-400"
              />
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4ecdc4]">15+</div>
              <TranslatedSpan
                pt="Tecnologias Dominadas"
                en="Technologies Mastered"
                className="text-sm text-slate-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
