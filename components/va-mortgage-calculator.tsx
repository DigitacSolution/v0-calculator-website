"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Home, Percent, Shield } from "lucide-react"

export default function VAMortgageCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [homePrice, setHomePrice] = useState(350000)
  const [interestRate, setInterestRate] = useState(6.0)
  const [loanTerm, setLoanTerm] = useState(360)
  const [firstTimeUse, setFirstTimeUse] = useState(true)

  // VA Funding Fee rates
  const fundingFeeRate = firstTimeUse ? 0.0215 : 0.0335 // 2.15% first time, 3.35% subsequent
  const fundingFee = homePrice * fundingFeeRate
  const totalLoanAmount = homePrice + fundingFee

  const monthlyRate = interestRate / 100 / 12
  const monthlyPayment =
    (totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
  const totalPayment = monthlyPayment * loanTerm
  const totalInterest = totalPayment - totalLoanAmount

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
            <Home className="w-4 h-4" />
            Home Price: {formatCurrency(homePrice)}
          </label>
          <Slider
            value={[homePrice]}
            onValueChange={(value) => setHomePrice(value[0])}
            min={50000}
            max={1000000}
            step={10000}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Percent className="w-4 h-4" />
            Interest Rate: {interestRate.toFixed(2)}%
          </label>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            min={4}
            max={9}
            step={0.125}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Shield className="w-4 h-4" />
            Loan Term: {loanTerm / 12} years
          </label>
          <Slider
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
            min={180}
            max={360}
            step={60}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="firstTimeUse"
            checked={firstTimeUse}
            onChange={(e) => setFirstTimeUse(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300"
          />
          <label htmlFor="firstTimeUse" className="text-sm font-medium text-foreground cursor-pointer">
            First Time Use of VA Loan (2.15% funding fee vs 3.35%)
          </label>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Monthly Payment</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(monthlyPayment)}</div>
          <div className="text-xs text-muted-foreground mt-1">No PMI required</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">VA Funding Fee</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(fundingFee)}</div>
          <div className="text-xs text-muted-foreground mt-1">{(fundingFeeRate * 100).toFixed(2)}% of home price</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalInterest)}</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">VA Loan Benefits</h3>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
            <p className="text-muted-foreground">No down payment required (0% down)</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
            <p className="text-muted-foreground">No private mortgage insurance (PMI)</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
            <p className="text-muted-foreground">Competitive interest rates</p>
          </div>
        </div>

        <h3 className="font-semibold text-foreground mb-3">Loan Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Home Price:</span>
            <span className="font-medium text-foreground">{formatCurrency(homePrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Down Payment:</span>
            <span className="font-medium text-foreground">{formatCurrency(0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">VA Funding Fee ({(fundingFeeRate * 100).toFixed(2)}%):</span>
            <span className="font-medium text-foreground">{formatCurrency(fundingFee)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Loan Amount:</span>
            <span className="font-medium text-foreground">{formatCurrency(totalLoanAmount)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Monthly Payment:</span>
            <span className="font-bold text-foreground">{formatCurrency(monthlyPayment)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
