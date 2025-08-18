"use client"

import Image from "next/image"
import { Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import fotoPerfil from '@/assets/foto-perfil.jpg'
import { TranslatedH1, TranslatedP, TranslatedSpan } from "@/components/translated-text/page"

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#ffd95a]/20 to-[#ff6b6b]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#4ecdc4]/20 to-[#45b7d1]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20"
            >
              <Sparkles className="h-4 w-4 text-[#ffd95a]" />
              <TranslatedSpan
                pt="Disponível para novos projetos"
                en="Available for new projects"
                className="text-sm text-slate-300"
              />
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-2xl"
                  animate={{
                    rotate: [0, 14, -8, 14, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
                <TranslatedSpan
                  pt="Oi, eu sou o"
                  en="Hi, I'm"
                  className="text-xl text-slate-300"
                />
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Davi Montalvão</span>
              </h1>

              <div className="flex items-center gap-4">
                <TranslatedH1
                  pt="Desenvolvedor Web"
                  en="Web Developer"
                  className="text-4xl lg:text-6xl font-bold mb-6"
                />
                <motion.div
                  className="w-3 h-3 bg-[#ffd95a] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <TranslatedP
              pt="Com 17 anos de experiência no setor de tecnologia, sendo 12 anos dedicados ao desenvolvimento em Cobol para mainframe e 5 anos no desenvolvimento de soluções web e mobile, sou apaixonado por criar soluções inovadoras que atendem às necessidades dos usuários."
              en="With 17+ years of experience in the technology sector, including 12 years dedicated to Cobol development for mainframes and 5 years in web and mobile development, I'm passionate about creating innovative solutions that meet user needs."
              className="text-lg leading-relaxed text-slate-300 max-w-2xl"
            />

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold group"
                asChild
              >
                <a href="https://github.com/davi-montalvao" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Github
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://www.linkedin.com/in/davi-montalvao-dev/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd95a]">17+</div>
                <TranslatedSpan
                  pt="Anos de Experiência"
                  en="Years of Experience"
                  className="text-sm text-slate-400"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ff6b6b]">50+</div>
                <TranslatedSpan
                  pt="Projetos Entregues"
                  en="Projects Delivered"
                  className="text-sm text-slate-400"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4ecdc4]">100%</div>
                <TranslatedSpan
                  pt="Comprometimento"
                  en="Commitment"
                  className="text-sm text-slate-400"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#ffd95a] via-[#ff6b6b] to-[#4ecdc4] rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Image Container */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <Image
                    src={fotoPerfil}
                    alt="Davi Montalvão - Front-end Developer"
                    width={400}
                    height={400}
                    className="relative h-[400px] w-[400px] rounded-3xl object-cover object-center shadow-2xl"
                    priority
                  />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#4ecdc4] to-[#45b7d1] rounded-xl flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-xl">💻</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
