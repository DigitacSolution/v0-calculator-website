"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function LeaseCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [assetPrice, setAssetPrice] = useState(25000)
  const [downPayment, setDownPayment] = useState(2500)
  const [leaseTerm, setLeaseTerm] = useState(36)
  const [interestRate, setInterestRate] = useState(5)
  const [residualValue, setResidualValue] = useState(50)

  const formatCurrency = (amount: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(amount * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const netCapCost = assetPrice - downPayment
  const residualAmount = assetPrice * (residualValue / 100)
  const depreciation = (netCapCost - residualAmount) / leaseTerm
  const monthlyInterest = ((netCapCost + residualAmount) * (interestRate / 100)) / 12
  const monthlyPayment = depreciation + monthlyInterest
  const totalLeaseCost = monthlyPayment * leaseTerm + downPayment

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "USD" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "INR" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Asset Price: {formatCurrency(assetPrice)}</Label>
            <Slider
              value={[assetPrice]}
              onValueChange={(value) => setAssetPrice(value[0])}
              min={5000}
              max={100000}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Down Payment: {formatCurrency(downPayment)}</Label>
            <Slider
              value={[downPayment]}
              onValueChange={(value) => setDownPayment(value[0])}
              min={0}
              max={assetPrice * 0.5}
              step={500}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Lease Term: {leaseTerm} months</Label>
            <Slider
              value={[leaseTerm]}
              onValueChange={(value) => setLeaseTerm(value[0])}
              min={12}
              max={60}
              step={12}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Interest Rate: {interestRate}%</Label>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={0}
              max={15}
              step={0.1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Residual Value: {residualValue}%</Label>
            <Slider
              value={[residualValue]}
              onValueChange={(value) => setResidualValue(value[0])}
              min={20}
              max={80}
              step={5}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Lease Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Monthly Payment</span>
              <span className="font-bold text-xl text-primary">{formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Lease Cost</span>
              <span className="font-semibold">{formatCurrency(totalLeaseCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Residual Value</span>
              <span className="font-semibold text-accent">{formatCurrency(residualAmount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Depreciation/Month</span>
              <span className="font-semibold">{formatCurrency(depreciation)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Interest/Month</span>
              <span className="font-semibold">{formatCurrency(monthlyInterest)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default LeaseCalculator
