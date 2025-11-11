"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function CommissionCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [salesAmount, setSalesAmount] = useState(50000)
  const [commissionRate, setCommissionRate] = useState(5)
  const [baseSalary, setBaseSalary] = useState(3000)

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

  const commission = (salesAmount * commissionRate) / 100
  const totalEarnings = baseSalary + commission

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
            <Label>Sales Amount</Label>
            <Input
              type="number"
              value={salesAmount}
              onChange={(e) => setSalesAmount(Number(e.target.value))}
              className="w-32 text-right"
            />
          </div>
          <Slider
            value={[salesAmount]}
            onValueChange={(v) => setSalesAmount(v[0])}
            min={1000}
            max={500000}
            step={1000}
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Commission Rate (%)</Label>
            <Input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[commissionRate]} onValueChange={(v) => setCommissionRate(v[0])} min={0} max={25} step={0.1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Base Salary (Monthly)</Label>
            <Input
              type="number"
              value={baseSalary}
              onChange={(e) => setBaseSalary(Number(e.target.value))}
              className="w-32 text-right"
            />
          </div>
          <Slider value={[baseSalary]} onValueChange={(v) => setBaseSalary(v[0])} min={0} max={10000} step={100} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Total Monthly Earnings</p>
            <p className="text-4xl font-bold text-primary">{formatCurrency(totalEarnings)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Commission Earned</p>
              <p className="text-xl font-semibold text-green-600">{formatCurrency(commission)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Base Salary</p>
              <p className="text-xl font-semibold">{formatCurrency(baseSalary)}</p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">Annual Projection</p>
            <p className="text-2xl font-bold">{formatCurrency(totalEarnings * 12)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
