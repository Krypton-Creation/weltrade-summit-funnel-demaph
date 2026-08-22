export interface RegistrationPayload {
  name: string
  email: string
  whatsapp: string
  consent: true
  consent_timestamp: string
  status: 'qualified'
  timestamp: string
  source: 'weltrade-abuja-summit'
}

export function buildPayload(
  name: string,
  email: string,
  whatsapp: string,
  consentTimestamp: string,
): RegistrationPayload {
  return {
    name,
    email,
    whatsapp,
    consent: true,
    consent_timestamp: consentTimestamp,
    status: 'qualified',
    timestamp: new Date().toISOString(),
    source: 'weltrade-abuja-summit',
  }
}

function postJson(url: string, payload: RegistrationPayload, signal?: AbortSignal) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  })
}

export async function submitRegistration(payload: RegistrationPayload): Promise<void> {
  const url = import.meta.env.VITE_N8N_WEBHOOK_URL
  if (!url) return

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    const res = await postJson(url, payload, controller.signal)
    clearTimeout(timeout)
    if (!res.ok) throw new Error(`webhook responded with ${res.status}`)
  } catch {
    setTimeout(() => {
      postJson(url, payload).catch(() => {})
    }, 1000)
  }
}
