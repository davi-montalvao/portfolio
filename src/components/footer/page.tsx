"use client"

import { ArrowUp, Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react'
import Link from "next/link"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TranslatedH3, TranslatedP, TranslatedSpan } from "@/components/translated-text/page"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/davi-montalvao",
    icon: Github,
    color: "hover:text-[#ffd95a]",
    description: "Veja meus projetos"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/davi-montalvao-dev/",
    icon: Linkedin,
    color: "hover:text-[#4ecdc4]",
    description: "Conecte-se comigo"
  },
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=5511984117991",
    icon: MessageCircle,
    color: "hover:text-[#ff6b6b]",
    description: "Conversa direta"
  }
]

const quickLinks = [
  { name: { pt: "Sobre mim", en: "About me" }, href: "#sobre" },
  { name: { pt: "Portfólio", en: "Portfolio" }, href: "#portfolio" },
  { name: { pt: "Skills", en: "Skills" }, href: "#skills" },
  { name: { pt: "Carreira", en: "Career" }, href: "#carreira" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contato" className="relative border-t border-white/10 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ffd95a]/5 to-[#ff6b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#4ecdc4]/5 to-[#45b7d1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* Brand Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">DM</span>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] opacity-20 blur-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Davi Montalvão</h3>
                <p className="text-sm text-slate-400">
                  <TranslatedSpan
                    pt="Desenvolvedor Web"
                    en="Web Developer"
                  />
                </p>
              </div>
            </div>

            <TranslatedP
              pt="Transformando ideias em experiências digitais excepcionais. Especializado em React, TypeScript e desenvolvimento web moderno."
              en="Transforming ideas into exceptional digital experiences. Specialized in React, TypeScript and modern web development."
              className="text-slate-300 leading-relaxed max-w-sm"
            />

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl glass-effect border border-white/20 ${social.color} transition-all duration-300 group`}
                  title={social.description}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <TranslatedH3
              pt="Navegação Rápida"
              en="Quick Navigation"
              className="text-lg font-semibold text-white"
            />
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#ffd95a] rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <TranslatedSpan
                      pt={link.name.pt}
                      en={link.name.en}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <TranslatedH3
              pt="Entre em Contato"
              en="Get in Touch"
              className="text-lg font-semibold text-white"
            />
            <div className="space-y-4">
              <motion.a
                href="mailto:drmontalvao@gmail.com"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#ffd95a]/20 to-[#ff6b6b]/20">
                  <Mail className="h-4 w-4 text-[#ffd95a]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-slate-400">drmontalvao@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://api.whatsapp.com/send?phone=5511984117991"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-slate-300 hover:text-[#ff6b6b] transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#ff6b6b]/20 to-[#ff8e8e]/20">
                  <Phone className="h-4 w-4 text-[#ff6b6b]" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-slate-400">(11) 98411-7991</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl glass-effect border border-white/20">
            <div className="text-center">
              <TranslatedH3
                pt="Pronto para começar seu projeto?"
                en="Ready to start your project?"
                className="text-xl font-semibold text-white mb-2"
              />
              <TranslatedP
                pt="Vamos transformar suas ideias em realidade digital!"
                en="Let's transform your ideas into digital reality!"
                className="text-slate-300 mb-4"
              />
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:drmontalvao@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  <TranslatedSpan
                    pt="Enviar Mensagem"
                    en="Send Message"
                  />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511984117991"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  <TranslatedSpan
                    pt="WhatsApp"
                    en="WhatsApp"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 text-sm text-slate-400 mb-4 sm:mb-0"
          >
            <span>Copyright © 2024</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <TranslatedSpan
                pt="Feito com amor"
                en="Made with love"
              />
              💜
              <TranslatedSpan
                pt="e persistência"
                en="and persistence"
              />
              🚀
            </span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border border-white/20 text-slate-300 hover:text-[#ffd95a] hover:border-[#ffd95a]/50 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
            <TranslatedSpan
              pt="Voltar ao topo"
              en="Back to top"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
