export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>

        <p className="text-muted-foreground mb-4">
          <strong>Last Updated:</strong>{" "}
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Introduction</h2>
          <p className="text-foreground leading-relaxed">
            Welcome to Calculator Hub. We are committed to protecting your privacy and ensuring transparency about how
            we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data
            collection and usage when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Automatically Collected Information</h3>
          <p className="text-foreground leading-relaxed mb-3">
            When you visit our website, we automatically collect certain information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Calculator Data</h3>
          <p className="text-foreground leading-relaxed">
            All calculations performed on our website are processed locally in your browser. We do not store, transmit,
            or save any data you enter into our calculators. Your financial, health, or personal data remains completely
            private.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Cookies and Tracking Technologies</h2>
          <p className="text-foreground leading-relaxed mb-3">
            We use cookies and similar tracking technologies to improve your browsing experience:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for website functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant ads
            </li>
          </ul>
          <p className="text-foreground leading-relaxed">
            You can control cookies through your browser settings, though disabling certain cookies may affect website
            functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Google AdSense</h2>
          <p className="text-foreground leading-relaxed mb-3">
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads
            based on your prior visits to our website or other websites. You may opt out of personalized advertising by
            visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p className="text-foreground leading-relaxed">
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our
            website. Google's use of advertising cookies enables it and its partners to serve ads based on visits to our
            site and/or other sites on the Internet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">How We Use Information</h2>
          <p className="text-foreground leading-relaxed mb-3">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Improve website functionality and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Display relevant advertisements</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and maintain security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Data Security</h2>
          <p className="text-foreground leading-relaxed">
            We implement appropriate security measures to protect your information. However, no method of transmission
            over the internet is 100% secure. All calculator inputs are processed locally and never transmitted to our
            servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Third-Party Links</h2>
          <p className="text-foreground leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Children's Privacy</h2>
          <p className="text-foreground leading-relaxed">
            Our website is not directed to children under 13 years of age. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Your Rights</h2>
          <p className="text-foreground leading-relaxed mb-3">
            Depending on your location, you may have rights including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Objection to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Changes to This Policy</h2>
          <p className="text-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Us</h2>
          <p className="text-foreground leading-relaxed">
            If you have questions about this Privacy Policy, please contact us through our{" "}
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
