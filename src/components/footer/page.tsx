"use client"

import { ArrowUp, Mail, Phone } from 'lucide-react'
import Link from "next/link"
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-800 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="text-lg">📬</span>
            <h2 className="text-2xl font-bold">Contatos</h2>
          </div>
          <div className="flex flex-col items-center gap-4 text-slate-400 sm:flex-row sm:justify-center">
            <motion.a
              href="mailto:drmontalvao@gmail.com"
              target='_blank' 
              rel='noreferrer'
              className="flex items-center gap-2 hover:text-[#ffd95a]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
              drmontalvao@gmail.com
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=5511984117991"
              className="flex items-center gap-2 hover:text-[#ffd95a]"
              target='_blank' rel='noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              (11) 98411-7991
            </motion.a>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            Copyright © 2024 | Made with love and persistence 🤍💪🏽
          </p>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#ffd95a]"
          >
            Voltar ao topo
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
