"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp, Clock } from "lucide-react"

export default function PaybackPeriodCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [initialInvestment, setInitialInvestment] = useState(100000)
  const [annualCashFlow, setAnnualCashFlow] = useState(25000)
  const [discountRate, setDiscountRate] = useState(10)

  // Simple Payback Period
  const simplePayback = initialInvestment / annualCashFlow

  // Discounted Payback Period calculation
  const calculateDiscountedPayback = () => {
    let cumulativePV = 0
    let year = 0
    const maxYears = 50

    while (cumulativePV < initialInvestment && year < maxYears) {
      year++
      const pv = annualCashFlow / Math.pow(1 + discountRate / 100, year)
      cumulativePV += pv
    }

    if (cumulativePV < initialInvestment) return null
    return year
  }

  const discountedPayback = calculateDiscountedPayback()
  const breakEvenYear = Math.ceil(simplePayback)
  const totalReturns = annualCashFlow * breakEvenYear
  const totalProfit = totalReturns - initialInvestment

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
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-8">
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

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <DollarSign className="w-4 h-4" />
            Initial Investment: {formatCurrency(initialInvestment)}
          </label>
          <Slider
            value={[initialInvestment]}
            onValueChange={(value) => setInitialInvestment(value[0])}
            min={10000}
            max={1000000}
            step={10000}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <TrendingUp className="w-4 h-4" />
            Annual Cash Flow: {formatCurrency(annualCashFlow)}
          </label>
          <Slider
            value={[annualCashFlow]}
            onValueChange={(value) => setAnnualCashFlow(value[0])}
            min={5000}
            max={200000}
            step={5000}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Clock className="w-4 h-4" />
            Discount Rate: {discountRate}%
          </label>
          <Slider
            value={[discountRate]}
            onValueChange={(value) => setDiscountRate(value[0])}
            min={0}
            max={20}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Simple Payback</div>
          <div className="text-2xl font-bold text-foreground">{simplePayback.toFixed(2)} years</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Discounted Payback</div>
          <div className="text-2xl font-bold text-foreground">
            {discountedPayback ? `${discountedPayback.toFixed(2)} years` : "N/A"}
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Break-Even Year</div>
          <div className="text-2xl font-bold text-foreground">Year {breakEvenYear}</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Payback Analysis</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Initial Investment:</span>
            <span className="font-medium text-foreground">{formatCurrency(initialInvestment)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Annual Cash Flow:</span>
            <span className="font-medium text-foreground">{formatCurrency(annualCashFlow)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Simple Payback Period:</span>
            <span className="font-medium text-foreground">{simplePayback.toFixed(2)} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Discounted Payback Period:</span>
            <span className="font-medium text-foreground">
              {discountedPayback ? `${discountedPayback.toFixed(2)} years` : "Not achieved"}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Returns at Break-Even:</span>
            <span className="font-bold text-foreground">{formatCurrency(totalReturns)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
