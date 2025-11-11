export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>

        <p className="text-muted-foreground mb-8">
          <strong>Last Updated:</strong>{" "}
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">General Information</h2>
          <p className="text-foreground leading-relaxed">
            The information and calculators provided on Calculator Hub are for general informational and educational
            purposes only. While we strive to provide accurate and up-to-date information, we make no representations or
            warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or
            availability of the information, products, services, or related graphics contained on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Not Professional Advice</h2>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Calculator Hub does not provide professional advice.</strong> The results from our calculators
            should not be considered:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>
              <strong>Financial Advice:</strong> Results are estimates only and should not replace consultation with a
              qualified financial advisor
            </li>
            <li>
              <strong>Medical/Health Advice:</strong> Health and fitness calculators are educational tools, not medical
              diagnoses
            </li>
            <li>
              <strong>Legal Advice:</strong> Do not rely on our calculators for legal decisions
            </li>
            <li>
              <strong>Tax Advice:</strong> Tax calculations are simplified and may not reflect your specific tax
              situation
            </li>
            <li>
              <strong>Investment Advice:</strong> Past performance and projections do not guarantee future results
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Calculator Accuracy</h2>
          <p className="text-foreground leading-relaxed mb-4">While we strive for accuracy in all our calculators:</p>
          <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
            <li>Results are estimates based on the information you provide</li>
            <li>Calculators use simplified formulas and may not account for all variables</li>
            <li>Real-world results may differ due to factors not included in calculations</li>
            <li>We are not responsible for decisions made based on calculator results</li>
            <li>Always verify important calculations with qualified professionals</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Financial Calculations</h2>
          <p className="text-foreground leading-relaxed">
            Financial calculators (loan, mortgage, investment, retirement, etc.) provide estimates only. Actual rates,
            terms, fees, and conditions from financial institutions may vary. Tax calculations are simplified and do not
            account for all deductions, credits, or individual circumstances. Always consult with a certified financial
            planner, accountant, or tax professional for personalized advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Health & Fitness Calculations</h2>
          <p className="text-foreground leading-relaxed">
            Health and fitness calculators (BMI, calorie, macro, etc.) are educational tools based on general population
            data. They do not account for individual health conditions, genetic factors, or medical history. Results
            should not be used to diagnose, treat, or prevent any health condition. Always consult with a qualified
            healthcare provider before making health-related decisions or starting any diet or exercise program.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Limitation of Liability</h2>
          <p className="text-foreground leading-relaxed">
            In no event shall Calculator Hub be liable for any direct, indirect, incidental, consequential, special, or
            punitive damages arising from or related to your use of our website or calculators. This includes but is not
            limited to financial losses, investment decisions, health outcomes, or any other damages or losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">External Links</h2>
          <p className="text-foreground leading-relaxed">
            Our website may contain links to external websites and display third-party advertisements. We have no
            control over and assume no responsibility for the content, privacy policies, or practices of any third-party
            sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Changes and Updates</h2>
          <p className="text-foreground leading-relaxed">
            Calculator Hub reserves the right to update, modify, or discontinue any calculator or content at any time
            without notice. We also reserve the right to update this disclaimer at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Use at Your Own Risk</h2>
          <p className="text-foreground leading-relaxed">
            By using Calculator Hub, you acknowledge and agree that you do so at your own risk. You are responsible for
            verifying any information before relying on it for important decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact</h2>
          <p className="text-foreground leading-relaxed">
            If you have questions about this disclaimer, please visit our{" "}
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
