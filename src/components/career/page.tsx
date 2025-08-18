"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users, Code, Database } from 'lucide-react'
import { TranslatedH2, TranslatedP, TranslatedSpan } from "@/components/translated-text/page"

// Função para calcular a diferença de tempo em anos e meses
function calculateTimeDifference(startMonth: number, startYear: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const totalMonthsCurrent = currentYear * 12 + currentMonth;
  const totalMonthsStart = startYear * 12 + startMonth;

  const diffMonths = totalMonthsCurrent - totalMonthsStart;
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  return `${years} ano${years !== 1 ? 's' : ''} e ${months} mes${months !== 1 ? 'es' : ''}`;
}

const experiences = [
  {
    id: 1,
    title: "Desenvolvedor Web",
    company: "TalentFour Consulting",
    description: {
      pt: "Desenvolvedor front-end com expertise em Javascript, ReactJS, HTML, CSS e Redux. Atuo na manutenção e evolução de sites WordPress, gestão de landing pages em Marketing Cloud e criação de soluções de atendimento automatizado para WhatsApp através da plataforma Blip.",
      en: "Front-end developer with expertise in Javascript, ReactJS, HTML, CSS and Redux. I work on maintaining and evolving WordPress sites, managing landing pages in Marketing Cloud and creating automated WhatsApp customer service solutions through the Blip platform."
    },
    time: calculateTimeDifference(6, 2023),
    totalTime: "Junho/2023 - Atualmente",
    location: "São Paulo, SP",
    type: "Full-time",
    technologies: ["React", "JavaScript", "WordPress", "Marketing Cloud", "Blip"],
    achievements: ["Automação de atendimento", "Landing pages responsivas", "Integração de APIs"],
    icon: Code,
    color: "from-[#ffd95a] to-[#ff6b6b]"
  },
  {
    id: 2,
    title: "Desenvolvedor Front-end Senior",
    company: "Sabion Digital",
    description: {
      pt: "Desenvolvimento da área de cartões de crédito com React, Micro Frontend e rollup.js, comunicação com outras áreas e cliente externo, criação da área do usuário em uma aplicação de transporte coletivo, e projeto de inteligência artificial em Gestão de Riscos e Compliance.",
      en: "Development of the credit card area with React, Micro Frontend and rollup.js, communication with other areas and external clients, creation of the user area in a public transport application, and artificial intelligence project in Risk Management and Compliance."
    },
    time: "3 anos e 3 meses",
    totalTime: "Março/2020 - Maio/2023",
    location: "São Paulo, SP",
    type: "Full-time",
    technologies: ["React", "Micro Frontend", "rollup.js", "AI/ML", "Compliance"],
    achievements: ["Sistema de cartões de crédito", "Micro frontend", "IA para gestão de riscos"],
    icon: TrendingUp,
    color: "from-[#4ecdc4] to-[#45b7d1]"
  },
  {
    id: 3,
    title: "Analista Programador Mainframe",
    company: "Sabion Digital",
    description: {
      pt: "Adequações dos sistemas do grupo segurador ao SAP FSCD para as movimentações de contas a pagar, contas a receber, conta demanda judicial/registros legais.",
      en: "Adaptations of the insurance group systems to SAP FSCD for accounts payable, accounts receivable, judicial demand account/legal records movements."
    },
    time: "1 ano e 9 meses",
    totalTime: "Junho/2018 - Fev/2020",
    location: "São Paulo, SP",
    type: "Full-time",
    technologies: ["COBOL", "SAP FSCD", "Mainframe", "Sistemas legados"],
    achievements: ["Migração SAP FSCD", "Sistemas seguradoras", "Processos legais"],
    icon: Database,
    color: "from-[#ff6b6b] to-[#ff8e8e]"
  },
  {
    id: 4,
    title: "Analista Programador Mainframe",
    company: "Prime IT Solutions",
    description: {
      pt: "Migração dos dados quando ocorreu a compra do banco HSBC pelo banco Bradesco.",
      en: "Data migration when HSBC bank was acquired by Bradesco bank."
    },
    time: "2 anos e 7 meses",
    totalTime: "Novembro/2015 - Maio/2018",
    location: "São Paulo, SP",
    type: "Full-time",
    technologies: ["COBOL", "Mainframe", "Migração de dados", "Sistemas bancários"],
    achievements: ["Migração HSBC → Bradesco", "Sistemas bancários", "Processos de dados"],
    icon: Users,
    color: "from-[#ffd95a] to-[#4ecdc4]"
  },
  {
    id: 5,
    title: "Analista Programador Mainframe",
    company: "Urcal Projetos e Soluções",
    description: {
      pt: "Análise, desenvolvimento e acompanhamento de projetos Cobol no sistema Altamira, incluindo o sistema previdenciário de clientes.",
      en: "Analysis, development and monitoring of Cobol projects in the Altamira system, including client pension systems."
    },
    time: "4 anos e 7 meses",
    totalTime: "Abril/2011 - Outubro/2015",
    location: "São Paulo, SP",
    type: "Full-time",
    technologies: ["COBOL", "Sistema Altamira", "Previdenciário", "Mainframe"],
    achievements: ["Sistema previdenciário", "Sistema Altamira", "Projetos COBOL"],
    icon: Award,
    color: "from-[#ff6b6b] to-[#ffd95a]"
  },
]

export function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="carreira" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-[#ffd95a]/5 to-[#ff6b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4ecdc4]/5 to-[#45b7d1]/5 rounded-full blur-3xl" />
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
            <Briefcase className="h-5 w-5 text-[#ffd95a]" />
            <TranslatedSpan
              pt="Jornada Profissional"
              en="Professional Journey"
              className="text-sm text-slate-300"
            />
          </div>

          <TranslatedH2
            pt="Carreira & Experiência"
            en="Career & Experience"
            className="text-4xl lg:text-5xl font-bold mb-6"
          />

          <TranslatedP
            pt="Uma jornada de 17+ anos transformando ideias em soluções tecnológicas inovadoras"
            en="A 17+ year journey transforming ideas into innovative technological solutions"
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffd95a] via-[#ff6b6b] to-[#4ecdc4] transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="relative overflow-hidden glass-effect border border-white/20 hover:border-white/40 transition-all duration-500 group cursor-pointer">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                            <exp.icon className={`h-6 w-6 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold group-hover:text-[#ffd95a] transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-[#ffd95a] font-semibold">
                              <Briefcase className="h-4 w-4" />
                              {exp.company}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2 text-[#ff6b6b] font-semibold">
                            <Calendar className="h-4 w-4" />
                            {exp.time}
                          </div>
                          <div className="text-sm text-slate-400">{exp.totalTime}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-1 rounded-full bg-white/10 text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-4">
                      <CardDescription className="text-slate-300 leading-relaxed">
                        <TranslatedSpan
                          pt={exp.description.pt}
                          en={exp.description.en}
                        />
                      </CardDescription>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white">
                          <TranslatedSpan
                            pt="Tecnologias:"
                            en="Technologies:"
                          />
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.4 + index * 0.1 + techIndex * 0.1 }}
                              className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300 border border-white/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white">
                          <TranslatedSpan
                            pt="Principais Conquistas:"
                            en="Key Achievements:"
                          />
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievement}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.5 + index * 0.1 + achievementIndex * 0.1 }}
                              className="flex items-center gap-2 text-sm text-slate-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] rounded-full" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-8 rounded-2xl glass-effect border border-white/20">
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
              <div className="text-3xl font-bold text-[#ff6b6b]">5</div>
              <TranslatedSpan
                pt="Empresas"
                en="Companies"
                className="text-sm text-slate-400"
              />
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4ecdc4]">3</div>
              <TranslatedSpan
                pt="Áreas de Atuação"
                en="Areas of Expertise"
                className="text-sm text-slate-400"
              />
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ffd95a]">100%</div>
              <TranslatedSpan
                pt="Comprometimento"
                en="Commitment"
                className="text-sm text-slate-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
