export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground text-center">About Calculator Hub</h1>

        <div className="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Calculator Hub is dedicated to providing free, accurate, and easy-to-use calculators for everyone. Whether
              you're planning your finances, managing your health, solving math problems, or tackling everyday
              calculations, we're here to help.
            </p>
            <p className="text-foreground leading-relaxed">
              Our mission is to make complex calculations simple and accessible to everyone, empowering users to make
              informed decisions in their personal and professional lives.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Offer</h2>
            <p className="text-foreground leading-relaxed mb-4">
              With over 150+ specialized calculators across multiple categories, Calculator Hub is your comprehensive
              calculation resource:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Financial Calculators</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plan your finances with mortgage, loan, investment, retirement, and tax calculators.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Health & Fitness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your health with BMI, calorie, macro, and pregnancy calculators.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Math Calculators</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solve complex problems with geometry, statistics, algebra, and scientific calculators.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Everyday Tools</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simplify daily tasks with time, date, conversion, and construction calculators.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment to Privacy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Your privacy is paramount. All calculations are performed locally in your browser - we never store,
              transmit, or save your personal data. Your financial information, health data, and personal details remain
              completely private.
            </p>
            <p className="text-foreground leading-relaxed">
              For more details, please review our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Free Forever</h2>
            <p className="text-foreground leading-relaxed">
              Calculator Hub is completely free to use. We're supported by advertising, which allows us to provide all
              our calculators at no cost to you. We believe everyone should have access to quality calculation tools
              without barriers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Accuracy & Reliability</h2>
            <p className="text-foreground leading-relaxed mb-4">
              While we strive for accuracy in all our calculators, results are provided for informational purposes only.
              We recommend consulting with qualified professionals for important financial, health, or legal decisions.
            </p>
            <p className="text-foreground leading-relaxed">
              Our calculators are regularly updated to reflect current standards, tax brackets, and best practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Get in Touch</h2>
            <p className="text-foreground leading-relaxed">
              Have suggestions for new calculators? Found an issue? Want to provide feedback? We'd love to hear from
              you! Visit our{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact Page
              </a>{" "}
              to get in touch.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
