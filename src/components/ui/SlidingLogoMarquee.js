import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";
export function SlidingLogoMarquee({ items, speed = 1, pauseOnHover = true, enableBlur = true, height = "100px", gap = "3rem", direction = "horizontal", autoPlay = true, showControls = false, className, }) {
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const handleClick = (item) => {
        if (item.href)
            window.open(item.href, "_blank", "noopener,noreferrer");
    };
    const renderItem = (item, index, dup) => (_jsx("li", { className: "sliding-marquee-item grid place-items-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 focus:scale-110 focus:outline-none", onClick: () => handleClick(item), role: "button", tabIndex: 0, onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && handleClick(item), children: _jsx("div", { className: "h-4/5 w-auto", children: item.content }) }, `${item.id}-${index}-${dup ? "dup" : "orig"}`));
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
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
      ` }), _jsx("div", { ref: containerRef, className: cn("sliding-marquee-container relative", className), onMouseEnter: () => pauseOnHover && setIsPlaying(false), onMouseLeave: () => pauseOnHover && setIsPlaying(true), children: _jsx("div", { className: "sliding-marquee-resizable", "data-direction": direction, "data-play-state": isPlaying ? "running" : "paused", children: _jsxs("div", { className: "sliding-marquee-inner", children: [enableBlur && _jsx("div", { className: "sliding-marquee-blur sliding-marquee-blur--left" }), _jsxs("ul", { className: "sliding-marquee-list", children: [items.map((item, i) => renderItem(item, i, false)), items.map((item, i) => renderItem(item, i, true))] }), enableBlur && _jsx("div", { className: "sliding-marquee-blur sliding-marquee-blur--right" })] }) }) })] }));
}
export default SlidingLogoMarquee;
