import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Online Calculators - 127+ Financial, Math, Health & Utility Tools",
  description:
    "Use our free online calculator suite with 127+ tools for financial planning, investments, taxes, health, fitness, math, and utilities. No sign-up required.",
  applicationName: "Calculator Hub",
  generator: "Next.js",
  keywords:
    "free calculators, online calculator, financial calculator, investment calculator, loan calculator, mortgage calculator, BMI calculator, tax calculator, unit converter",
  referrer: "strict-origin-when-cross-origin",

  openGraph: {
    type: "website",
    url: "https://calculator.app",
    title: "Free Online Calculators - 127+ Financial, Math, Health & Utility Tools",
    description:
      "Comprehensive suite of free online calculators for finance, investments, health, fitness, math, and more. Real-time results, no registration needed.",
    siteName: "Calculator Hub",
    images: [
      {
        url: "/calculator-app-hero.jpg",
        width: 1200,
        height: 1200,
        alt: "Calculator Hub - Free Online Calculators",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online Calculators - 127+ Tools",
    description: "Financial, investment, health, math calculators and more. Free, no sign-up required.",
    images: ["/calculator-app.png"],
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  alternates: {
    canonical: "https://calculator.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calculator Hub",
            description:
              "Comprehensive suite of 127+ free online calculators for financial planning, investments, health, fitness, math calculations and utilities.",
            url: "https://calculator.app",
            applicationCategory: "UtilityApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "Calculator Hub",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://calculator.app",
              },
            ],
          })}
        </script>

        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
