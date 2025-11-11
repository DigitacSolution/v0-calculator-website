"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { DollarSign, Calendar, Percent } from "lucide-react"

export default function PersonalLoanCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [loanAmount, setLoanAmount] = useState(15000)
  const [interestRate, setInterestRate] = useState(10.5)
  const [loanTerm, setLoanTerm] = useState(36)

  const monthlyRate = interestRate / 100 / 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
  const totalPayment = monthlyPayment * loanTerm
  const totalInterest = totalPayment - loanAmount

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
            Personal Loan Amount: {formatCurrency(loanAmount)}
          </label>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            min={1000}
            max={100000}
            step={500}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatCurrency(1000)}</span>
            <span>{formatCurrency(100000)}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Percent className="w-4 h-4" />
            Interest Rate: {interestRate.toFixed(2)}%
          </label>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            min={5}
            max={36}
            step={0.25}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>5%</span>
            <span>36%</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Calendar className="w-4 h-4" />
            Loan Term: {loanTerm} months ({(loanTerm / 12).toFixed(1)} years)
          </label>
          <Slider
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
            min={12}
            max={84}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>12 months</span>
            <span>84 months</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Monthly Payment</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(monthlyPayment)}</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalInterest)}</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Total Payment</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalPayment)}</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Loan Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Loan Amount:</span>
            <span className="font-medium text-foreground">{formatCurrency(loanAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Interest Rate:</span>
            <span className="font-medium text-foreground">{interestRate.toFixed(2)}% APR</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Loan Term:</span>
            <span className="font-medium text-foreground">{loanTerm} months</span>
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
