import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Davi Montalvão - Portfolio",
  description: "Front-end developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-[#121214] text-slate-50`} style={{ scrollBehavior: "smooth" }}>
        {children}
      </body>
    </html>
  )
}
