import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TiltedCard from "../../components/ui/TiltedCard"
import { VideoText } from "../../components/ui/VideoText"

const stats = [
  { value: "+10",  label: "Projets réalisés" },
  { value: "2+",   label: "Ans d'expérience" },
  { value: "100%", label: "Passion du code"  },
]

function ParticlesBackground() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size:  Math.random() * 3 + 1,
    x:     Math.random() * 100,
    y:     Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 6,
    color: i % 2 === 0 ? "#00ffff" : "#a855f7",
  }))

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-30"
          style={{
            width:  p.size,
            height: p.size,
            left:   `${p.x}%`,
            top:    `${p.y}%`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [0.1, 0.5, 0.2, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay:    p.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-20"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-12">

        {/* Titre */}
        <div className="w-full h-24 md:h-32">
          <VideoText
            src="/assets/videos/tech-bg.mp4"
            fontSize={12}
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
            className="w-full h-full"
          >
            À propos de moi
          </VideoText>
        </div>

        {/* Deux colonnes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Gauche — photo */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <TiltedCard
              imageSrc="/image/photo_portfolio.jpg"
              altText="Charles Emmanuel"
              captionText="Charles Emmanuel"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={30}
              scaleOnHover={1.25}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent={false}
            />
          </motion.div>

          {/* Droite — bio + stats + CV */}
          <motion.div
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl shadow-black/30">
              <p className="text-[var(--color-text)] text-lg leading-relaxed">
                Je suis{" "}
                <span className="text-[var(--color-primary)] font-semibold">
                  Charles Emmanuel
                </span>
                , développeur Full-Stack. Passionné de code et d'innovation,
                je transforme vos problèmes en solutions numériques innovantes.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl p-4 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--color-muted)] mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              className="pointer-events-auto inline-flex items-center gap-3 self-start
                         px-6 py-3 rounded-xl font-medium text-sm
                         bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/40
                         text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20
                         transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}