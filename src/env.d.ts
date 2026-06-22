interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  // ajoute d'autres VITE_... si nécessaire
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
