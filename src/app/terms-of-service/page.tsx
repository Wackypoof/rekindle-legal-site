export default function TermsOfServicePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
      <section className="mb-6">
        <p className="mb-4">
          Reference is made to Fang Ventures Private Limited (“Rekindle”, “we”,
          “our”, and “us”) and our products and services, including, without
          limitation, our mobile app currently known as “Golfbud” and our
          website at “www.re-kindle.sg” (collectively, the “Services”). These
          Terms of Service (these “Terms”) set forth the legally binding terms
          and conditions that govern your use of the Services. By accessing or
          using the Services, you are accepting these Terms (on behalf of
          yourself or the entity that you represent), and you confirm that you
          have the right, authority, and capacity to enter into these Terms. If
          you do not agree to all of these Terms, do not access or use the
          Services.
        </p>
        <p className="mb-2">
          You must be at least 13 years old to use the Services. By agreeing to
          these Terms, you confirm that you are either (a) at least 13 years old
          and have permission from your parent or legal guardian, or (b) at
          least 18 years old.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Accounts</h2>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>
            <span className="font-medium">Account Creation:</span> To access
            certain features, you must create an account and provide accurate,
            complete information. You are responsible for keeping your details
            up to date.
          </li>
          <li>
            <span className="font-medium">Account Security:</span> You are
            responsible for maintaining the confidentiality of your login
            details and all activities under your account. Notify us immediately
            if you suspect unauthorised access.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Access to Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>
            <span className="font-medium">Licence:</span> We grant you a
            limited, non-exclusive, non-transferable licence to use the Services
            for your personal, non-commercial use.
          </li>
          <li>
            <span className="font-medium">Restrictions:</span> You agree not to:
            <ul className="list-disc list-inside ml-6">
              <li>Sell, sublicense, or commercially exploit the Services.</li>
              <li>
                Modify, reverse engineer, or copy any part of the Services.
              </li>
              <li>
                Circumvent security measures or interfere with the operation of
                the Services.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Modifications:</span> We may modify,
            suspend, or discontinue the Services at any time without notice.
          </li>
          <li>
            <span className="font-medium">Ownership:</span> All intellectual
            property rights in the Services belong to Fang Ventures Private
            Limited or its licensors. No rights are granted except as outlined
            here.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Content</h2>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>
            <span className="font-medium">Content:</span> You may submit content
            (e.g., audio recordings, data). You are solely responsible for what
            you submit and must have full rights to do so.
          </li>
          <li>
            <span className="font-medium">Licence to Us:</span> By submitting
            content, you grant us a worldwide, non-exclusive, royalty-free
            licence to use, display, and process your content to provide the
            Services.
          </li>
          <li>
            <span className="font-medium">Acceptable Use:</span> You must not
            submit unlawful, offensive, or infringing content.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Health Disclaimer</h2>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>
            <span className="font-medium">Health Notice:</span> Use Rekindle
            only if you are in good general health. If you have any health
            concerns (e.g., hearing conditions or cognitive issues), consult
            your doctor before using Rekindle.
          </li>
          <li>
            <span className="font-medium">No Medical Advice:</span> Rekindle
            provides informational assistance only. It is not a substitute for
            professional medical advice or treatment.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
        <p>
          We may suspend or terminate your access if you violate these Terms.
          You may delete your account at any time.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Disclaimers</h2>
        <p>
          The Services are provided “as is” without warranties of any kind. We
          do not guarantee any specific outcomes from using Rekindle.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, Fang Ventures Private Limited
          is not liable for indirect, incidental, or consequential damages. Our
          total liability to you is limited to SGD 150.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Indemnity</h2>
        <p>
          You agree to indemnify Fang Ventures Private Limited against claims
          arising from your use of the Services or your content.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Singapore. Any disputes will
          be resolved in Singapore courts.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes</h2>
        <p>
          We may update these Terms occasionally. Continued use of the Services
          means you accept any changes.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
        <p>
          Fang Ventures Private Limited
          <br />
          Email:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:support@re-kindle.sg"
          >
            support@re-kindle.sg
          </a>
        </p>
      </section>
    </main>
  );
}
