"use client"

import { useState } from "react"

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState(5000)
  const [interestRate, setInterestRate] = useState(18)
  const [monthlyPayment, setMonthlyPayment] = useState(300)

  const monthlyRate = interestRate / 100 / 12
  let remainingBalance = balance
  let totalInterest = 0
  let months = 0
  const maxIterations = 600

  while (remainingBalance > 0 && months < maxIterations) {
    const interestCharge = remainingBalance * monthlyRate
    remainingBalance -= monthlyPayment - interestCharge
    totalInterest += interestCharge
    months++
  }

  const totalPayment = balance + totalInterest

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Credit Card Balance: ${balance.toLocaleString()}
        </label>
        <input
          type="range"
          min="100"
          max="100000"
          step="100"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Interest Rate (%): {interestRate.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="50"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Monthly Payment: ${monthlyPayment.toLocaleString()}
        </label>
        <input
          type="range"
          min="50"
          max="5000"
          step="10"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payoff Time</p>
            <p className="text-2xl font-bold text-foreground">{months} months</p>
            <p className="text-xs text-muted-foreground">
              {Math.floor(months / 12)} yrs {months % 12} mo
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
            <p className="text-2xl font-bold text-accent">
              ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Total Amount Paid</p>
            <p className="text-3xl font-bold text-primary">
              ${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
