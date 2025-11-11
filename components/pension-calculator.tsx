"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function PensionCalculator() {
  const [salary, setSalary] = useState(60000)
  const [years, setYears] = useState(30)
  const [pensionRate, setPensionRate] = useState(2)
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  const annualPension = (salary * (years * pensionRate)) / 100
  const monthlyPension = annualPension / 12
  const lifetimePension = annualPension * 20 // Assuming 20 years retirement

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
          <Label>Final Annual Salary: {formatCurrency(salary)}</Label>
          <Slider value={[salary]} onValueChange={([v]) => setSalary(v)} min={20000} max={300000} step={5000} />
          <Input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Years of Service: {years} years</Label>
          <Slider value={[years]} onValueChange={([v]) => setYears(v)} min={1} max={50} step={1} />
          <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Pension Rate: {pensionRate}% per year</Label>
          <Slider value={[pensionRate]} onValueChange={([v]) => setPensionRate(v)} min={0.5} max={5} step={0.1} />
          <Input
            type="number"
            value={pensionRate}
            onChange={(e) => setPensionRate(Number(e.target.value))}
            step={0.1}
          />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Pension Results</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Annual Pension:</span>
            <span className="text-xl font-bold text-primary">{formatCurrency(annualPension)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Monthly Pension:</span>
            <span className="text-xl font-bold">{formatCurrency(monthlyPension)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">20-Year Total:</span>
            <span className="text-xl font-bold text-accent">{formatCurrency(lifetimePension)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
