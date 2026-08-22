interface LiveDotProps {
  className?: string
}

export default function LiveDot({ className = '' }: LiveDotProps) {
  return (
    <span className={`relative inline-flex h-2.5 w-2.5 shrink-0 ${className}`}>
      <span className="live-pulse absolute inset-0 rounded-full bg-red-500" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
    </span>
  )
}
