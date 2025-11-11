"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function HouseAffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanYears, setLoanYears] = useState(30)

  const maxLoan = (annualIncome * 4.5) / (1 - 1 / Math.pow(1 + interestRate / 100 / 12, loanYears * 12))
  const downPayment = (maxLoan * downPaymentPercent) / (100 - downPaymentPercent)
  const homePrice = maxLoan + downPayment

  const monthlyRate = interestRate / 100 / 12
  const monthlyPayment =
    (maxLoan * (monthlyRate * Math.pow(1 + monthlyRate, loanYears * 12))) /
    (Math.pow(1 + monthlyRate, loanYears * 12) - 1)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Annual Income: ${annualIncome.toLocaleString()}</label>
          <input
            type="range"
            min="30000"
            max="500000"
            step="10000"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate: {interestRate.toFixed(2)}%</label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Down Payment: {downPaymentPercent}%</label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Loan Term: {loanYears} years</label>
          <input
            type="range"
            min="10"
            max="40"
            step="1"
            value={loanYears}
            onChange={(e) => setLoanYears(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Max Home Price</p>
            <p className="text-3xl font-bold text-foreground">${homePrice.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Monthly Payment</p>
            <p className="text-3xl font-bold text-foreground">${monthlyPayment.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Down Payment Required</p>
          <p className="text-2xl font-bold">${downPayment.toFixed(0)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Loan Amount</p>
          <p className="text-2xl font-bold">${maxLoan.toFixed(0)}</p>
        </Card>
      </div>
    </div>
  )
}
