"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function MortgagePayoffCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [currentBalance, setCurrentBalance] = useState(250000)
  const [interestRate, setInterestRate] = useState(4.5)
  const [remainingYears, setRemainingYears] = useState(25)
  const [extraPayment, setExtraPayment] = useState(0)

  const monthlyRate = interestRate / 100 / 12
  const remainingMonths = remainingYears * 12

  // Current payment (no extra)
  const currentPayment =
    (currentBalance * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) /
    (Math.pow(1 + monthlyRate, remainingMonths) - 1)

  // With extra payment
  const totalPayment = currentPayment + extraPayment
  let balance = currentBalance
  let months = 0
  let totalInterestPaid = 0

  while (balance > 0 && months < remainingMonths) {
    const interestPayment = balance * monthlyRate
    const principalPayment = Math.min(totalPayment - interestPayment, balance)
    totalInterestPaid += interestPayment
    balance -= principalPayment
    months++
    if (balance < 1) break
  }

  const yearsToPayoff = months / 12
  const monthsSaved = remainingMonths - months
  const yearsSaved = monthsSaved / 12

  // Interest saved
  const originalTotalInterest = currentPayment * remainingMonths - currentBalance
  const interestSaved = originalTotalInterest - totalInterestPaid

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return `₹${(value * 83).toLocaleString("en-IN", {
        maximumFractionDigits: 0,
      })}`
    }
    return `$${value.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    })}`
  }

  return (
    <div className="space-y-8">
      {/* Currency Toggle */}
      <div className="flex justify-center gap-2">
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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Current Balance: {formatCurrency(currentBalance)}</Label>
            <Slider
              value={[currentBalance]}
              onValueChange={([value]) => setCurrentBalance(value)}
              min={10000}
              max={1000000}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Interest Rate: {interestRate.toFixed(2)}%</Label>
            <Slider
              value={[interestRate]}
              onValueChange={([value]) => setInterestRate(value)}
              min={1}
              max={15}
              step={0.1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Remaining Years: {remainingYears}</Label>
            <Slider
              value={[remainingYears]}
              onValueChange={([value]) => setRemainingYears(value)}
              min={1}
              max={30}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Extra Monthly Payment: {formatCurrency(extraPayment)}</Label>
            <Slider
              value={[extraPayment]}
              onValueChange={([value]) => setExtraPayment(value)}
              min={0}
              max={2000}
              step={50}
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="font-semibold text-lg mb-4">Payoff Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time to Payoff:</span>
                <span className="font-semibold">
                  {Math.floor(yearsToPayoff)} years {Math.round((yearsToPayoff % 1) * 12)} months
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time Saved:</span>
                <span className="font-semibold text-green-600">
                  {Math.floor(yearsSaved)} years {Math.round((yearsSaved % 1) * 12)} months
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest:</span>
                <span className="font-semibold">{formatCurrency(totalInterestPaid)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interest Saved:</span>
                <span className="font-semibold text-green-600">{formatCurrency(interestSaved)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-muted-foreground">New Monthly Payment:</span>
                <span className="font-bold text-lg">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/50">
            <h4 className="font-semibold mb-2">Current Mortgage</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Payment:</span>
                <span>{formatCurrency(currentPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Remaining Months:</span>
                <span>{remainingMonths}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest (Original):</span>
                <span>{formatCurrency(originalTotalInterest)}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
