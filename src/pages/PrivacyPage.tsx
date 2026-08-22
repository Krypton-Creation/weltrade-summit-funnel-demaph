import LegalPageLayout from '../components/LegalPageLayout'

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="August 20, 2026">
      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">Who we are</h2>
        <p>
          This registration platform collects data for the Abuja Synthetic Trading Summit '26, an
          event hosted by Weltrade. Contact for data matters:{' '}
          <a
            href="mailto:support@weltrade.com"
            className="text-wt-blue hover:underline"
          >
            support@weltrade.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">What we collect</h2>
        <p>First name, email address, and WhatsApp number.</p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">Why we collect it</h2>
        <p>
          To reserve your seat, send event updates and reminders by WhatsApp and email, and plan
          the event experience. Lawful basis: your consent, given at registration.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">What we never do</h2>
        <p>
          We do not sell your data, and we do not share it with third parties outside the event
          organizers and the service providers that power this registration (hosting, data
          storage, email delivery).
        </p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">Retention</h2>
        <p>Registration data is kept for the event and up to 12 months after, then deleted.</p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">
          Your rights under the Nigeria Data Protection Act 2023
        </h2>
        <p>
          Access your data, correct it, withdraw consent, or request deletion at any time by
          contacting{' '}
          <a
            href="mailto:support@weltrade.com"
            className="text-wt-blue hover:underline"
          >
            support@weltrade.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold text-wt-blue-deep text-lg mb-2">Cookies and tracking</h2>
        <p>
          This site uses Meta Pixel to measure advertising performance. No tracking identifies you
          personally on this site.
        </p>
      </section>
    </LegalPageLayout>
  )
}
