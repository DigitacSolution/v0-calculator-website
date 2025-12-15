"use client"

import { useState } from "react"
import { DollarSign, Percent, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function MortgageAmortizationCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [currency, setCurrency] = useState<"INR" | "USD">("USD")

  const monthlyRate = interestRate / 100 / 12
  const totalPayments = loanTerm * 12

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1)

  // Generate first year amortization schedule
  const generateAmortization = () => {
    const schedule = []
    let balance = loanAmount

    for (let month = 1; month <= 12; month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = monthlyPayment - interestPayment
      balance -= principalPayment

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance,
      })
    }

    return schedule
  }

  const schedule = generateAmortization()
  const totalInterest = monthlyPayment * totalPayments - loanAmount

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-end">
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

      <div className="grid gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Loan Amount
            </Label>
            <span className="text-2xl font-bold text-primary">{formatCurrency(loanAmount)}</span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={([value]) => setLoanAmount(value)}
            min={50000}
            max={1000000}
            step={10000}
            className="w-full"
          />
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
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
              Loan Term
            </Label>
            <span className="text-2xl font-bold text-primary">{loanTerm} years</span>
          </div>
          <Slider
            value={[loanTerm]}
            onValueChange={([value]) => setLoanTerm(value)}
            min={5}
            max={30}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-4">Payment Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="text-muted-foreground">Monthly Payment</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total Interest</span>
            <span className="font-semibold text-orange-600">{formatCurrency(totalInterest)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total Paid</span>
            <span className="font-semibold">{formatCurrency(monthlyPayment * totalPayments)}</span>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">First Year Amortization Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-semibold">Month</th>
                <th className="text-right py-3 px-2 font-semibold">Payment</th>
                <th className="text-right py-3 px-2 font-semibold">Principal</th>
                <th className="text-right py-3 px-2 font-semibold">Interest</th>
                <th className="text-right py-3 px-2 font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month} className="border-b border-border/50 hover:bg-secondary/20">
                  <td className="py-3 px-2">{row.month}</td>
                  <td className="py-3 px-2 text-right">{formatCurrency(row.payment)}</td>
                  <td className="py-3 px-2 text-right text-green-600">{formatCurrency(row.principal)}</td>
                  <td className="py-3 px-2 text-right text-orange-600">{formatCurrency(row.interest)}</td>
                  <td className="py-3 px-2 text-right font-semibold">{formatCurrency(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
