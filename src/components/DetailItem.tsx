import type { LucideIcon } from 'lucide-react'

interface DetailItemProps {
  icon: LucideIcon
  text: string
  dark?: boolean
}

export default function DetailItem({ icon: Icon, text, dark = false }: DetailItemProps) {
  return (
    <div className={`flex items-center gap-2 text-sm sm:text-base ${dark ? 'text-white' : 'text-wt-blue-deep'}`}>
      <span className="shrink-0 w-7 h-7 rounded-full bg-wt-gold/15 flex items-center justify-center">
        <Icon size={14} className="text-wt-gold" />
      </span>
      <span>{text}</span>
    </div>
  )
}
