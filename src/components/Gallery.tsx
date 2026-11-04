import { useState } from 'react'
import Chip from './Chip'

const MAX_CANDIDATES = 8
const CAPTIONS = ['Benin', 'Port Harcourt', 'Jos', 'Ibadan', 'Ghana', 'Lagos', 'Enugu', "Abuja", "Kaduna", "Kano", "Abeokuta"]

type ExtStage = 'jpg' | 'jpeg' | 'hidden'

function GalleryImage({ index }: { index: number }) {
  const [stage, setStage] = useState<ExtStage>('jpg')

  if (stage === 'hidden') return null

  return (
    <div className="gallery-frame scroll-snap-item shrink-0 w-64 sm:w-full rounded-2xl">
      <img
        src={`/gallery/event-${index}.${stage}`}
        alt="Past Weltrade trading event"
        width={256}
        height={160}
        loading="lazy"
        decoding="async"
        onError={() => setStage(stage === 'jpg' ? 'jpeg' : 'hidden')}
        className="w-64 h-40 sm:w-full sm:h-48 rounded-2xl object-cover bg-wt-blue-soft"
      />
    </div>
  )
}

export default function Gallery() {
  const candidates = Array.from({ length: MAX_CANDIDATES }, (_, i) => i + 1)

  return (
    <div>
      <div className="flex gap-4 overflow-x-auto scroll-snap-x scroll-fade-mask sm:hidden pb-2 -mx-4 px-4">
        {candidates.map((index) => (
          <GalleryImage key={index} index={index} />
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {candidates.map((index) => (
          <GalleryImage key={index} index={index} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {CAPTIONS.map((caption) => (
          <Chip key={caption} label={caption} />
        ))}
      </div>
    </div>
  )
}
