import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { SiPhp, SiLaravel, SiPython, SiFlask, SiNestjs, SiNextdotjs, SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiMysql, SiMongodb, SiSqlite, SiBootstrap, SiTailwindcss, SiGit, SiGithub, SiTrello, SiPostman, SiFigma, SiDocker } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
// ── Data ──────────────────────────────────────────────────
const backendSkills = [
    { name: "PHP", Icon: SiPhp, level: 85, color: "#777BB4" },
    { name: "Laravel", Icon: SiLaravel, level: 95, color: "#FF2D20" },
    { name: "Python", Icon: SiPython, level: 85, color: "#3776AB" },
    { name: "Flask", Icon: SiFlask, level: 85, color: "#F5F0E8" },
    { name: "NestJS", Icon: SiNestjs, level: 90, color: "#E0234E" },
    { name: "NextJS", Icon: SiNextdotjs, level: 85, color: "#F5F0E8" },
    { name: "API REST", Icon: TbApi, level: 95, color: "#FFD700" },
];
const frontendSkills = [
    { name: "HTML", Icon: SiHtml5, level: 90, color: "#E34F26" },
    { name: "CSS", Icon: SiCss, level: 90, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, level: 85, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, level: 85, color: "#3178C6" },
    { name: "React", Icon: SiReact, level: 85, color: "#61DAFB" },
    { name: "React Native", Icon: SiReact, level: 85, color: "#61DAFB" },
    { name: "VueJS", Icon: SiVuedotjs, level: 95, color: "#4FC08D" },
];
const dbSkills = [
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "SQL", Icon: BsDatabase, color: "#FFD700" },
    { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
];
const librarySkills = [
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
];
const toolSkills = [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#F5F0E8" },
    { name: "Trello", Icon: SiTrello, color: "#0052CC" },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
];
function SkillCardWithProgress({ name, Icon, level, color, delay = 0 }) {
    return (_jsxs(motion.div, { className: "bg-[var(--color-surface)] border border-[var(--color-primary)]/20\r\n                 hover:border-[var(--color-primary)]/60 p-4 flex flex-col gap-3\r\n                 transition-colors duration-200", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay }, viewport: { once: true }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, { size: 22, color: color }), _jsx("span", { className: "uppercase text-sm text-[var(--color-text)] flex-1", style: { fontFamily: "var(--font-display)", fontSize: "1rem" }, children: name }), _jsxs("span", { className: "text-[var(--color-primary)] text-sm font-bold", style: { fontFamily: "var(--font-display)" }, children: [level, "%"] })] }), _jsx("div", { className: "w-full h-[3px] bg-white/10 rounded-full overflow-hidden", children: _jsx(motion.div, { className: "h-full rounded-full", style: { background: "linear-gradient(90deg, var(--color-secondary), var(--color-primary))" }, initial: { width: 0 }, whileInView: { width: `${level}%` }, transition: { duration: 1.2, delay: delay + 0.3, ease: "easeOut" }, viewport: { once: true } }) })] }));
}
function SkillCard({ name, Icon, color, delay = 0 }) {
    return (_jsxs(motion.div, { className: "bg-[var(--color-surface)] border border-[var(--color-primary)]/20\r\n                 hover:border-[var(--color-primary)] p-4 flex flex-col items-center\r\n                 justify-center gap-3 transition-all duration-200 group", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.4, delay }, viewport: { once: true }, whileHover: { y: -4 }, children: [_jsx(Icon, { size: 32, color: color, className: "group-hover:scale-110 transition-transform duration-200" }), _jsx("span", { className: "uppercase text-xs text-[var(--color-text)] text-center leading-tight", style: { fontFamily: "var(--font-display)", fontSize: "0.85rem" }, children: name })] }));
}
function BlockTitle({ children }) {
    return (_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-[var(--color-primary)] uppercase leading-none", style: { fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2.2rem)" }, children: children }), _jsx("div", { className: "w-10 h-[2px] bg-[var(--color-primary)] mt-2" })] }));
}
// ── Section principale ────────────────────────────────────
export default function Skills() {
    return (_jsxs("section", { id: "skills", className: "relative w-full py-24 overflow-hidden", style: { background: "var(--color-bg)" }, children: [_jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
                    background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,134,11,0.07) 0%, transparent 70%)"
                } }), _jsxs("div", { className: "relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-16", children: [_jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsxs(motion.h2, { className: "uppercase leading-none text-[var(--color-text)]", style: {
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(2.5rem, 7vw, 6rem)"
                                }, initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, viewport: { once: true }, children: ["Mes", " ", _jsx("span", { className: "text-[var(--color-primary)]", children: "Comp\u00E9tences" }), _jsx("br", {}), "Techniques"] }), _jsx(motion.div, { className: "w-32 h-[3px] bg-[var(--color-primary)] mt-4", initial: { scaleX: 0 }, whileInView: { scaleX: 1 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, style: { originX: 0.5 } })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(BlockTitle, { children: "Backend" }), _jsx("div", { className: "flex flex-col gap-3", children: backendSkills.map((skill, i) => (_jsx(SkillCardWithProgress, { ...skill, delay: i * 0.08 }, skill.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(BlockTitle, { children: "Frontend" }), _jsx("div", { className: "flex flex-col gap-3", children: frontendSkills.map((skill, i) => (_jsx(SkillCardWithProgress, { ...skill, delay: i * 0.08 }, skill.name))) })] })] }), _jsx("div", { className: "w-full h-px bg-[var(--color-primary)]/20" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0 }, viewport: { once: true }, children: [_jsx(BlockTitle, { children: "Base de donn\u00E9es" }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: dbSkills.map((skill, i) => (_jsx(SkillCard, { ...skill, delay: i * 0.08 }, skill.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.15 }, viewport: { once: true }, children: [_jsx(BlockTitle, { children: "Biblioth\u00E8ques" }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: librarySkills.map((skill, i) => (_jsx(SkillCard, { ...skill, delay: i * 0.08 }, skill.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, children: [_jsx(BlockTitle, { children: "Outils" }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: toolSkills.map((skill, i) => (_jsx(SkillCard, { ...skill, delay: i * 0.08 }, skill.name))) })] })] })] })] }));
}
