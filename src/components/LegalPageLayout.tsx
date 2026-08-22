import type { ReactNode } from 'react'
import Navbar from './Navbar'
import MiniFooter from './MiniFooter'

interface LegalPageLayoutProps {
  title: string
  effectiveDate: string
  children: ReactNode
}

export default function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 pt-32 pb-16 flex flex-col gap-6">
        <div>
          <h1 className="text-[clamp(28px,5vw,44px)] leading-[1.15] font-bold text-wt-blue-deep">
            {title}
          </h1>
          <p className="text-wt-gray-text text-sm mt-2">Effective date: {effectiveDate}</p>
        </div>
        <div className="flex flex-col gap-6 text-wt-gray-text text-[clamp(15px,1.2vw,18px)] leading-[1.6]">
          {children}
        </div>
      </div>
      <MiniFooter />
    </main>
  )
}
