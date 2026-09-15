import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { isValidName, isValidEmail, isValidWhatsapp } from '../lib/validation'
import { buildPayload, submitRegistration } from '../lib/webhook'
import { trackLead } from '../lib/pixel'

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [consent, setConsent] = useState(false)
  const [consentTimestamp, setConsentTimestamp] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string; whatsapp?: string }>({})
  const [submitting, setSubmitting] = useState(false)

  function handleConsentChange(checked: boolean) {
    setConsent(checked)
    if (checked) setConsentTimestamp(new Date().toISOString())
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (submitting) return

    const nameValid = isValidName(name)
    const emailValid = isValidEmail(email)
    const whatsappValid = isValidWhatsapp(whatsapp)
    setErrors({
      name: nameValid ? undefined : 'Please enter your name',
      email: emailValid ? undefined : 'Enter a valid email address',
      whatsapp: whatsappValid ? undefined : 'Enter a valid WhatsApp number',
    })
    if (!nameValid || !emailValid || !whatsappValid || !consent) return

    setSubmitting(true)
    const payload = buildPayload(name, email, whatsapp, consentTimestamp)
    await submitRegistration(payload)
    trackLead()
    window.location.href = import.meta.env.VITE_WHATSAPP_GROUP_URL ?? '/'
  }

  return (
    <div
      id="hero-form"
      className="w-full max-w-md mx-auto lg:mx-0 bg-wt-white rounded-3xl shadow-card p-[clamp(18px,3vw,28px)] flex flex-col gap-5 scroll-mt-24"
    >
      <div className="flex flex-col gap-1 text-left">
        <h2 className="text-xl font-bold text-wt-blue-deep">Reserve Your Free Seat</h2>
        <p className="text-wt-gray-text text-sm">
          9:00 AM, Saturday September 3rd. Dome Suites, 2 M, Adama, City Centre, Kaduna.
        </p>
      </div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 text-left">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-wt-blue-deep">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl border-2 border-[#E5EAFB] px-4 py-3.5 min-h-[56px] text-wt-blue-deep outline-none focus:border-wt-blue"
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-wt-blue-deep">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border-2 border-[#E5EAFB] px-4 py-3.5 min-h-[56px] text-wt-blue-deep outline-none focus:border-wt-blue"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-wt-blue-deep">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="rounded-2xl border-2 border-[#E5EAFB] px-4 py-3.5 min-h-[56px] text-wt-blue-deep outline-none focus:border-wt-blue"
          />
          {errors.whatsapp && <p className="text-sm text-red-600">{errors.whatsapp}</p>}
        </div>
        <label className="flex items-start gap-3 py-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => handleConsentChange(e.target.checked)}
            className="mt-0.5 shrink-0 w-5 h-5 rounded accent-wt-blue"
          />
          <span className="text-[13px] leading-[1.5] text-wt-gray-text">
            I agree to the{' '}
            <Link
              to="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wt-blue underline"
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              to="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wt-blue underline"
            >
              Terms
            </Link>
            , and consent to being contacted about this event by WhatsApp, call and email.
          </span>
        </label>
        <button
          type="submit"
          disabled={!consent || submitting}
          className="btn-shine bg-gradient-brand text-white font-semibold text-lg rounded-xl px-8 py-4 shadow-md transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {submitting ? 'Reserving your seat...' : 'RESERVE MY SEAT & JOIN THE GROUP'}
        </button>
        <p className="text-center text-wt-gray-text text-[13px]">
          Free entry. You will be added to the official community instantly.
        </p>
      </form>
    </div>
  )
}
