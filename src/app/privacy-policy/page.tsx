export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      <section className="mb-6">
        <p className="mb-4">
          Reference is made to Fang Ventures Private Limited (“Rekindle”, “we”,
          “our”, and “us”) and our products and services, including, without
          limitation, our mobile app currently known as “Golfbud” (the “App”)
          and our website at “www.re-kindle.sg” (collectively, the “Services”).
          This Privacy Policy (this “Policy”), which is incorporated into and
          forms part of our Terms of Service, explains the information we
          collect, how we use and disclose it, and how we protect your
          information.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-medium">User-provided Information:</span> When
            you use the Services, we may collect information including your
            name, email address, mobile number, audio recordings, images,
            videos, geographic area, and preferences. You provide this
            information when you register for an account, submit content (such
            as swing images/videos), or contact our support team.
          </li>
          <li>
            <span className="font-medium">
              Automatically Collected Information:
            </span>{" "}
            We may automatically collect technical data such as:
            <ul className="list-disc list-inside ml-6">
              <li>IP address, device type, and operating system.</li>
              <li>Usage data (e.g., which features you use and when).</li>
              <li>
                Information on your interaction with emails (e.g., whether you
                opened or clicked links).
              </li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Location Information:</span> We may
            collect data on your physical location through GPS, IP address, or
            device settings, as part of providing location-based features (for
            example, tracking where your session was recorded).
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide, maintain, and improve the Services.</li>
          <li>
            Analyse your swing submissions to deliver feedback and performance
            analysis.
          </li>
          <li>
            Communicate with you (e.g., service updates, customer support).
          </li>
          <li>Monitor usage and improve features and functionality.</li>
          <li>Enforce our Terms of Service.</li>
          <li>
            We may also use your videos and performance data to enhance our AI
            models and improve the overall quality of the App.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
        <p className="mb-2">
          We do not sell or rent your personal information. We may share data:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>
            With service providers (e.g., hosting, analytics) who help us
            deliver the Services, under confidentiality agreements.
          </li>
          <li>
            If required by law, regulation, legal process, or governmental
            request.
          </li>
          <li>To enforce our Terms or protect rights, safety, and property.</li>
          <li>
            In connection with business transfers (e.g., merger, sale,
            bankruptcy).
          </li>
          <li>
            In aggregated or anonymised form that cannot reasonably be used to
            identify you.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>Access or update your account information at any time.</li>
          <li>
            Request deletion of your account by contacting us at{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:support@re-kindle.sg"
            >
              support@re-kindle.sg
            </a>
            .
          </li>
          <li>
            Unsubscribe from marketing emails using the link provided in our
            emails.
          </li>
        </ul>
        <p className="mt-2">
          We may retain certain data for legal compliance, dispute resolution,
          or legitimate business purposes, even after account deletion.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p>
          We take reasonable measures (technical and organisational) to protect
          your information. However, no method of transmission or storage is
          fully secure. We cannot guarantee absolute security.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Children’s Privacy</h2>
        <p>
          The Services are not directed to children under 13, and we do not
          knowingly collect personal data from them. If we become aware that a
          child under 13 has provided us with personal data without verified
          parental consent, we will delete it.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          International Data Transfers
        </h2>
        <p>
          By using the Services, you consent to your information being
          transferred to and processed in Singapore and other countries where we
          or our service providers operate. These locations may not have data
          protection laws equivalent to those in your jurisdiction.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of material changes via the App, website, or by email. Your
          continued use of the Services after such updates means you accept the
          changes.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have questions or concerns about this Policy or your personal
          data, please contact:
        </p>
        <p className="font-medium">
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
