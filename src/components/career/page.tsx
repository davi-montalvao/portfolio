"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

// Função para calcular a diferença de tempo em anos e meses
function calculateTimeDifference(startMonth: number, startYear: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() retorna de 0 a 11

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
    title: `Desenvolvedor web na TalentFour Consulting`,
    description: `Desenvolvedor front-end com expertise em Javascript, ReactJS, HTML, CSS e Redux. Atuo na manutenção e evolução de sites WordPress, gestão de landing pages em Marketing Cloud e criação de soluções de atendimento automatizado para WhatsApp através da plataforma Blip.`,
    time: calculateTimeDifference(6, 2023), // Junho/2023
    totalTime: 'Junho/2023 - Atualmente'
  },
  {
    id: 2,
    title: `Desenvolvedor front-end na Sabion Digital`,
    description: `Desenvolvimento da área de cartões de crédito com React, Micro Frontend e rollup.js, comunicação com outras áreas e cliente externo, criação da área do usuário em uma aplicação de transporte coletivo, e projeto de inteligência artificial em Gestão de Riscos e Compliance.`,
    time: '3 anos e 3 meses',
    totalTime: 'Março/2020 - Maio/2023 '
  },
  {
    id: 3,
    title: `Analista programador mainframe na Sabion Digital`,
    description: `Adequações dos sistemas do grupo segurador ao SAP FSCD para as movimentações de contas a pagar, contas a receber, conta demanda judicial/registros legais.`,
    time: '1 ano e 9 meses',
    totalTime: 'Junho/2018 - Fev/2020'
  },
  {
    id: 4,
    title: `Analista programador mainframe na Prime IT Solutions`,
    description: `Migração dos dados quando ocorreu a compra do banco HSBC pelo banco Bradesco.`,
    time: '2 anos e 7 meses',
    totalTime: 'Novembro/2015 - Maio/2018'
  },
  {
    id: 5,
    title: `Analista programador mainframe na Urcal Projetos e soluções`,
    description: `Análise, desenvolvimento e acompanhamento de projetos Cobol no sistema Altamira, incluindo o sistema previdenciário de clientes.`,
    time: '4 anos e 7 meses',
    totalTime: 'Abril/2011 - Outubro/2015'
  },
]

export function Career() {
  return (
    <section id="carreira" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-lg">🏢</span>
          <h2 className="text-2xl font-bold">Carreira</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-slate-800 bg-[#ffd95a]/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="text-[#ffd95a]">{exp.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{exp.description}</p>
                  <p className="mt-2 text-sm text-slate-500">{exp.totalTime}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
