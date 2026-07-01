// src/components/ui/ContactForm.tsx
import styled from "styled-components"
import { useState, useRef, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const formRef = useRef<HTMLFormElement | null>(null)

  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const honeypot = (formRef.current.elements.namedItem("_hp") as HTMLInputElement | null)?.value
    if (honeypot) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error")
      return
    }

    setStatus("sending")
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus("sent")
      formRef.current.reset()
      ;(formRef.current.querySelector("input") as HTMLInputElement | null)?.focus()
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
    }
  }

  return (
    <StyledWrapper>
      <div className="terminal">

        {/* ── Barre de titre macOS ── */}
        <div className="mac-header">
          <div className="mac-dots">
            <span className="dot red"   />
            <span className="dot yellow"/>
            <span className="dot green" />
          </div>
          <span className="mac-title">Contacter Moi !</span>
          <div className="mac-dots" style={{ opacity: 0 }}>
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
        </div>

        {/* ── Corps terminal ── */}
        <form
          ref={formRef}
          className="terminal-body"
          onSubmit={handleSubmit}
          aria-live="polite"
          noValidate
        >
          {/* Ligne prompt décorative */}
          <div className="prompt-line">
            <span className="prompt-path">~</span>
            <span className="prompt-arrow">❯</span>
            <span className="prompt-cmd">Travaillons Ensemble</span>
            <span className="cursor-blink" />
          </div>

          {/* Champs prénom + nom */}
          <div className="field-row">
            <div className="field-group">
              <span className="field-label">
                <span className="label-arrow">›</span> Nom
              </span>
              <input
                name="from_name"
                className="terminal-input"
                type="text"
                placeholder="Votre prénom"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="field-group">
              <span className="field-label">
                <span className="label-arrow">›</span> Prénom
              </span>
              <input
                name="from_lastname"
                className="terminal-input"
                type="text"
                placeholder="Votre nom"
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="field-group">
            <span className="field-label">
              <span className="label-arrow">›</span> Email
            </span>
            <input
              name="reply_to"
              className="terminal-input"
              type="email"
              placeholder="votre@email.com"
              required
              autoComplete="email"
            />
          </div>

          {/* Téléphone */}
          <div className="field-group">
            <span className="field-label">
              <span className="label-arrow">›</span> Numéro de téléphone
            </span>
            <input
              name="phone"
              className="terminal-input"
              type="tel"
              placeholder="+225 XXXXXXXXXX"
              autoComplete="tel"
            />
          </div>

          {/* Message */}
          <div className="field-group">
            <span className="field-label">
              <span className="label-arrow">›</span> Message
            </span>
            <textarea
              name="message"
              className="terminal-input terminal-textarea"
              placeholder="Décrivez votre projet ou votre demande..."
              rows={4}
              required
            />
          </div>

          {/* Honeypot anti-spam */}
          <input name="_hp" type="text" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />



          {/* Bouton */}
          <button
            type="submit"
            className="cta"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
          >
            <span className="span">
              {status === "sending" ? "ENVOI..." : status === "sent" ? "ENVOYÉ !" : "ENVOYER"}
            </span>
            <span className="second">
              <svg width="50px" height="20px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <path className="one"   d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="currentColor" />
                  <path className="two"   d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="currentColor" />
                  <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="currentColor" />
                </g>
              </svg>
            </span>
          </button>

          {/* Feedback */}
          {status === "sent" && (
            <div className="feedback success">
              <span className="prompt-path">~</span>
              <span className="prompt-arrow">❯</span>
              <span>✓ Message envoyé avec succès.</span>
            </div>
          )}
          {status === "error" && (
            <div className="feedback error">
              <span className="prompt-path">~</span>
              <span className="prompt-arrow" style={{ color: "#dc2626" }}>❯</span>
              <span>✗ Erreur lors de l'envoi. Réessaie plus tard.</span>
            </div>
          )}
        </form>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 480px;

  .terminal {
    background-color: #0e0e0e;
    border-radius: 12px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255,215,0,0.08),
      0 25px 50px rgba(0,0,0,0.6),
      0 0 80px rgba(255,215,0,0.04);
    width: 100%;
  }

  /* ── Barre titre ── */
  .mac-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1a1a1a;
    padding: 10px 16px;
    border-bottom: 1px solid rgba(255,215,0,0.1);
    user-select: none;
  }

  .mac-dots { display: flex; align-items: center; gap: 7px; }

  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .dot.red    { background-color: #ff5f57; }
  .dot.yellow { background-color: #ffbd2e; }
  .dot.green  { background-color: #28c941; }

  .mac-title {
    font-size: 0.72rem;
    color: rgba(255,215,0,0.5);
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    letter-spacing: 0.05em;
  }

  /* ── Corps ── */
  .terminal-body {
    padding: 20px 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* ── Prompt décoratif ── */
  .prompt-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  .prompt-path  { color: #57c7ff; font-family: monospace; font-size: 1rem; }
  .prompt-arrow { color: #ff6ac1; font-family: monospace; font-size: 1rem; }
  .prompt-cmd   { color: rgba(255,215,0,0.7); font-family: monospace; font-size: 1.5rem; }

  .cursor-blink {
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(255,215,0,0.7);
    margin-left: 4px;
    animation: blink 0.8s ease infinite;
  }

  @keyframes blink { 0%,100% { opacity: 0; } 50% { opacity: 1; } }

  /* ── Groupes de champs ── */
  .field-row {
    display: flex;
    gap: 12px;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .field-label {
    font-size: 1rem;
    font-family: monospace;
    color: rgba(255,215,0,0.5);
    letter-spacing: 0.08em;
    // text-transform: lowercase;
  }

  .label-arrow { color: #ff6ac1; margin-right: 4px; }

  /* ── Inputs ── */
  .terminal-input {
    background-color: #161616;
    border: 1px solid rgba(255,215,0,0.15);
    border-radius: 6px;
    padding: 10px 12px;
    color: #f5f0e8;
    font-size: 0.88rem;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    outline: none;
    width: 100%;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .terminal-input::placeholder { color: rgba(107,101,96,0.6); }

  .terminal-input:focus {
    border-color: rgba(255,215,0,0.5);
    box-shadow: 0 0 0 3px rgba(255,215,0,0.06);
  }

  .terminal-textarea {
    resize: none;
    min-height: 90px;
  }

  /* ── Séparateur ── */
  .terminal-separator {
    display: flex;
    align-items: center;
    gap: 8px;
    border-top: 1px solid rgba(255,215,0,0.08);
    padding-top: 12px;
    margin-top: 2px;
  }

  /* ── Bouton CTA ── */
  .cta {
    display: flex;
    align-items: center;
    padding: 11px 28px;
    font-size: 16px;
    font-family: var(--font-display);
    letter-spacing: 2px;
    color: #080808;
    background: var(--color-primary);
    border: none;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 5px 5px 0 #000;
    transform: skewX(-12deg);
    align-self: flex-start;
  }

  .cta:disabled { opacity: 0.55; cursor: not-allowed; transform: skewX(-12deg); }

  .cta:hover:not(:disabled) {
    box-shadow: 8px 8px 0 rgba(184,134,11,0.8);
    background: var(--color-secondary);
    color: #fff;
  }

  .cta .span { transform: skewX(12deg); font-weight: 900; }

  .cta .second {
    margin-left: 24px;
    position: relative;
    top: 2px;
    transition: 0.5s;
    transform: skewX(12deg);
  }

  .cta:hover:not(:disabled) .second { margin-right: 36px; }

  .one   { transition: 0.4s; transform: translateX(-60%); }
  .two   { transition: 0.5s; transform: translateX(-30%); }
  .three { transition: 0.6s; }

  .cta:hover:not(:disabled) .one,
  .cta:hover:not(:disabled) .two   { transform: translateX(0%); }

  .cta:hover:not(:disabled) .three { animation: color_anim 1s infinite 0.2s; }
  .cta:hover:not(:disabled) .one   { animation: color_anim 1s infinite 0.6s; }
  .cta:hover:not(:disabled) .two   { animation: color_anim 1s infinite 0.4s; }

  @keyframes color_anim {
    0%   { fill: #080808; }
    50%  { fill: var(--color-primary); }
    100% { fill: #080808; }
  }

  /* ── Feedback ── */
  .feedback {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: monospace;
    font-size: 0.82rem;
    padding: 8px 12px;
    border-radius: 6px;
    margin-top: 4px;
  }

  .feedback.success {
    background: rgba(22,163,74,0.08);
    border: 1px solid rgba(22,163,74,0.2);
    color: #16a34a;
  }

  .feedback.error {
    background: rgba(220,38,38,0.08);
    border: 1px solid rgba(220,38,38,0.2);
    color: #dc2626;
  }


  /* ── Barre de titre macOS ── */
  .mac-header {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Permet de centrer parfaitement le titre grâce à tes deux blocs .mac-dots */
    background-color: #1a1c24;
    padding: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .mac-dots {
    display: flex;
    gap: 8px;
  }

  .mac-dots .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .mac-dots .red    { background-color: #ff5f57; }
  .mac-dots .yellow { background-color: #ffbd2e; }
  .mac-dots .green  { background-color: #28c941; }

  /* ── Style du Titre Modifié ── */
  .mac-title {
    /* Option 1 : Look Premium & Moderne (Style macOS / SF Pro) */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    
    /* Option 2 : Décommente la ligne du dessous si tu veux rester sur un look 100% "Code" */
    /* font-family: "Fira Code", JetBrains Mono, Monaco, monospace; */

    font-size: 1.25rem;       /* Augmentation de la taille (ajuste à 1.35rem si besoin) */
    font-weight: 600;         /* Écriture semi-bold pour donner de l'impact */
    color: #ffbd2e;           /* Ton cyan actuel, très lisible */
    letter-spacing: 0.5px;    /* Léger espacement des lettres pour l'élégance */
    text-transform: capitalize; /* Optionnel : force la première lettre en majuscule */
  }
`