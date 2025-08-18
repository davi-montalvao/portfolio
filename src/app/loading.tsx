"use client"

import { TranslatedText, TranslatedP } from "@/components/translated-text/page"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center">
      <div className="relative">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] flex items-center justify-center mx-auto">
            <span className="text-3xl font-bold text-slate-900">DM</span>
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] opacity-20 blur-lg animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <TranslatedText
            pt="Carregando..."
            en="Loading..."
            className="text-2xl font-bold text-white mb-2"
          />
          <TranslatedP
            pt="Preparando seu portfólio"
            en="Preparing your portfolio"
            className="text-slate-400"
          />
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 bg-white/10 rounded-full h-1 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#ffd95a] via-[#ff6b6b] to-[#4ecdc4] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
