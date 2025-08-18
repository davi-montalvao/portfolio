'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] flex items-center justify-center mx-auto">
            <AlertTriangle className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] opacity-20 blur-lg" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Ops! Algo deu errado
        </h1>

        <p className="text-slate-300 mb-8 leading-relaxed">
          Parece que encontramos um problema inesperado.
          Não se preocupe, isso pode acontecer às vezes.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-8 text-left">
            <summary className="text-[#ffd95a] cursor-pointer mb-2">
              Detalhes do erro (Dev)
            </summary>
            <div className="bg-white/5 rounded-lg p-4 text-sm text-slate-400 font-mono">
              <p className="mb-2"><strong>Mensagem:</strong> {error.message}</p>
              {error.digest && (
                <p><strong>Digest:</strong> {error.digest}</p>
              )}
            </div>
          </details>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] hover:from-[#ffed4e] hover:to-[#ff5252] text-slate-900 font-semibold"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Tentar Novamente
          </Button>

          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-4 rounded-lg glass-effect border border-white/20">
          <p className="text-sm text-slate-400 mb-2">
            Se o problema persistir, entre em contato:
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
