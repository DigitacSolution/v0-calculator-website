"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function FutureValueCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [presentValue, setPresentValue] = useState(10000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(10)

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

  const futureValue = presentValue * Math.pow(1 + rate / 100, years)
  const totalGain = futureValue - presentValue

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
            <Label>Present Value</Label>
            <Input
              type="number"
              value={presentValue}
              onChange={(e) => setPresentValue(Number(e.target.value))}
              className="w-32 text-right"
            />
          </div>
          <Slider
            value={[presentValue]}
            onValueChange={(v) => setPresentValue(v[0])}
            min={1000}
            max={500000}
            step={1000}
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Annual Interest Rate (%)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={0} max={20} step={0.1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Number of Years</Label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-24 text-right"
            />
          </div>
          <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={50} step={1} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Future Value</p>
            <p className="text-4xl font-bold text-primary">{formatCurrency(futureValue)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Starting Amount</p>
              <p className="text-xl font-semibold">{formatCurrency(presentValue)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Gain</p>
              <p className="text-xl font-semibold text-green-600">{formatCurrency(totalGain)}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
