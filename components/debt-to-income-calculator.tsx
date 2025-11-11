"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function DebtToIncomeCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(6000)
  const [mortgage, setMortgage] = useState(1500)
  const [carPayment, setCarPayment] = useState(400)
  const [creditCards, setCreditCards] = useState(200)
  const [otherDebts, setOtherDebts] = useState(150)
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  const totalDebt = mortgage + carPayment + creditCards + otherDebts
  const dtiRatio = (totalDebt / monthlyIncome) * 100

  let status = "Excellent"
  let statusColor = "text-green-600"
  if (dtiRatio > 50) {
    status = "Poor"
    statusColor = "text-red-600"
  } else if (dtiRatio > 43) {
    status = "High"
    statusColor = "text-orange-600"
  } else if (dtiRatio > 36) {
    status = "Moderate"
    statusColor = "text-yellow-600"
  } else if (dtiRatio > 28) {
    status = "Good"
    statusColor = "text-blue-600"
  }

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "USD"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "INR"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Monthly Gross Income: {formatCurrency(monthlyIncome)}</Label>
          <Slider
            value={[monthlyIncome]}
            onValueChange={([v]) => setMonthlyIncome(v)}
            min={2000}
            max={30000}
            step={500}
          />
          <Input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Mortgage/Rent Payment: {formatCurrency(mortgage)}</Label>
          <Slider value={[mortgage]} onValueChange={([v]) => setMortgage(v)} min={0} max={10000} step={100} />
          <Input type="number" value={mortgage} onChange={(e) => setMortgage(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Car Payment: {formatCurrency(carPayment)}</Label>
          <Slider value={[carPayment]} onValueChange={([v]) => setCarPayment(v)} min={0} max={2000} step={50} />
          <Input type="number" value={carPayment} onChange={(e) => setCarPayment(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Credit Card Payments: {formatCurrency(creditCards)}</Label>
          <Slider value={[creditCards]} onValueChange={([v]) => setCreditCards(v)} min={0} max={1000} step={25} />
          <Input type="number" value={creditCards} onChange={(e) => setCreditCards(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Other Debts: {formatCurrency(otherDebts)}</Label>
          <Slider value={[otherDebts]} onValueChange={([v]) => setOtherDebts(v)} min={0} max={1000} step={25} />
          <Input type="number" value={otherDebts} onChange={(e) => setOtherDebts(Number(e.target.value))} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Debt-to-Income Ratio</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Monthly Debt:</span>
            <span className="text-xl font-bold">{formatCurrency(totalDebt)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">DTI Ratio:</span>
            <span className="text-3xl font-bold text-primary">{dtiRatio.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status:</span>
            <span className={`text-xl font-bold ${statusColor}`}>{status}</span>
          </div>
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Lenders typically prefer DTI below 43%. Below 36% is considered healthy, and below 28% is excellent.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
