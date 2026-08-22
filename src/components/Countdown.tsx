import { useEffect, useState } from 'react'

const TARGET = new Date('2026-09-12T08:00:00Z').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(computeTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md">
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="flex flex-col items-center justify-center bg-white/10 border border-white/10 rounded-2xl py-3 sm:py-4 min-h-[76px]"
        >
          <span className="text-white font-bold text-2xl sm:text-3xl tabular-nums">
            {String(timeLeft[unit.key]).padStart(2, '0')}
          </span>
          <span className="text-blue-100/70 text-[11px] uppercase tracking-[0.06em] mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
