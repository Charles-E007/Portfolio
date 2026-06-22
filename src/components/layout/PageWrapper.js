import { jsx as _jsx } from "react/jsx-runtime";
import { useLenis } from '../../hooks/useLenis';
export default function PageWrapper({ children }) {
    useLenis();
    return (_jsx("div", { className: "relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden", children: children }));
}
