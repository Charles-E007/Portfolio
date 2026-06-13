import { GridScan } from "../../components/ui/GridScan.jsx"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
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
      </div>

      <div className="relative z-10 text-center px-4">
        <p className="text-[var(--color-primary)] text-2xl font-bold">
          Contenu Hero — à venir
        </p>
      </div>
    </section>
  )
}