"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function RepaymentCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [principal, setPrincipal] = useState(50000)
  const [annualRate, setAnnualRate] = useState(8)
  const [months, setMonths] = useState(60)

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value)
  }

  const monthlyRate = annualRate / 100 / 12
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)
  const totalRepayment = monthlyPayment * months
  const totalInterest = totalRepayment - principal

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "USD"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "INR"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Loan Amount</Label>
            <Input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-32 text-right"
            />
          </div>
          <Slider value={[principal]} onValueChange={(v) => setPrincipal(v[0])} min={1000} max={500000} step={1000} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Annual Interest Rate (%)</Label>
            <Input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[annualRate]} onValueChange={(v) => setAnnualRate(v[0])} min={0} max={30} step={0.1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Repayment Period (months)</Label>
            <Input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-24 text-right"
            />
          </div>
          <Slider value={[months]} onValueChange={(v) => setMonths(v[0])} min={6} max={360} step={6} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Monthly Repayment</p>
            <p className="text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Loan Amount</p>
              <p className="text-lg font-semibold">{formatCurrency(principal)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Repayment</p>
              <p className="text-lg font-semibold">{formatCurrency(totalRepayment)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Interest</p>
              <p className="text-lg font-semibold text-red-600">{formatCurrency(totalInterest)}</p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">Repayment Period</p>
            <p className="text-2xl font-bold">
              {months} months ({(months / 12).toFixed(1)} years)
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
