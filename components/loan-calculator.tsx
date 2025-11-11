"use client"

import { useState } from "react"

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("200000")
  const [rate, setRate] = useState("5.5")
  const [years, setYears] = useState("30")
  const [currency, setCurrency] = useState<"INR" | "USD">("INR")

  const calculatePayment = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100 / 12
    const n = Number.parseFloat(years) * 12

    if (r === 0) return (p / n).toFixed(2)
    const monthlyPayment = (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
    return monthlyPayment.toFixed(2)
  }

  const calculateTotalPayment = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100 / 12
    const n = Number.parseFloat(years) * 12

    if (r === 0) return p.toFixed(2)
    const monthlyPayment = (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
    return (monthlyPayment * n).toFixed(2)
  }

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const monthlyPayment = Number.parseFloat(calculatePayment())
  const totalPayment = Number.parseFloat(calculateTotalPayment())
  const totalInterest = totalPayment - Number.parseFloat(principal)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrency("INR")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currency === "INR"
                ? "bg-primary text-primary-foreground"
                : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
            }`}
          >
            ₹ INR
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currency === "USD"
                ? "bg-primary text-primary-foreground"
                : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Loan Amount: {formatCurrency(Number.parseFloat(principal))}
        </label>
        <input
          type="range"
          min="10000"
          max="10000000"
          step="10000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full"
        />
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full mt-2 px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Annual Interest Rate: {rate}%</label>
        <input
          type="range"
          min="0.1"
          max="20"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          step="0.1"
          className="w-full mt-2 px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Loan Term: {years} years</label>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full"
        />
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full mt-2 px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground font-medium">Monthly Payment</div>
          <div className="text-2xl font-bold text-primary">{formatCurrency(monthlyPayment)}</div>
        </div>
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground font-medium">Total Interest</div>
          <div className="text-2xl font-bold text-accent">{formatCurrency(totalInterest)}</div>
        </div>
        <div className="bg-gradient-to-br from-slate-200 to-slate-100 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground font-medium">Total Payment</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalPayment)}</div>
        </div>
      </div>
    </div>
  )
}
