"use client"

import Image from "next/image"
import { Github, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import fotoPerfil from '@/assets/foto-perfil.jpeg'

export function Hero() {
  return (
    <section className="relative flex items-center justify-between px-4 pt-24 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <span className="mb-4 flex items-center gap-2 text-lg">
                <motion.span
                  initial={{ scale: 0.8, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                  className="inline-block"
                >
                  👋
                </motion.span>
                Oi, eu sou o
              </span>
              <h1 id="#sobre" className="text-4xl font-bold tracking-tight lg:text-6xl">
                Davi Montalvão
              </h1>
              <p className="mt-2 text-xl text-[#eba417]">
                Front-end developer
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-400">
              Com 17 anos de experiência no setor de tecnologia, sendo 12 anos dedicados ao desenvolvimento em Cobol para mainframe e 
              5 anos no desenvolvimento de soluções web e mobile, sou apaixonado por criar soluções inovadoras que atendem às necessidades 
              dos usuários. Ao longo da minha carreira, participei de projetos desafiadores e contribui para o desenvolvimento de produtos que 
              geraram benefícios significativos para empresas e usuários. Além disso, mantenho-me sempre atualizado com as tendências e tecnologias 
              mais recentes, assegurando que minhas habilidades evoluam continuamente para enfrentar novos desafios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <a href="https://github.com/davi-montalvao" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Github
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/davi-montalvao-dev/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-[-1%] right-[-1%] bottom-[-0%] left-[-0%] rounded-full bg-gradient-to-tr from-[#ffd95a] to-yellow-500 opacity-10 blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={fotoPerfil}
                alt="Profile photo"
                width={300}
                height={300}
                className="relative mx-auto h-[300px] w-[300px] rounded-full object-cover object-center"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
