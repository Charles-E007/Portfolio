import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { HexagonBackground } from "../../components/ui/HexagonBackground"
import ContactForm from "../../components/ui/ContactForm"
import { SlidingLogoMarquee } from "../../components/ui/SlidingLogoMarquee"
import { socialLinks } from "./socialLinks"

const contactInfo = [
  { Icon: MapPin, text: "Je suis à Abidjan, Côte d'Ivoire" },
  { Icon: Mail, text: "charles.loukou@epitech.eu", href: "mailto:charles.loukou@epitech.eu" },
  { Icon: Phone, text: "+225 0585800828", caption: "Appelez-moi", href: "tel:+2250585800828" },
  { Icon: SiWhatsapp, text: "+225 0506276584", caption: "Échangeons directement sur WhatsApp", href: "https://wa.me/2250506276584" },
]

export default function Contact() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <HexagonBackground hexagonSize={70} hexagonMargin={3} className="py-24">

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-16">

          {/* Titre */}
          <div className="flex flex-col items-center text-center pointer-events-none">
            <motion.h2
              className="uppercase leading-none text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Travaillons <span className="text-[var(--color-primary)]">Ensemble</span>
            </motion.h2>
            <motion.div
              className="w-32 h-[3px] bg-[var(--color-primary)] mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ originX: 0.5 }}
            />
          </div>

          {/* Deux colonnes */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

            {/* Gauche — infos */}
            <motion.div
              className="flex-1 flex flex-col gap-4 w-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, i) => {
                const Icon = info.Icon
                const card = (
                  <div className="flex items-center gap-4 bg-[var(--color-surface)]/80 backdrop-blur-sm
                                   border border-[var(--color-primary)]/15 rounded-xl p-4
                                   hover:border-[var(--color-primary)]/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[var(--color-primary)]/10
                                     flex items-center justify-center">
                      <Icon size={20} color="var(--color-primary)" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[var(--color-text)] font-medium">{info.text}</span>
                      {info.caption && (
                        <span className="text-xs text-[var(--color-muted)] uppercase tracking-wide">
                          {info.caption}
                        </span>
                      )}
                    </div>
                  </div>
                )
                return info.href ? (
                  <a key={i} href={info.href} target="_blank" rel="noopener noreferrer">{card}</a>
                ) : (
                  <div key={i}>{card}</div>
                )
              })}
            </motion.div>

            {/* Droite — formulaire */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end w-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center gap-6 pt-8 border-t border-[var(--color-primary)]/10">
            <h3
              className="uppercase text-[var(--color-text)] pointer-events-none"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              Suivez - <span className="text-[var(--color-primary)]">moi</span>
            </h3>

            <div className="w-full">
              <SlidingLogoMarquee items={socialLinks} speed={0.6} height="100px" gap="3.5rem" enableBlur pauseOnHover />
            </div>
          </div>

        </div>
      </HexagonBackground>
    </section>
  )
}