"use client";

import Link from 'next/link'
import { Search, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Icon */}
        <div className="relative mb-8">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#45b7d1] flex items-center justify-center mx-auto">
            <Search className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#45b7d1] opacity-20 blur-lg" />
        </div>

        {/* 404 Message */}
        <h1 className="text-6xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">
          Página não encontrada
        </h2>

        <p className="text-slate-300 mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi movida.
          Verifique o URL ou navegue pelas opções abaixo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            className="bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => window.history.back()}
          >
            <Link href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="p-6 rounded-lg glass-effect border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            Navegação Rápida
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link
              href="#sobre"
              className="text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 p-2 rounded hover:bg-white/5"
            >
              Sobre mim
            </Link>
            <Link
              href="#portfolio"
              className="text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 p-2 rounded hover:bg-white/5"
            >
              Portfólio
            </Link>
            <Link
              href="#skills"
              className="text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 p-2 rounded hover:bg-white/5"
            >
              Skills
            </Link>
            <Link
              href="#contato"
              className="text-slate-300 hover:text-[#ffd95a] transition-colors duration-300 p-2 rounded hover:bg-white/5"
            >
              Contato
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 p-4 rounded-lg glass-effect border border-white/20">
          <p className="text-sm text-slate-400 mb-2">
            Precisa de ajuda? Entre em contato:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <a
              href="mailto:drmontalvao@gmail.com"
              className="text-[#ffd95a] hover:text-[#ffed4e] transition-colors"
            >
              drmontalvao@gmail.com
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <a
              href="https://api.whatsapp.com/send?phone=5511984117991"
              target="_blank"
              rel="noreferrer"
              className="text-[#4ecdc4] hover:text-[#45b7d1] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
