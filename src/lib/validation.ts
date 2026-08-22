export function isValidName(name: string): boolean {
  return name.trim().length > 0
}

export function isValidEmail(raw: string): boolean {
  const trimmed = raw.trim()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
}

export function isValidWhatsapp(raw: string): boolean {
  const trimmed = raw.trim()
  const digitsOnly = trimmed.replace(/\D/g, '')
  if (digitsOnly.length < 10 || digitsOnly.length > 14) return false
  if (trimmed.startsWith('+234')) return true
  if (digitsOnly.startsWith('234')) return true
  if (digitsOnly.startsWith('0')) return true
  return false
}
