import { jsx as _jsx } from "react/jsx-runtime";
import { SiGithub, SiFacebook, SiTiktok } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa6"; // Changement ici pour éviter le bug de /si
export const socialLinks = [
    { id: "github", href: "https://github.com/Charles-E007", content: _jsx(SiGithub, { size: 36, color: "var(--color-primary)" }) },
    { id: "linkedin", href: "https://linkedin.com/in/TON-PROFIL", content: _jsx(FaLinkedin, { size: 36, color: "var(--color-primary)" }) },
    { id: "facebook", href: "https://facebook.com/TON-PROFIL", content: _jsx(SiFacebook, { size: 36, color: "var(--color-primary)" }) },
    { id: "tiktok", href: "https://tiktok.com/@TON-PROFIL", content: _jsx(SiTiktok, { size: 36, color: "var(--color-primary)" }) },
    { id: "twitter", href: "https://twitter.com/TON-PROFIL", content: _jsx(FaTwitter, { size: 36, color: "var(--color-primary)" }) },
];
