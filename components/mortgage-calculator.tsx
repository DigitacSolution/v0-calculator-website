"use client"

import { useState } from "react"

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [downPayment, setDownPayment] = useState(60000)

  const principal = loanAmount - downPayment
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    monthlyRate === 0
      ? principal / numberOfPayments
      : (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const totalPayment = monthlyPayment * numberOfPayments
  const totalInterest = totalPayment - principal

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Home Price: ${loanAmount.toLocaleString()}
        </label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Down Payment: ${downPayment.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max={loanAmount * 0.5}
          step="5000"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Interest Rate (%): {interestRate.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="15"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Loan Term (Years): {loanTerm}</label>
        <input
          type="range"
          min="5"
          max="50"
          step="1"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
            <p className="text-2xl font-bold text-primary">
              ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Loan Amount</p>
            <p className="text-2xl font-bold text-foreground">${principal.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
            <p className="text-2xl font-bold text-accent">
              ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
            <p className="text-2xl font-bold text-foreground">
              ${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
