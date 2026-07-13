import { motion } from "framer-motion"
import {
  SiPhp, SiLaravel, SiPython, SiFlask, SiNestjs, SiNextdotjs,
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVuedotjs,
  SiMysql, SiMongodb, SiSqlite,
  SiBootstrap, SiTailwindcss,
  SiGit, SiGithub, SiTrello, SiPostman, SiFigma, SiDocker,
  SiPostgresql
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { BsDatabase } from "react-icons/bs"
import type { IconType } from "react-icons"

// ── Data ──────────────────────────────────────────────────

const backendSkills = [
  { name: "PHP",       Icon: SiPhp,        color: "#777BB4" },
  { name: "Laravel",   Icon: SiLaravel,    color: "#FF2D20" },
  { name: "Python",    Icon: SiPython,     color: "#3776AB" },
  { name: "Flask",     Icon: SiFlask,      color: "#F5F0E8" },
  { name: "NestJS",    Icon: SiNestjs,     color: "#E0234E" },
  { name: "NextJS",    Icon: SiNextdotjs,  color: "#F5F0E8" },
  { name: "API REST",  Icon: TbApi,        color: "#FFD700" },
]

const frontendSkills = [
  { name: "HTML",          Icon: SiHtml5,       color: "#E34F26" },
  { name: "CSS",           Icon: SiCss,         color: "#1572B6" },
  { name: "JavaScript",    Icon: SiJavascript,  color: "#F7DF1E" },
  { name: "TypeScript",    Icon: SiTypescript,  color: "#3178C6" },
  { name: "React",         Icon: SiReact,       color: "#61DAFB" },
  { name: "React Native",  Icon: SiReact,       color: "#61DAFB" },
  { name: "VueJS",         Icon: SiVuedotjs,    color: "#4FC08D" },
]

const dbSkills = [
  { name: "MySQL",      Icon: SiMysql,      color: "#4479A1" },
  { name: "MongoDB",    Icon: SiMongodb,    color: "#47A248" },
  { name: "SQL",        Icon: BsDatabase,   color: "#FFD700" },
  { name: "SQLite",     Icon: SiSqlite,     color: "#003B57" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#0c9ee2" },
]

const librarySkills = [
  { name: "Bootstrap", Icon: SiBootstrap,   color: "#7952B3" },
  { name: "Tailwind",  Icon: SiTailwindcss, color: "#06B6D4" },
]

const toolSkills = [
  { name: "Git",     Icon: SiGit,     color: "#F05032" },
  { name: "GitHub",  Icon: SiGithub,  color: "#F5F0E8" },
  { name: "Trello",  Icon: SiTrello,  color: "#0052CC" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Figma",   Icon: SiFigma,   color: "#F24E1E" },
  { name: "Docker",  Icon: SiDocker,  color: "#2496ED" },
]

// ── Composants ────────────────────────────────────────────

interface SkillBase {
  name: string
  Icon: IconType
  color: string
}

function SkillCard({ name, Icon, color, delay = 0 }: SkillBase & { delay?: number }) {
  return (
    <motion.div
      className="bg-[var(--color-surface)] border border-[var(--color-primary)]/20
                 hover:border-[var(--color-primary)] p-4 flex flex-col items-center
                 justify-center gap-3 transition-all duration-200 group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <Icon
        size={32}
        color={color}
        className="group-hover:scale-110 transition-transform duration-200"
      />
      <span
        className="uppercase text-xs text-[var(--color-text)] text-center leading-tight"
        style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
      >
        {name}
      </span>
    </motion.div>
  )
}

function BlockTitle({ children }: { children: string }) {
  return (
    <div className="mb-4">
      <h3
        className="text-[var(--color-primary)] uppercase leading-none"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2.2rem)" }}
      >
        {children}
      </h3>
      <div className="w-10 h-[2px] bg-[var(--color-primary)] mt-2" />
    </div>
  )
}

// ── Section principale ────────────────────────────────────

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Fond subtil — radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,134,11,0.07) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-16">

        {/* ── Titre principal ── */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="uppercase leading-none text-[var(--color-text)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Mes{" "}
            <span className="text-[var(--color-primary)]">Compétences</span>
            <br />Techniques
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

        {/* ── Ligne 1 : Backend + Frontend ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BlockTitle>Backend</BlockTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {backendSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BlockTitle>Frontend</BlockTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {frontendSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Séparateur ── */}
        <div className="w-full h-px bg-[var(--color-primary)]/20" />

        {/* ── Ligne 2 : Database + Libraries + Tools ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Database */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <BlockTitle>Base de données</BlockTitle>
            <div className="grid grid-cols-2 gap-3">
              {dbSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Libraries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <BlockTitle>Bibliothèques</BlockTitle>
            <div className="grid grid-cols-2 gap-3">
              {librarySkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <BlockTitle>Outils</BlockTitle>
            <div className="grid grid-cols-2 gap-3">
              {toolSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}