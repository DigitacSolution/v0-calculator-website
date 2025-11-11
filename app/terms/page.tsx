export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>

        <p className="text-muted-foreground mb-4">
          <strong>Last Updated:</strong>{" "}
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Acceptance of Terms</h2>
          <p className="text-foreground leading-relaxed">
            By accessing and using Calculator Hub, you accept and agree to be bound by these Terms of Service. If you do
            not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Use of Service</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Permitted Use</h3>
          <p className="text-foreground leading-relaxed mb-3">You may use our calculators and tools for:</p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Personal financial planning and calculations</li>
            <li>Educational purposes</li>
            <li>General information and estimation</li>
            <li>Non-commercial use</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Prohibited Use</h3>
          <p className="text-foreground leading-relaxed mb-3">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Distribute malware or harmful code</li>
            <li>Scrape or harvest data from the website</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with or disrupt the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Disclaimer of Warranties</h2>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>IMPORTANT:</strong> Calculator Hub provides tools and calculators "as is" without warranties of any
            kind, either express or implied.
          </p>
          <p className="text-foreground leading-relaxed mb-3">
            Our calculators are provided for informational and educational purposes only. Results should not be
            considered:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Professional financial advice</li>
            <li>Medical or health advice</li>
            <li>Legal advice</li>
            <li>Tax advice</li>
            <li>Investment recommendations</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Always consult with qualified professionals before making important financial, health, or legal decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Accuracy of Information</h2>
          <p className="text-foreground leading-relaxed">
            While we strive to provide accurate calculators and information, we make no guarantees about the accuracy,
            completeness, or reliability of results. Calculations may contain errors or may not reflect your specific
            situation. Always verify important calculations independently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Limitation of Liability</h2>
          <p className="text-foreground leading-relaxed">
            Calculator Hub and its operators shall not be liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from your use of our website or calculators. This includes but is not limited to
            financial losses, data loss, or business interruption.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Intellectual Property</h2>
          <p className="text-foreground leading-relaxed">
            All content on Calculator Hub, including text, graphics, logos, and software, is the property of Calculator
            Hub or its licensors and is protected by copyright and intellectual property laws. You may not reproduce,
            distribute, or create derivative works without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Third-Party Content</h2>
          <p className="text-foreground leading-relaxed">
            Our website displays advertisements and may contain links to third-party websites. We are not responsible
            for the content, accuracy, or practices of these external sites. Your interactions with third-party content
            are solely between you and the third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Modifications to Service</h2>
          <p className="text-foreground leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice.
            We may also update these Terms of Service periodically. Continued use of the website after changes
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Governing Law</h2>
          <p className="text-foreground leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard
            to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Information</h2>
          <p className="text-foreground leading-relaxed">
            For questions about these Terms of Service, please visit our{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact Page
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  )
}
