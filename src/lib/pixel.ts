interface FbqFunction {
  (...args: unknown[]): void
  queue: unknown[][]
  loaded: boolean
  version: string
  push: FbqFunction
}

declare global {
  interface Window {
    fbq?: FbqFunction
    _fbq?: FbqFunction
  }
}

const pendingEvents: string[] = []

function record(eventName: string): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID
  if (!pixelId) return

  try {
    if (window.fbq) {
      window.fbq('track', eventName)
    } else {
      pendingEvents.push(eventName)
    }
  } catch {
    // Tracking must never break the funnel.
  }
}

export function initMetaPixel(): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID
  if (!pixelId) return

  try {
    if (window.fbq) return

    const queue: unknown[][] = []
    const fbq = ((...args: unknown[]) => {
      queue.push(args)
    }) as FbqFunction
    fbq.queue = queue
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.push = fbq
    window.fbq = fbq
    window._fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    window.fbq('init', pixelId)
    pendingEvents.splice(0).forEach((eventName) => window.fbq?.('track', eventName))
  } catch {
    // Tracking must never break the funnel.
  }
}

export function trackPageView(): void {
  record('PageView')
}

export function trackLead(): void {
  record('Lead')
}
