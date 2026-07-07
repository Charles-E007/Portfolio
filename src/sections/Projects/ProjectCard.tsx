import type { CSSProperties } from "react"
import styled from "styled-components"
import type { Project } from "./projectsData"
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiNestjs,
  SiLaravel, SiPhp, SiPython, SiFlask, SiTypescript, SiJavascript,
  SiMysql, SiMongodb, SiPostgresql, SiTailwindcss, SiDocker,
  SiGithub, SiFirebase, SiPrisma, SiSqlite,
} from "react-icons/si"
import { BsDatabase } from "react-icons/bs"
import type { IconType } from "react-icons"

// ── Mapping tech → icône ──────────────────────────────────
const TECH_ICONS: Record<string, IconType> = {
  react:       SiReact,
  "react native": SiReact,
  nextjs:      SiNextdotjs,
  "next.js":   SiNextdotjs,
  vuejs:       SiVuedotjs,
  "vue.js":    SiVuedotjs,
  nodejs:      SiNodedotjs,
  "node.js":   SiNodedotjs,
  nestjs:      SiNestjs,
  laravel:     SiLaravel,
  php:         SiPhp,
  python:      SiPython,
  flask:       SiFlask,
  typescript:  SiTypescript,
  javascript:  SiJavascript,
  mysql:       SiMysql,
  mongodb:     SiMongodb,
  postgresql:  SiPostgresql,
  postgres:    SiPostgresql,
  sqlite:      SiSqlite,
  tailwind:    SiTailwindcss,
  tailwindcss: SiTailwindcss,
  docker:      SiDocker,
  github:      SiGithub,
  firebase:    SiFirebase,
  prisma:      SiPrisma,
  sql:         BsDatabase,
}

function getTechIcon(tech: string): IconType {
  return TECH_ICONS[tech.toLowerCase()] ?? BsDatabase
}

// ── Props ─────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project
  style: CSSProperties
  isActive: boolean
}

// ── Composant ─────────────────────────────────────────────
export default function ProjectCard({ project, style, isActive }: ProjectCardProps) {
  return (
    <StyledWrapper style={style} className={isActive ? "is-active" : ""}>
      <div className="card">

        {/* ── Décorations ── */}
        <div className="card-pattern-grid" />
        <div className="card-overlay-dots" />
        <div className="accent-shape" />
        <div className="corner-slice" />

        {/* ── Badge actif ── */}
        {isActive && <div className="card-tag">Featured</div>}

        {/* ── Section image / vidéo (haut de carte) ── */}
        <div className="card-media">
          {project.media.type === "video" ? (
            <video
              className="card-media-content"
              src={project.media.src}
              autoPlay loop muted playsInline
            />
          ) : (
            <img
              className="card-media-content"
              src={project.media.src}
              alt={project.title}
            />
          )}
          <div className="card-media-overlay" />
        </div>

        {/* ── Corps de carte ── */}
        <div className="card-body">

          {/* Titre */}
          <div className="card-title-area">
            <span className="card-title">{project.title}</span>
          </div>

          {/* Description */}
          <p className="card-description">{project.description}</p>

          {/* Stack technique */}
          <div className="feature-grid">
            {project.stack.map((tech) => {
              const Icon = getTechIcon(tech)
              return (
                <div key={tech} className="feature-item">
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <span className="feature-text">{tech}</span>
                </div>
              )
            })}
          </div>

          {/* Actions */}
          <div className="card-actions">
            
               <a href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
            >
              <span className="btn-text">Voir le projet</span>
              <span className="btn-arrow">
                <svg width="46px" height="18px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path className="arr-one"   d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#080808" />
                    <path className="arr-two"   d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#080808" />
                    <path className="arr-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#080808" />
                  </g>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </StyledWrapper>
  )
}

// ── Styles ────────────────────────────────────────────────
const StyledWrapper = styled.div`
  position: absolute;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  .card {
    --primary:      #FFD700;
    --secondary:    #B8860B;
    --accent:       #FF6B35;
    --text:         #080808;
    --bg:           #111111;
    --shadow-color: #000000;
    --pattern-color: rgba(255,215,0,0.08);

    position: relative;
    width: 380px;
    background: var(--bg);
    border: 0.3em solid rgba(255,215,0,0.5);
    border-radius: 0.8em;
    box-shadow:
      0.6em 0.6em 0 var(--shadow-color),
      inset 0 0 0 0.1em rgba(255,215,0,0.04);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: ui-sans-serif, system-ui, sans-serif;
  }

  .card:hover {
    transform: translate(-0.35em, -0.35em) scale(1.015);
    box-shadow: 1em 1em 0 var(--shadow-color);
    border-color: var(--primary);
  }

  .card:hover .card-pattern-grid { opacity: 1; }
  .card:hover .card-overlay-dots  { opacity: 1; }

  /* ── Patterns décoratifs ── */
  .card-pattern-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right,  rgba(255,215,0,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,215,0,0.04) 1px, transparent 1px);
    background-size: 0.6em 0.6em;
    pointer-events: none;
    opacity: 0.4;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .card-overlay-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,215,0,0.12) 1px, transparent 1px);
    background-size: 1em 1em;
    background-position: -0.5em -0.5em;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  /* ── Badge "Featured" ── */
  .card-tag {
    position: absolute;
    top: 0.8em;
    right: 0.8em;
    background: var(--primary);
    color: var(--text);
    font-size: 0.6rem;
    font-weight: 800;
    padding: 0.4em 0.9em;
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 var(--shadow-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: rotate(3deg);
    z-index: 10;
    transition: all 0.3s ease;
  }

  .card:hover .card-tag { transform: rotate(-2deg) scale(1.08); }

  /* ── Media (image / vidéo) ── */
  .card-media {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-bottom: 0.25em solid rgba(255,215,0,0.4);
    background: #0a0a0a;
    flex-shrink: 0;
  }

  .card-media-content {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.5s ease;
  }

  .card:hover .card-media-content { transform: scale(1.05); }

  .card-media-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(17,17,17,0.85) 100%
    );
    z-index: 1;
  }

  /* ── Corps ── */
  .card-body {
    position: relative;
    padding: 1.2em 1.4em 1.4em;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .card-title-area {
    border-bottom: 0.15em solid rgba(255,215,0,0.15);
    padding-bottom: 0.8em;
  }

  .card-title {
    font-size: 1.35rem;
    font-weight: 900;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-family: var(--font-display);
    line-height: 1.1;
  }

  /* ── Description ── */
  .card-description {
    font-size: 0.92rem;
    line-height: 1.55;
    font-weight: 500;
    color: rgba(245,240,232,0.8);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* ── Stack technique ── */
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6em;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: transform 0.2s ease;
  }

  .feature-item:hover { transform: translateX(0.25em); }

  .feature-icon {
    width: 1.6em;
    height: 1.6em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,215,0,0.12);
    border: 0.1em solid rgba(255,215,0,0.3);
    border-radius: 0.3em;
    box-shadow: 0.15em 0.15em 0 rgba(0,0,0,0.4);
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .feature-item:hover .feature-icon {
    background: rgba(255,215,0,0.22);
    transform: rotate(-5deg);
    border-color: var(--primary);
  }

  .feature-icon svg {
    width: 0.9em;
    height: 0.9em;
    color: var(--primary);
    fill: var(--primary);
  }

  .feature-text {
    font-size: 0.78rem;
    font-weight: 700;
    color: rgba(245,240,232,0.85);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  /* ── Actions ── */
  .card-actions {
    padding-top: 1em;
    border-top: 0.12em dashed rgba(255,215,0,0.15);
    position: relative;
  }

  .card-actions::before {
    content: "✂";
    position: absolute;
    top: -0.75em;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    background: var(--bg);
    padding: 0 0.4em;
    font-size: 0.9em;
    color: rgba(255,215,0,0.25);
  }

  /* ── Bouton ── */
  .card-button {
    display: inline-flex;
    align-items: center;
    gap: 0;
    padding: 0.65em 1.2em;
    font-size: 0.9rem;
    font-weight: 800;
    font-family: var(--font-display);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--text);
    background: var(--primary);
    border: 0.18em solid var(--text);
    border-radius: 0.35em;
    box-shadow: 0.28em 0.28em 0 var(--shadow-color);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.25s ease;
    position: relative;
  }

  .card-button::before {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
  }

  .card-button:hover {
    background: var(--secondary);
    color: #fff;
    transform: translate(-0.1em, -0.1em);
    box-shadow: 0.38em 0.38em 0 var(--shadow-color);
  }

  .card-button:hover::before { left: 100%; }
  .card-button:active {
    transform: translate(0.1em, 0.1em);
    box-shadow: 0.12em 0.12em 0 var(--shadow-color);
  }

  .btn-text { position: relative; z-index: 1; }

  .btn-arrow {
    margin-left: 18px;
    position: relative;
    top: 1px;
    transition: margin 0.4s ease;
    display: flex;
    align-items: center;
  }

  .card-button:hover .btn-arrow { margin-left: 32px; }

  .arr-one   { transition: 0.4s; transform: translateX(-60%); }
  .arr-two   { transition: 0.5s; transform: translateX(-30%); }
  .arr-three { transition: 0.6s; }

  .card-button:hover .arr-one,
  .card-button:hover .arr-two   { transform: translateX(0%); }
  .card-button:hover .arr-three { animation: arr_anim 1s infinite 0.2s; }
  .card-button:hover .arr-one   { animation: arr_anim 1s infinite 0.6s; }
  .card-button:hover .arr-two   { animation: arr_anim 1s infinite 0.4s; }

  @keyframes arr_anim {
    0%   { fill: #080808; }
    50%  { fill: #FFD700; }
    100% { fill: #080808; }
  }

  /* ── Décorations bottom ── */
  .accent-shape {
    position: absolute;
    width: 2em; height: 2em;
    background: var(--secondary);
    border: 0.12em solid rgba(255,215,0,0.4);
    border-radius: 0.25em;
    transform: rotate(45deg);
    bottom: -1em; right: 1.5em;
    z-index: 0;
    transition: transform 0.3s ease;
    opacity: 0.5;
  }

  .card:hover .accent-shape { transform: rotate(58deg) scale(1.1); }

  .corner-slice {
    position: absolute;
    bottom: 0; left: 0;
    width: 1.2em; height: 1.2em;
    background: var(--bg);
    border-right: 0.2em solid rgba(255,215,0,0.3);
    border-top: 0.2em solid rgba(255,215,0,0.3);
    border-radius: 0 0.4em 0 0;
    z-index: 3;
  }
`