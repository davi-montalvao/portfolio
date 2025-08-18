"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUp, ArrowDown } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher/page";
import { TranslatedSpan } from "@/components/translated-text/page";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const navItems = [
    { href: "#sobre", label: { pt: "Sobre mim", en: "About me" } },
    { href: "#portfolio", label: { pt: "Portfólio", en: "Portfolio" } },
    { href: "#skills", label: { pt: "Skills", en: "Skills" } },
    { href: "#carreira", label: { pt: "Carreira", en: "Career" } },
    { href: "#contato", label: { pt: "Contato", en: "Contact" } },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: headerBackground,
          backdropFilter: headerBlur,
        }}
      >
        {/* Progress Bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-[#ffd95a] via-[#ff6b6b] to-[#4ecdc4]"
          style={{
            scaleX: useTransform(scrollY, [0, 1000], [0, 1]),
            transformOrigin: "left",
          }}
        />

        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-900">DM</span>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ffd95a] to-[#ff6b6b] opacity-20 blur-sm" />
              </div>
              <span className="text-xl font-bold gradient-text">Davi Montalvão</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative group text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <TranslatedSpan
                    pt={item.label.pt}
                    en={item.label.en}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Language Switcher and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors duration-300"
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            y: menuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden absolute top-full left-0 w-full ${
            menuOpen ? 'block' : 'hidden'
          }`}
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.5)',
          }}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Language Switcher in Mobile Menu */}
            <div className="pb-4 border-b border-white/10">
              <LanguageSwitcher />
            </div>

            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10"
                >
                  <TranslatedSpan
                    pt={item.label.pt}
                    en={item.label.en}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.header>

      {/* Floating Scroll Button - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollButton ? 1 : 0,
          scale: showScrollButton ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <div className="flex flex-col gap-2">
          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300"
            title="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>

          {/* Scroll to Bottom Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToBottom}
            className="p-3 rounded-full bg-gradient-to-r from-[#4ecdc4] to-[#45b7d1] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            title="Ir para baixo"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
