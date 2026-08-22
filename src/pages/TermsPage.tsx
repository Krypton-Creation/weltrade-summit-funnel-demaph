import LegalPageLayout from '../components/LegalPageLayout'

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" effectiveDate="August 20, 2026">
      <p>
        The event is free to attend. Registration reserves a seat but entry is first come, first
        seated, subject to hall capacity.
      </p>
      <p>
        Registration answers must be truthful. The organizers may decline entry where registration
        information is inaccurate.
      </p>
      <p>
        The summit provides trading education and live market demonstrations. Nothing at the event
        or on this site is financial advice. Trading involves risk, and decisions you make are
        your own responsibility.
      </p>
      <p>
        Giveaways are subject to physical attendance and the organizers' draw process on the day.
      </p>
      <p>
        The organizers may photograph and record the event for promotional use. Attendance implies
        acceptance unless you object on the day.
      </p>
    </LegalPageLayout>
  )
}
