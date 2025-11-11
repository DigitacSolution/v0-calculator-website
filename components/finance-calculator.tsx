"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinanceCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [loanAmount, setLoanAmount] = useState(250000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value)
  }

  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  const totalAmount = monthlyPayment * numberOfPayments
  const totalInterest = totalAmount - loanAmount

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-end">
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

      <Tabs defaultValue="loan" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="loan">Loan</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="loan" className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Loan Amount</Label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="text-right"
              />
            </div>

            <div className="space-y-3">
              <Label>Interest Rate (%)</Label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="text-right"
                step="0.1"
              />
            </div>

            <div className="space-y-3">
              <Label>Loan Term (years)</Label>
              <Input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="text-right"
              />
            </div>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                <p className="text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount Paid</p>
                  <p className="text-xl font-semibold">{formatCurrency(totalAmount)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Interest</p>
                  <p className="text-xl font-semibold text-red-600">{formatCurrency(totalInterest)}</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="savings">
          <p className="text-center text-muted-foreground py-8">Savings calculator coming soon...</p>
        </TabsContent>

        <TabsContent value="investment">
          <p className="text-center text-muted-foreground py-8">Investment calculator coming soon...</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
