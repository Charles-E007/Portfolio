import type { CSSProperties } from "react"
import type { Project } from "./projectsData"
import ViewProjectButton from "../../components/ui/ViewProjectButton"

interface ProjectCardProps {
  project: Project
  style: CSSProperties
  isActive: boolean
}

export default function ProjectCard({ project, style, isActive }: ProjectCardProps) {
  return (
    <div
      className={`absolute w-[340px] sm:w-[420px] h-[580px] rounded-2xl overflow-hidden
                  transition-all duration-500
                  ${isActive ? "ring-2 ring-[var(--color-primary)]/60" : "ring-1 ring-white/10"}`}
      style={style}
    >
      {/* ── Média en fond : image ou vidéo ── */}
      {project.media.type === "video" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={project.media.src}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={project.media.src}
          alt={project.title}
        />
      )}

      {/* ── Overlay sombre pour lisibilité ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

      {/* ── Contenu ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
        <h3
          className="text-3xl text-[var(--color-text)] uppercase leading-tight font-black"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        <p className="text-xl text-[var(--color-primary)] leading-relaxed line-clamp-3 font-black">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full
                        border border-[var(--color-primary)]/40 text-[var(--color-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <ViewProjectButton href={project.link} />
      </div>
    </div>
  )
}