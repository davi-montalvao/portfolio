"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from 'framer-motion'

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "Sass", icon: "/icons/sass.svg" },
  { name: "ES6+", icon: "/icons/javascript.svg" }
]

export function Skills() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-lg">🎯</span>
          <h2 id="skills" className="text-2xl font-bold">Skills · Experiências</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-9">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="flex aspect-square items-center justify-center p-4 transition-colors hover:bg-slate-800">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48} // Tamanho do ícone ajustado
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <span className="text-sm text-slate-400">{skill.name}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
