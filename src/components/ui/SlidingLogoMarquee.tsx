import { useRef, useState, type ReactNode } from "react"
import { cn } from "../../lib/utils"

export interface SlidingLogoMarqueeItem {
  id: string
  content: ReactNode
  href?: string
}

export interface SlidingLogoMarqueeProps {
  items: SlidingLogoMarqueeItem[]
  speed?: number
  pauseOnHover?: boolean
  enableBlur?: boolean
  height?: string
  gap?: string
  direction?: "horizontal" | "vertical"
  autoPlay?: boolean
  showControls?: boolean
  className?: string
}

export function SlidingLogoMarquee({
  items,
  speed = 1,
  pauseOnHover = true,
  enableBlur = true,
  height = "100px",
  gap = "3rem",
  direction = "horizontal",
  autoPlay = true,
  showControls = false,
  className,
}: SlidingLogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const handleClick = (item: SlidingLogoMarqueeItem) => {
    if (item.href) window.open(item.href, "_blank", "noopener,noreferrer")
  }

  const renderItem = (item: SlidingLogoMarqueeItem, index: number, dup: boolean) => (
    <li
      key={`${item.id}-${index}-${dup ? "dup" : "orig"}`}
      className="sliding-marquee-item grid place-items-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 focus:scale-110 focus:outline-none"
      onClick={() => handleClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick(item)}
    >
      <div className="h-4/5 w-auto">{item.content}</div>
    </li>
  )

  return (
    <>
      <style>{`
        .sliding-marquee-container { --speed: ${speed}; --gap: ${gap}; --duration: calc(10s / var(--speed)); }
        @keyframes marquee-horizontal { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-vertical   { from { transform: translateY(0); } to { transform: translateY(-50%); } }

        .sliding-marquee-list {
          display: flex; flex-shrink: 0; min-width: 200%; gap: var(--gap);
          height: 100%; align-items: center; list-style-type: none;
          padding-inline: 0; margin: 0;
          animation: marquee-horizontal var(--duration) linear infinite paused;
          will-change: transform;
        }

        .sliding-marquee-resizable[data-direction="vertical"] .sliding-marquee-list {
          flex-direction: column; min-width: unset; min-height: 200%; width: 100%;
          animation: marquee-vertical var(--duration) linear infinite paused;
        }

        .sliding-marquee-item { min-width: clamp(70px, 8vw, 110px); height: 70%; }

        [data-play-state="running"] .sliding-marquee-list { animation-play-state: running !important; }
        [data-play-state="paused"]  .sliding-marquee-list { animation-play-state: paused !important; }

        .sliding-marquee-resizable { overflow: hidden; width: 100%; height: ${height}; position: relative; }
        .sliding-marquee-inner {
          height: 100%; width: 100%; position: relative;
          mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
          display: flex;
        }

        .sliding-marquee-blur { position: absolute; top: 0; bottom: 0; width: 18%; z-index: 2; pointer-events: none; }
        .sliding-marquee-blur--right { right: 0; }
        .sliding-marquee-blur--left  { left: 0; rotate: 180deg; }
      `}</style>

      <div
        ref={containerRef}
        className={cn("sliding-marquee-container relative", className)}
        onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
      >
        <div className="sliding-marquee-resizable" data-direction={direction} data-play-state={isPlaying ? "running" : "paused"}>
          <div className="sliding-marquee-inner">
            {enableBlur && <div className="sliding-marquee-blur sliding-marquee-blur--left" />}
            <ul className="sliding-marquee-list">
              {items.map((item, i) => renderItem(item, i, false))}
              {items.map((item, i) => renderItem(item, i, true))}
            </ul>
            {enableBlur && <div className="sliding-marquee-blur sliding-marquee-blur--right" />}
          </div>
        </div>
      </div>
    </>
  )
}

export default SlidingLogoMarquee