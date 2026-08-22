import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-wt-white rounded-3xl shadow-card p-[clamp(18px,3vw,28px)] ${className}`}>
      {children}
    </div>
  )
}
