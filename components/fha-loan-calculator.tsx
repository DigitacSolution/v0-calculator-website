"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Home, DollarSign, Percent, Calendar } from "lucide-react"

export default function FHALoanCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [homePrice, setHomePrice] = useState(300000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(3.5)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(360)
  const [creditScore, setCreditScore] = useState(700)

  const downPayment = homePrice * (downPaymentPercent / 100)
  const loanAmount = homePrice - downPayment

  // FHA MIP rates
  const upfrontMIP = loanAmount * 0.0175 // 1.75% upfront
  const totalLoanAmount = loanAmount + upfrontMIP

  // Annual MIP rate based on loan term and down payment
  let annualMIPRate = 0.0055 // Default 0.55%
  if (loanTerm <= 180 && downPaymentPercent >= 10) {
    annualMIPRate = 0
  } else if (downPaymentPercent < 5) {
    annualMIPRate = 0.0085 // 0.85% for loans with less than 5% down
  }

  const monthlyMIP = (totalLoanAmount * annualMIPRate) / 12
  const monthlyRate = interestRate / 100 / 12
  const monthlyPI =
    (totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
  const monthlyPayment = monthlyPI + monthlyMIP

  const totalPayment = monthlyPayment * loanTerm
  const totalInterest = monthlyPI * loanTerm - totalLoanAmount
  const totalMIP = upfrontMIP + monthlyMIP * loanTerm

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
            max={800000}
            step={10000}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <DollarSign className="w-4 h-4" />
            Down Payment: {downPaymentPercent.toFixed(1)}% ({formatCurrency(downPayment)})
          </label>
          <Slider
            value={[downPaymentPercent]}
            onValueChange={(value) => setDownPaymentPercent(value[0])}
            min={3.5}
            max={20}
            step={0.5}
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
            max={10}
            step={0.125}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Calendar className="w-4 h-4" />
            Loan Term: {loanTerm / 12} years
          </label>
          <Slider
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
            min={180}
            max={360}
            step={180}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Monthly Payment</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(monthlyPayment)}</div>
          <div className="text-xs text-muted-foreground mt-1">Includes MIP</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Total MIP</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalMIP)}</div>
          <div className="text-xs text-muted-foreground mt-1">Upfront + Monthly</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalInterest)}</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">FHA Loan Breakdown</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Home Price:</span>
            <span className="font-medium text-foreground">{formatCurrency(homePrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Down Payment ({downPaymentPercent.toFixed(1)}%):</span>
            <span className="font-medium text-foreground">{formatCurrency(downPayment)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Base Loan Amount:</span>
            <span className="font-medium text-foreground">{formatCurrency(loanAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Upfront MIP (1.75%):</span>
            <span className="font-medium text-foreground">{formatCurrency(upfrontMIP)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Loan Amount:</span>
            <span className="font-medium text-foreground">{formatCurrency(totalLoanAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monthly MIP:</span>
            <span className="font-medium text-foreground">{formatCurrency(monthlyMIP)}</span>
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
