import { lazy, Suspense } from "react"
import ErrorBoundary from "../../components/ui/ErrorBoundary"

// Chargement différé — GridScan + three.js + face-api.js sortent du bundle principal
const GridScan = lazy(() =>
  import("../../components/ui/GridScan").then((m) => ({ default: m.GridScan }))
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background GridScan */}
      <div className="absolute inset-0 w-full h-full">
        <ErrorBoundary fallback={<div className="absolute inset-0 bg-[var(--color-bg)]" />}>
          <Suspense fallback={<div className="absolute inset-0 bg-[var(--color-bg)]" />}>
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#2F293A"
              scanColor="#bcee07"
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
              className="hero-grid-scan"
              style={{ width: "100%", height: "420px" }}
            />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Contenu principal — pointer-events-none pour laisser passer les events au GridScan */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none">

        {/* ── Colonne gauche : infos style affiche ── */}
        <div className="flex-1 flex flex-col items-start justify-center pointer-events-none">
          {/* Surtitre */}
          <p className="text-[var(--color-primary)] text-sm md:text-base tracking-[0.4em] uppercase font-medium mb-2">
            Disponible • Freelance & CDI
          </p>

          {/* Nom — ultra large */}
          <h1
            className="text-[clamp(4rem,12vw,10rem)] leading-[0.9] uppercase text-[var(--color-text)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Charles
            <br />
            <span className="text-[var(--color-primary)]">
              Emmanuel
            </span>
          </h1>

          {/* Séparateur or */}
          <div className="w-24 h-[3px] bg-[var(--color-primary)] my-4" />

          {/* Titre métier */}
          <p
            className="text-[clamp(1.5rem,4vw,3rem)] leading-tight uppercase text-[var(--color-muted)] tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Développeur
            <br />
            <span className="text-[var(--color-text)]">Full — Stack</span>
          </p>
        </div>

        {/* ── Colonne droite : photo ── */}
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-[var(--color-primary)]/40 object-cover"
            src="/image/photo_portfolio.jpg"
            alt="Charles Emmanuel"
          />
        </div>
      </div>
    </section>
  )
}