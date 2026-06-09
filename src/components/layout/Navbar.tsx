// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Accueil',    href: '#hero'       },
  { label: 'À propos',  href: '#about'      },
  { label: 'Skills',    href: '#skills'     },
  { label: 'Projets',   href: '#projects'   },
  { label: 'Parcours',  href: '#experience' },
  { label: 'Contact',   href: '#contact'    },
]

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effet de fond au scroll
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
      fixed w-full z-50 top-0 transition-all duration-300
      ${isScrolled
        ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-primary)]/20 shadow-lg shadow-[var(--color-primary)]/5'
        : 'bg-transparent border-b border-transparent'
      }
    `}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">

        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-bold text-[var(--color-primary)] group-hover:opacity-80 transition-opacity">
            {'<'}
          </span>
          <span className="text-xl font-semibold text-[var(--color-text)] whitespace-nowrap">
            Charles Emmanuel
          </span>
          <span className="text-xl font-bold text-[var(--color-primary)] group-hover:opacity-80 transition-opacity">
            {' />'}
          </span>
        </a>

        {/* Burger — mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 w-10 h-10 rounded-md md:hidden
                     text-[var(--color-muted)] hover:text-[var(--color-primary)]
                     hover:bg-[var(--color-surface)] transition-colors
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          {/* Icône burger → croix animée */}
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            )}
          </svg>
        </button>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative px-3 py-2 text-sm font-medium text-[var(--color-muted)]
                           hover:text-[var(--color-primary)] transition-colors duration-200
                           group rounded-md hover:bg-[var(--color-surface)]"
              >
                {link.label}
                {/* Underline animé au hover */}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-[var(--color-primary)]
                                 scale-x-0 group-hover:scale-x-100
                                 transition-transform duration-200 origin-left" />
              </button>
            </li>
          ))}
        </ul>

      </div>

      {/* Menu mobile — animé avec Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden
                       bg-[var(--color-surface)]/95 backdrop-blur-md
                       border-b border-[var(--color-primary)]/20"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium
                               text-[var(--color-muted)] hover:text-[var(--color-primary)]
                               hover:bg-[var(--color-bg)] transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}