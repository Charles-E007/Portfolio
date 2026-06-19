import { motion } from "framer-motion"
import { ScrollTimeline } from "../../components/ui/ScrollTimeline"
import { experiences } from "./experienceData"

export default function Experience() {
  return (
    <section id="experience" className="relative w-full overflow-hidden" style={{ background: "var(--color-bg)" }}>

      {/* Titre */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pt-24 flex flex-col items-center text-center">
        <motion.h2
          className="uppercase leading-none text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Mon <span className="text-[var(--color-primary)]">Parcours</span>
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

      <ScrollTimeline
        events={experiences}
        cardAlignment="alternating"
        animationOrder="staggered"
        revealAnimation="slide"
        cardVariant="outlined"
        cardEffect="glow"
        dateFormat="badge"
        connectorStyle="line"
        progressIndicator
        parallaxIntensity={0.15}
      />
    </section>
  )
}