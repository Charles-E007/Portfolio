import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";
const DEFAULT_EVENTS = [
    { year: "2024", title: "Étape importante", subtitle: "Organisation", description: "Description de l'étape." },
];
export const ScrollTimeline = ({ events = DEFAULT_EVENTS, title = "", subtitle = "", animationOrder = "sequential", cardAlignment = "alternating", progressIndicator = true, cardVariant = "default", cardEffect = "none", parallaxIntensity = 0.2, progressLineWidth = 2, progressLineCap = "round", dateFormat = "badge", revealAnimation = "fade", className = "", connectorStyle = "line", }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            const newIndex = Math.floor(v * events.length);
            if (newIndex !== activeIndex && newIndex >= 0 && newIndex < events.length) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);
    const getCardVariants = (index) => {
        const baseDelay = animationOrder === "simultaneous" ? 0 : animationOrder === "staggered" ? index * 0.2 : index * 0.3;
        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x: cardAlignment === "left" ? -100 : cardAlignment === "right" ? 100 : index % 2 === 0 ? -100 : 100,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };
        return {
            initial: initialStates[revealAnimation],
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: { duration: 0.7, delay: baseDelay, ease: [0.25, 0.1, 0.25, 1.0] },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };
    const getConnectorClasses = () => {
        const baseClasses = "absolute left-1/2 transform -translate-x-1/2 bg-[var(--color-primary)]/15";
        if (connectorStyle === "dots")
            return cn(baseClasses, "w-1 rounded-full");
        if (connectorStyle === "dashed")
            return cn(baseClasses, `w-[${progressLineWidth}px]`, "[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]");
        return cn(baseClasses, `w-[${progressLineWidth}px]`);
    };
    const getCardClasses = (index) => {
        const baseClasses = "relative z-30 rounded-lg p-6 transition-all duration-300";
        const variantClasses = {
            default: "bg-[var(--color-surface)] border border-[var(--color-primary)]/15 shadow-sm",
            elevated: "bg-[var(--color-surface)] border border-[var(--color-primary)]/25 shadow-md",
            outlined: "bg-[var(--color-surface)]/60 backdrop-blur border-2 border-[var(--color-primary)]/30",
            filled: "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30",
        };
        const effectClasses = {
            none: "",
            glow: "hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]",
            shadow: "hover:shadow-lg hover:-translate-y-1",
            bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
        };
        const alignmentClassesDesktop = cardAlignment === "alternating"
            ? index % 2 === 0 ? "lg:mr-[calc(50%+20px)]" : "lg:ml-[calc(50%+20px)]"
            : cardAlignment === "left" ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0";
        return cn(baseClasses, variantClasses[cardVariant], effectClasses[cardEffect], alignmentClassesDesktop, "w-full lg:w-[calc(50%-40px)]");
    };
    return (_jsxs("div", { ref: scrollRef, className: cn("relative w-full overflow-hidden", className), children: [title && (_jsxs("div", { className: "text-center pb-16 px-4", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-4 text-[var(--color-text)]", children: title }), subtitle && _jsx("p", { className: "text-lg text-[var(--color-muted)] max-w-2xl mx-auto", children: subtitle })] })), _jsx("div", { className: "relative max-w-6xl mx-auto px-4 pb-24", children: _jsxs("div", { className: "relative mx-auto", children: [_jsx("div", { className: cn(getConnectorClasses(), "h-full absolute top-0 z-10") }), progressIndicator && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "absolute top-0 z-10", style: {
                                        height: progressHeight,
                                        width: progressLineWidth,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                                        background: "linear-gradient(to bottom, var(--color-secondary), var(--color-primary))",
                                        boxShadow: "0 0 15px rgba(255,215,0,0.4), 0 0 25px rgba(184,134,11,0.25)",
                                    } }), _jsx(motion.div, { className: "absolute z-20", style: { top: progressHeight, left: "50%", translateX: "-50%", translateY: "-50%" }, children: _jsx(motion.div, { className: "w-5 h-5 rounded-full", style: {
                                            background: "radial-gradient(circle, rgba(255,215,0,0.85) 0%, rgba(184,134,11,0.5) 40%, rgba(255,215,0,0) 70%)",
                                            boxShadow: "0 0 15px 4px rgba(255,215,0,0.55), 0 0 25px 8px rgba(184,134,11,0.35), 0 0 40px 15px rgba(255,215,0,0.15)",
                                        }, animate: { scale: [1, 1.3, 1] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }) })] })), _jsx("div", { className: "relative z-20", children: events.map((event, index) => {
                                const yOffset = useTransform(smoothProgress, [0, 1], [parallaxIntensity * 100, -parallaxIntensity * 100]);
                                return (_jsxs("div", { className: cn("relative flex items-center mb-20 py-4 flex-col lg:flex-row", cardAlignment === "alternating"
                                        ? index % 2 === 0 ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"
                                        : cardAlignment === "left" ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"), children: [_jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30", children: _jsx(motion.div, { className: cn("w-6 h-6 rounded-full border-4 flex items-center justify-center", index <= activeIndex
                                                    ? "border-[var(--color-primary)] bg-[var(--color-bg)]"
                                                    : "border-[var(--color-primary)]/20 bg-[var(--color-surface)]"), animate: index <= activeIndex
                                                    ? { scale: [1, 1.3, 1], boxShadow: ["0 0 0px rgba(255,215,0,0)", "0 0 12px rgba(255,215,0,0.6)", "0 0 0px rgba(255,215,0,0)"] }
                                                    : {}, transition: { duration: 0.8, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" } }) }), _jsxs(motion.div, { className: cn(getCardClasses(index), "mt-12 lg:mt-0"), variants: getCardVariants(index), initial: "initial", whileInView: "whileInView", viewport: { once: false, margin: "-100px" }, style: parallaxIntensity > 0 ? { y: yOffset } : undefined, children: [dateFormat === "badge" ? (_jsxs("div", { className: "flex items-center mb-2", children: [event.icon || _jsx(Calendar, { className: "h-4 w-4 mr-2 text-[var(--color-primary)]" }), _jsx("span", { className: "text-sm font-bold text-[var(--color-primary)]", style: { fontFamily: "var(--font-display)" }, children: event.year })] })) : (_jsx("p", { className: "text-lg font-bold text-[var(--color-primary)] mb-2", style: { fontFamily: "var(--font-display)" }, children: event.year })), _jsx("h3", { className: "text-xl font-bold mb-1 text-[var(--color-text)]", children: event.title }), event.subtitle && _jsx("p", { className: "text-[var(--color-muted)] font-medium mb-2 text-sm", children: event.subtitle }), _jsx("p", { className: "text-[var(--color-muted)] text-sm leading-relaxed", children: event.description })] })] }, event.id || index));
                            }) })] }) })] }));
};
