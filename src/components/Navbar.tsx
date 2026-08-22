import { useEffect, useState } from 'react'
import LiveDot from './LiveDot'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-3xl bg-wt-white rounded-2xl shadow-lg flex items-center justify-between px-5 py-3 transition-transform duration-200 ${
          scrolled ? 'scale-95' : 'scale-100'
        }`}
      >
        <span className="inline-flex items-center gap-2 font-bold text-wt-blue-deep text-lg tracking-tight">
          <LiveDot />
          Weltrade
        </span>
        <a
          href="#hero-form"
          className="btn-shine bg-gradient-brand text-white font-semibold text-sm rounded-xl px-4 py-2.5 shadow-md transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
        >
          Reserve Free Seat
        </a>
      </nav>
    </div>
  )
}
