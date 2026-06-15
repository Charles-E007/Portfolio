import { GridScan } from "../../components/ui/GridScan"
import SplitText from "../../components/ui/SplitText"
import ErrorBoundary from "../../components/ui/ErrorBoundary"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background GridScan */}
      <div className="absolute inset-0 w-full h-full">
  <ErrorBoundary fallback={<div className="absolute inset-0 bg-[var(--color-bg)]" />}>
    <GridScan
      sensitivity={0.55}
      lineThickness={1}
      linesColor="#2F293A"
      scanColor="#c8ff9f"
      scanOpacity={0.4}
      gridScale={0.1}
      lineStyle="solid"
      lineJitter={0}
      scanDirection="pingpong"
      noiseIntensity={0.01}
      scanGlow={1}
      scanSoftness={2}
      scanDuration={1.5}
      scanDelay={3}
      scanOnClick
    />
  </ErrorBoundary>
</div>

      {/* Contenu principal — pointer-events-none pour laisser passer les events au GridScan */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none">

        {/* ── Colonne gauche : infos ── */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <SplitText
            text="Salut, Je suis Charles Emmanuel, Développeur Full-Stack. Je transforme vos problèmes en solution digitale innovante. Je conçois des applications web et Mobile performantes, de l'interface jusqu'au serveur."
            className="text-3xl md:text-3xl font-semibold text-left text-[var(--color-text)] leading-snug"
            delay={60}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>

        {/* ── Colonne droite : photo ── */}
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-[var(--color-primary)]/40 object-cover"
            src="../public/image/photo_portfolio.jpg"
            alt="Charles Emmanuel"
          />
        </div>

      </div>
    </section>
  )
}