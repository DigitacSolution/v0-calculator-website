import Link from "next/link"
import { Calculator } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Calculator Hub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your comprehensive resource for free online calculators. Over 150+ tools for finance, health, math, and
              everyday calculations.
            </p>
          </div>

          {/* Calculator Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#financial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link href="/#health" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Health & Fitness
                </Link>
              </li>
              <li>
                <Link href="/#math" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Math Calculators
                </Link>
              </li>
              <li>
                <Link href="/#other" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Other Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ad Choices
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Calculator Hub. All rights reserved. Results are for informational purposes only.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Not financial, medical, or legal advice. Consult professionals for important decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
