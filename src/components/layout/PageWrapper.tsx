import type { ReactNode } from 'react'
import { useLenis } from '../../hooks/useLenis'

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLenis()

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      {children}
    </div>
  )
}