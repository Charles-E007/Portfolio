import { SiGithub, SiFacebook, SiTiktok } from "react-icons/si"
import { FaLinkedin, FaTwitter } from "react-icons/fa6" // Changement ici pour éviter le bug de /si
import type { SlidingLogoMarqueeItem } from "../../components/ui/SlidingLogoMarquee"

export const socialLinks: SlidingLogoMarqueeItem[] = [
  { id: "github",   href: "https://github.com/Charles-E007",   content: <SiGithub size={36} color="var(--color-primary)" /> },
  { id: "linkedin", href: "https://www.linkedin.com/in/loukou-charles-6847843a8/", content: <FaLinkedin size={36} color="var(--color-primary)" /> },
  { id: "facebook", href: "https://facebook.com/TON-PROFIL",    content: <SiFacebook size={36} color="var(--color-primary)" /> },
  { id: "tiktok",   href: "https://tiktok.com/@TON-PROFIL",     content: <SiTiktok size={36} color="var(--color-primary)" /> },
  { id: "twitter",  href: "https://twitter.com/TON-PROFIL",     content: <FaTwitter size={36} color="var(--color-primary)" /> },
]