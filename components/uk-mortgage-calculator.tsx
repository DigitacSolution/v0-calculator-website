"use client"

import { useState } from "react"
import { DollarSign, Percent, Calendar, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function UKMortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(300000)
  const [deposit, setDeposit] = useState(60000)
  const [interestRate, setInterestRate] = useState(4.5)
  const [mortgageTerm, setMortgageTerm] = useState(25)
  const [repaymentType, setRepaymentType] = useState<"repayment" | "interest-only">("repayment")
  const [currency, setCurrency] = useState<"GBP" | "USD">("GBP")

  const mortgageAmount = propertyValue - deposit
  const loanToValue = (mortgageAmount / propertyValue) * 100

  const monthlyRate = interestRate / 100 / 12
  const totalPayments = mortgageTerm * 12

  let monthlyPayment = 0
  if (repaymentType === "repayment") {
    monthlyPayment =
      (mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1)
  } else {
    // Interest-only
    monthlyPayment = mortgageAmount * monthlyRate
  }

  const totalPaid = monthlyPayment * totalPayments
  const totalInterest = totalPaid - mortgageAmount

  // Calculate stamp duty (England & NI rates as of 2024)
  let stampDuty = 0
  if (propertyValue > 250000) {
    stampDuty += (Math.min(propertyValue, 925000) - 250000) * 0.05
  }
  if (propertyValue > 925000) {
    stampDuty += (Math.min(propertyValue, 1500000) - 925000) * 0.1
  }
  if (propertyValue > 1500000) {
    stampDuty += (propertyValue - 1500000) * 0.12
  }

  const formatCurrency = (value: number) => {
    const symbol = currency === "GBP" ? "£" : "$"
    const formatted = new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
    return `${symbol}${formatted}`
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setCurrency("GBP")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "GBP"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          GBP
        </button>
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "USD"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          USD
        </button>
      </div>

      <div className="grid gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Property Value
            </Label>
            <span className="text-2xl font-bold text-primary">{formatCurrency(propertyValue)}</span>
          </div>
          <Slider
            value={[propertyValue]}
            onValueChange={([value]) => setPropertyValue(value)}
            min={50000}
            max={2000000}
            step={10000}
            className="w-full"
          />
          <Input
            type="number"
            value={propertyValue}
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            className="text-center font-semibold"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              Deposit ({((deposit / propertyValue) * 100).toFixed(1)}%)
            </Label>
            <span className="text-2xl font-bold text-primary">{formatCurrency(deposit)}</span>
          </div>
          <Slider
            value={[deposit]}
            onValueChange={([value]) => setDeposit(value)}
            min={propertyValue * 0.05}
            max={propertyValue * 0.5}
            step={5000}
            className="w-full"
          />
          <Input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="text-center font-semibold"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Percent className="w-4 h-4 text-primary" />
              Interest Rate
            </Label>
            <span className="text-2xl font-bold text-primary">{interestRate.toFixed(2)}%</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={([value]) => setInterestRate(value)}
            min={1}
            max={15}
            step={0.1}
            className="w-full"
          />
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            step="0.1"
            className="text-center font-semibold"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Mortgage Term
            </Label>
            <span className="text-2xl font-bold text-primary">{mortgageTerm} years</span>
          </div>
          <Slider
            value={[mortgageTerm]}
            onValueChange={([value]) => setMortgageTerm(value)}
            min={5}
            max={35}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Repayment Type</Label>
          <div className="flex gap-2">
            <button
              onClick={() => setRepaymentType("repayment")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                repaymentType === "repayment"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Repayment
            </button>
            <button
              onClick={() => setRepaymentType("interest-only")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                repaymentType === "interest-only"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Interest-Only
            </button>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-4">UK Mortgage Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="text-muted-foreground">Monthly Payment</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Mortgage Amount</span>
            <span className="font-semibold">{formatCurrency(mortgageAmount)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Loan to Value (LTV)</span>
            <span className="font-semibold">{loanToValue.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Stamp Duty (England & NI)</span>
            <span className="font-semibold">{formatCurrency(stampDuty)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total Interest Paid</span>
            <span className="font-semibold text-orange-600">{formatCurrency(totalInterest)}</span>
          </div>
          <div className="flex justify-between items-center text-sm pt-3 border-t border-border">
            <span className="text-muted-foreground font-medium">Total Amount Paid</span>
            <span className="text-lg font-bold">{formatCurrency(totalPaid)}</span>
          </div>
        </div>
      </Card>

      {repaymentType === "interest-only" && (
        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-4">
          <p className="text-sm text-orange-800 dark:text-orange-200">
            <strong>Note:</strong> With interest-only mortgages, you'll still owe the full{" "}
            {formatCurrency(mortgageAmount)} at the end of the term. You'll need a repayment plan in place.
          </p>
        </div>
      )}
    </div>
  )
}
