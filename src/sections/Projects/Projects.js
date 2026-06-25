import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
// Calcule la position visuelle de chaque carte selon sa distance au centre
function getCardStyle(diff) {
  if (diff === 0) {
    return {
      transform: "translateX(0) scale(1) rotateY(0deg)",
      opacity: 1,
      filter: "brightness(1)",
      zIndex: 10,
    };
  }
  if (diff === -1) {
    return {
      transform: "translateX(-260px) scale(0.88) rotateY(12deg)",
      opacity: 0.55,
      filter: "brightness(0.6)",
      zIndex: 5,
    };
  }
  if (diff === 1) {
    return {
      transform: "translateX(260px) scale(0.88) rotateY(-12deg)",
      opacity: 0.55,
      filter: "brightness(0.6)",
      zIndex: 5,
    };
  }
  if (diff === -2) {
    return {
      transform: "translateX(-460px) scale(0.78) rotateY(20deg)",
      opacity: 0.25,
      filter: "brightness(0.4)",
      zIndex: 2,
    };
  }
  if (diff === 2) {
    return {
      transform: "translateX(460px) scale(0.78) rotateY(-20deg)",
      opacity: 0.25,
      filter: "brightness(0.4)",
      zIndex: 2,
    };
  }
  return {
    transform: `translateX(${diff * 260}px) scale(0.7) rotateY(${-diff * 15}deg)`,
    opacity: 0,
    filter: "brightness(0.3)",
    zIndex: 1,
  };
}
export default function Projects() {
  const len = projects.length;
  const [currentIndex, setCurrentIndex] = useState(Math.floor(len / 2));
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + len) % len);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % len);
  return _jsx("section", {
    id: "projects",
    className: "relative w-full py-24 overflow-hidden",
    style: { background: "var(--color-bg)" },
    children: _jsxs("div", {
      className:
        "relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-16",
      children: [
        _jsxs("div", {
          className: "flex flex-col items-center text-center",
          children: [
            _jsxs(motion.h2, {
              className: "uppercase leading-none text-[var(--color-text)]",
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
              },
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              viewport: { once: true },
              children: [
                "Mes ",
                _jsx("span", {
                  className: "text-[var(--color-primary)]",
                  children: "Projets",
                }),
              ],
            }),
            _jsx(motion.div, {
              className: "w-32 h-[3px] bg-[var(--color-primary)] mt-4",
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              transition: { duration: 0.6, delay: 0.3 },
              viewport: { once: true },
              style: { originX: 0.5 },
            }),
          ],
        }),
        _jsxs("div", {
          className: "relative flex items-center justify-center",
          style: { perspective: "1200px" },
          children: [
            len > 1 &&
              _jsx("button", {
                onClick: handlePrev,
                "aria-label": "Projet pr\u00E9c\u00E9dent",
                className:
                  "absolute left-0 md:left-4 z-20 inline-flex h-12 w-12 items-center justify-center\r\n                         rounded-full bg-black/60 ring-1 ring-[var(--color-primary)]/30\r\n                         hover:bg-[var(--color-primary)]/10 hover:ring-[var(--color-primary)]/60\r\n                         transition",
                children: _jsx("svg", {
                  className: "h-5 w-5 text-[var(--color-primary)]",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: _jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 18l-6-6 6-6",
                  }),
                }),
              }),
            _jsx("div", {
              className:
                "relative w-full max-w-3xl h-[620px] flex items-center justify-center",
              children: _jsx("div", {
                className:
                  "flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center",
                style: { transformStyle: "preserve-3d" },
                children: projects.map((project, i) => {
                  let diff = i - currentIndex;
                  if (diff > len / 2) diff -= len;
                  if (diff < -len / 2) diff += len;
                  return _jsx(
                    ProjectCard,
                    {
                      project: project,
                      style: getCardStyle(diff),
                      isActive: diff === 0,
                    },
                    project.id,
                  );
                }),
              }),
            }),
            len > 1 &&
              _jsx("button", {
                onClick: handleNext,
                "aria-label": "Projet suivant",
                className:
                  "absolute right-0 md:right-4 z-20 inline-flex h-12 w-12 items-center justify-center\r\n                         rounded-full bg-black/60 ring-1 ring-[var(--color-primary)]/30\r\n                         hover:bg-[var(--color-primary)]/10 hover:ring-[var(--color-primary)]/60\r\n                         transition",
                children: _jsx("svg", {
                  className: "h-5 w-5 text-[var(--color-primary)]",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: _jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 18l6-6-6-6",
                  }),
                }),
              }),
          ],
        }),
      ],
    }),
  });
}
