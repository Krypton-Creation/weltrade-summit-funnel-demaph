import type { LucideIcon } from 'lucide-react'

interface ChipProps {
  label: string
  icon?: LucideIcon
}

export default function Chip({ label, icon: Icon }: ChipProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-wt-blue-soft text-wt-blue rounded-full px-4 py-2 text-[clamp(13px,1vw,15px)] font-semibold uppercase tracking-[0.06em]">
      {Icon ? <Icon size={14} /> : <span className="w-1.5 h-1.5 rounded-full bg-wt-blue" />}
      {label}
    </span>
  )
}
