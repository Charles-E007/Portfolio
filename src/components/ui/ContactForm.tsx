// src/components/sections/ContactForm.tsx
import styled from "styled-components";
import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement | null>(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    // Honeypot check (should be empty)
    const honeypot = (formRef.current.elements.namedItem("_hp") as HTMLInputElement | null)?.value;
    if (honeypot) return; // probable bot

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS variables missing");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
      // Optionnel : remettre le focus sur le premier champ
      (formRef.current.querySelector("input") as HTMLInputElement | null)?.focus();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <StyledWrapper>
      <form
        ref={formRef}
        className="form"
        onSubmit={handleSubmit}
        aria-live="polite"
        noValidate
      >
        <div className="flex">
          <label>
            <input name="from_name" className="input" type="text" placeholder=" " required />
            <span>Prénom</span>
          </label>
          <label>
            <input name="from_lastname" className="input" type="text" placeholder=" " required />
            <span>Nom</span>
          </label>
        </div>

        <label>
          <input name="reply_to" className="input" type="email" placeholder=" " required />
          <span>Votre email</span>
        </label>

        <label>
          <input name="phone" className="input" type="tel" placeholder=" " />
          <span>Numéro de téléphone</span>
        </label>

        <label>
          <textarea name="message" className="input01" placeholder=" " rows={4} required />
          <span>Votre message</span>
        </label>

        {/* Honeypot anti-spam (invisible pour l'utilisateur) */}
        <input name="_hp" type="text" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          className="fancy"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          <span className="top-key" />
          <span className="text">
            {status === "sending" ? "Envoi..." : status === "sent" ? "Envoyé !" : "Envoyer"}
          </span>
          <span className="bottom-key-1" />
          <span className="bottom-key-2" />
        </button>

        {status === "sent" && <p className="notice success" role="status">Merci — message envoyé.</p>}
        {status === "error" && <p className="notice error" role="alert">Erreur lors de l'envoi. Réessaie plus tard.</p>}
      </form>
    </StyledWrapper>
  );
}

/* StyledWrapper : conserve ton CSS existant */
const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 400px;
    width: 100%;
    background-color: var(--color-surface);
    border: 1px solid rgba(255, 215, 0, 0.15);
    padding: 28px;
    border-radius: 14px;
    position: relative;
  }

  .flex { display: flex; width: 100%; gap: 10px; }
  .form label { position: relative; width: 100%; }

  .form label .input {
    width: 100%;
    padding: 14px 12px 10px 12px;
    outline: 0;
    border: 1px solid rgba(255, 215, 0, 0.25);
    border-radius: 8px;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: 0.95em;
  }

  .form label .input + span {
    position: absolute;
    left: 12px;
    top: 14px;
    color: var(--color-muted);
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: -8px;
    left: 8px;
    font-size: 0.7em;
    font-weight: 700;
    background-color: var(--color-surface);
    padding: 0 6px;
    color: var(--color-primary);
  }

  .input01 {
    width: 100%;
    padding: 14px 12px 10px 12px;
    outline: 0;
    border: 1px solid rgba(255, 215, 0, 0.25);
    border-radius: 8px;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: 0.95em;
    resize: none;
  }

  .form label .input01 + span {
    position: absolute;
    left: 12px;
    top: 14px;
    color: var(--color-muted);
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .form label .input01:focus + span,
  .form label .input01:valid + span {
    top: -8px;
    left: 8px;
    font-size: 0.7em;
    font-weight: 700;
    background-color: var(--color-surface);
    padding: 0 6px;
    color: var(--color-primary);
  }

  .fancy {
    background-color: var(--color-bg);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    color: var(--color-primary);
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 2px;
    margin-top: 6px;
    outline: none;
    padding: 12px 30px;
    position: relative;
    transition: all 0.3s ease-in-out;
    font-family: var(--font-display);
    font-size: 16px;
  }

  .fancy[disabled] { opacity: 0.6; cursor: not-allowed; }

  .fancy .text {
    text-transform: uppercase;
    display: block;
    text-align: center;
    transition: all 0.3s ease-in-out;
    color: var(--color-primary);
  }

  .fancy .top-key, .fancy .bottom-key-1, .fancy .bottom-key-2 {
    position: absolute;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.5s ease-out, opacity 0.3s ease-out;
  }
  .fancy .top-key      { width: 1.5625rem; top: -2px; left: 0.625rem; }
  .fancy .bottom-key-1 { width: 1.5625rem; right: 1.875rem; bottom: -2px; }
  .fancy .bottom-key-2 { width: 0.625rem; right: 0.625rem; bottom: -2px; }

  .fancy:hover { background: var(--color-primary); color: #080808; }
  .fancy:hover .text { color: #080808; }
  .fancy:hover .top-key, .fancy:hover .bottom-key-1, .fancy:hover .bottom-key-2 {
    opacity: 0;
    width: 0;
  }

  .notice { margin-top: 8px; font-size: 0.95em; }
  .notice.success { color: #16a34a; }
  .notice.error { color: #dc2626; }
`;
