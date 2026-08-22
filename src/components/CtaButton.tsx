import type { ReactNode } from 'react'

interface CtaButtonProps {
  children: ReactNode
  scrollTo?: string
  onClick?: () => void
}

const classes =
  'btn-shine w-full sm:w-auto inline-flex items-center justify-center bg-gradient-brand text-white font-semibold text-lg rounded-xl px-8 py-4 shadow-md transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]'

export default function CtaButton({ children, scrollTo, onClick }: CtaButtonProps) {
  if (scrollTo) {
    return (
      <a href={`#${scrollTo}`} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
