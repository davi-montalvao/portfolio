"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full border-b border-slate-800 bg-[#121214]/80 backdrop-blur-sm z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          DM<span className="text-cyan-400">.</span>
        </Link>

        {/* Menu Hamburguer para Mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-400 hover:text-slate-50 focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Links do Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-[#121214]/90 md:static md:flex md:w-auto md:gap-8 md:bg-transparent md:block md:items-center md:justify-between px-4 py-6 md:py-0`}
        >
        <Link href="#sobre" className="text-sm text-slate-400 hover:text-slate-50 mr-4">
          Sobre mim
        </Link>

          <Link href="#portfolio" className="text-sm text-slate-400 hover:text-slate-50 mr-4">
            Portfólio
          </Link>
          <Link href="#skills" className="text-sm text-slate-400 hover:text-slate-50 mr-4">
            Skills
          </Link>
          <Link href="#carreira" className="text-sm text-slate-400 hover:text-slate-50 mr-4">
            Carreira
          </Link>
          <Link href="#contato" className="text-sm text-slate-400 hover:text-slate-50  mr-4">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
