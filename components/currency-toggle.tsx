"use client"

import { useState, createContext, useContext, type ReactNode } from "react"

type Currency = "INR" | "USD"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatCurrency: (value: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("INR")

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatCurrency }}>{children}</CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setCurrency("INR")}
        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
          currency === "INR"
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
        }`}
      >
        ₹ INR
      </button>
      <button
        onClick={() => setCurrency("USD")}
        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
          currency === "USD"
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
        }`}
      >
        $ USD
      </button>
    </div>
  )
}
