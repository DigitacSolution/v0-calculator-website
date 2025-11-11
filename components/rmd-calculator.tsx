"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function RMDCalculator() {
  const [balance, setBalance] = useState(500000)
  const [age, setAge] = useState(72)
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  // IRS life expectancy table (simplified)
  const lifeExpectancyTable: { [key: number]: number } = {
    72: 27.4,
    73: 26.5,
    74: 25.5,
    75: 24.6,
    76: 23.7,
    77: 22.9,
    78: 22.0,
    79: 21.1,
    80: 20.2,
    81: 19.4,
    82: 18.5,
    83: 17.7,
    84: 16.8,
    85: 16.0,
    86: 15.2,
    87: 14.4,
    88: 13.7,
    89: 12.9,
    90: 12.2,
  }

  const lifeExpectancy = lifeExpectancyTable[age] || 27.4
  const rmd = balance / lifeExpectancy
  const taxEstimate = rmd * 0.22 // Assuming 22% tax bracket

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
          <Label>IRA/401(k) Balance: {formatCurrency(balance)}</Label>
          <Slider value={[balance]} onValueChange={([v]) => setBalance(v)} min={50000} max={5000000} step={10000} />
          <Input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Your Age: {age}</Label>
          <Slider value={[age]} onValueChange={([v]) => setAge(v)} min={72} max={90} step={1} />
          <Input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Required Minimum Distribution (RMD)</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Life Expectancy Factor:</span>
            <span className="text-xl font-bold">{lifeExpectancy.toFixed(1)} years</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Required Minimum Distribution:</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(rmd)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Estimated Tax (22%):</span>
            <span className="text-xl font-bold text-accent">{formatCurrency(taxEstimate)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">After-Tax Amount:</span>
            <span className="text-xl font-bold">{formatCurrency(rmd - taxEstimate)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
