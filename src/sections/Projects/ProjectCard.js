import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ViewProjectButton from "../../components/ui/ViewProjectButton";
export default function ProjectCard({ project, style, isActive }) {
  return _jsxs("div", {
    className: `absolute w-[340px] sm:w-[420px] h-[580px] rounded-2xl overflow-hidden
                  transition-all duration-500
                  ${isActive ? "ring-2 ring-[var(--color-primary)]/60" : "ring-1 ring-white/10"}`,
    style: style,
    children: [
      project.media.type === "video"
        ? _jsx("video", {
            className: "absolute inset-0 w-full h-full object-cover",
            src: project.media.src,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
          })
        : _jsx("img", {
            className: "absolute inset-0 w-full h-full object-cover",
            src: project.media.src,
            alt: project.title,
          }),
      _jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10",
      }),
      _jsxs("div", {
        className: "absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4",
        children: [
          _jsx("h3", {
            className:
              "text-3xl text-[var(--color-text)] uppercase leading-tight font-black",
            style: { fontFamily: "var(--font-display)" },
            children: project.title,
          }),
          _jsx("p", {
            className:
              "text-xl text-[var(--color-primary)] leading-relaxed line-clamp-3 font-black",
            children: project.description,
          }),
          _jsx("div", {
            className: "flex flex-wrap gap-2",
            children: project.stack.map((tech) =>
              _jsx(
                "span",
                {
                  className:
                    "text-[11px] uppercase tracking-wide px-2 py-1 rounded-full\r\n                        border border-[var(--color-primary)]/40 text-[var(--color-primary)]",
                  children: tech,
                },
                tech,
              ),
            ),
          }),
          _jsx(ViewProjectButton, { href: project.link }),
        ],
      }),
    ],
  });
}
