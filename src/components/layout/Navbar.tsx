// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiUser, FiCpu, FiFolder, FiAward, FiMail, FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'Accueil',   href: '#hero',       Icon: FiHome },
  { label: 'À propos',  href: '#about',      Icon: FiUser },
  { label: 'Compétences',    href: '#skills',     Icon: FiCpu },
  { label: 'Projets',   href: '#projects',   Icon: FiFolder },
  { label: 'Parcours',  href: '#experience', Icon: FiAward },
  { label: 'Contact',   href: '#contact',    Icon: FiMail },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Détection du scroll pour ajuster subtilement la bordure
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`
      fixed w-full z-50 top-0 start-0 transition-all duration-300
      bg-[var(--color-bg)]/85 backdrop-blur-md
      ${isScrolled 
        ? 'border-b border-[var(--color-primary)]/20 shadow-lg shadow-[var(--color-primary)]/5 py-3' 
        : 'border-b border-white/5 py-4'
      }
    `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        
        {/* ── LOGO ── */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <span className="text-sm font-mono text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors">&lt;</span>
          <span className="text-xl font-bold tracking-wide text-[var(--color-primary)] uppercase drop-shadow-[0_0_12px_rgba(255,215,0,0.15)]" style={{ fontFamily: "var(--font-sans)" }}>
            Charles Emmanuel
          </span>
          <span className="text-sm font-mono text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors">/&gt;</span>
        </a>

        {/* ── ACTIONS (BOUTON + BURGER MOBILE) ── */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {/* Bouton d'action principal (Télécharger le CV par exemple) */}
          <a
            href="/Charles_Emmanuel_CV.pdf"
            download="Charles_Emmanuel_CV.pdf"
            // onClick={() => handleNavClick('#contact')}
            className="hidden sm:flex items-center gap-2 text-black bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-all duration-300 font-semibold rounded-md text-xs px-4 py-2 uppercase tracking-wider shadow-md hover:shadow-[var(--color-primary)]/20 hover:scale-[1.02]"
          >
            <FiDownload className="w-3.5 h-3.5 stroke-[2.5]" />
            Mon CV
          </a>

          {/* Menu Burger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-md md:hidden 
                       text-[var(--color-text)] hover:bg-[var(--color-surface)] focus:outline-none 
                       focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              )}
            </svg>
          </button>
        </div>

        {/* ── LIENS DESKTOP (CENTRÉS) ── */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/5 rounded-md bg-[var(--color-surface)] md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => {
              const IconComponent = link.Icon;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative block w-full text-left md:w-auto py-2 px-3 md:p-0 text-sm font-medium 
                               text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-200 
                               flex items-center gap-2 group"
                  >
                    <IconComponent className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors duration-200" />
                    <span>{link.label}</span>
                    
                    {/* Soulignement premium au survol */}
                    <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[var(--color-primary)]
                                   scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* ── MENU MOBILE DÉROULANT ANIMÉ ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[var(--color-surface)]/95 backdrop-blur-lg border-b border-white/10"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => {
                const IconComponent = link.Icon;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-md text-sm font-medium flex items-center gap-3
                                 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-white/5 transition-colors"
                    >
                      <IconComponent className="w-4 h-4 text-[var(--color-primary)]" />
                      {link.label}
                    </button>
                  </motion.li>
                )
              })}
              
              {/* Rappel du bouton d'action tout en bas du menu mobile */}
              <li className="pt-2 sm:hidden">
                {/* Bouton d'action principal — Téléchargement du CV */}
                <a
                  href="/Charles_Emmanuel_CV.pdf" // Chemin vers ton fichier dans le dossier public
                  download="Charles_Emmanuel_CV.pdf" // Nom que prendra le fichier une fois téléchargé
                  className="hidden sm:flex items-center gap-2 text-black bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-all duration-300 font-semibold rounded-md text-xs px-4 py-2 uppercase tracking-wider shadow-md hover:shadow-[var(--color-primary)]/20 hover:scale-[1.02]"
                >
                  <FiDownload className="w-3.5 h-3.5 stroke-[2.5]" />
                  Mon CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}