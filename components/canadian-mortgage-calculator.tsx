"use client"

import { useState } from "react"
import { DollarSign, Percent, Calendar, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function CanadianMortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [amortizationPeriod, setAmortizationPeriod] = useState(25)
  const [paymentFrequency, setPaymentFrequency] = useState<"monthly" | "bi-weekly" | "weekly">("monthly")
  const [currency, setCurrency] = useState<"CAD" | "USD">("CAD")

  const loanAmount = homePrice - downPayment
  const downPaymentPercent = (downPayment / homePrice) * 100

  // Calculate CMHC insurance if down payment < 20%
  let cmhcInsurance = 0
  if (downPaymentPercent < 20) {
    if (downPaymentPercent >= 15) {
      cmhcInsurance = loanAmount * 0.028 // 2.8% for 15-19.99% down
    } else if (downPaymentPercent >= 10) {
      cmhcInsurance = loanAmount * 0.031 // 3.1% for 10-14.99% down
    } else {
      cmhcInsurance = loanAmount * 0.04 // 4% for 5-9.99% down
    }
  }

  const totalLoan = loanAmount + cmhcInsurance

  // Calculate payments based on frequency
  let paymentsPerYear = 12
  if (paymentFrequency === "bi-weekly") paymentsPerYear = 26
  if (paymentFrequency === "weekly") paymentsPerYear = 52

  const periodicRate = interestRate / 100 / paymentsPerYear
  const totalPayments = amortizationPeriod * paymentsPerYear

  const payment =
    (totalLoan * (periodicRate * Math.pow(1 + periodicRate, totalPayments))) /
    (Math.pow(1 + periodicRate, totalPayments) - 1)

  const totalPaid = payment * totalPayments
  const totalInterest = totalPaid - totalLoan

  const formatCurrency = (value: number) => {
    const symbol = currency === "CAD" ? "$" : "$"
    const formatted = new Intl.NumberFormat("en-CA", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
    return `${symbol}${formatted}`
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setCurrency("CAD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "CAD"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          CAD
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
              Home Price
            </Label>
            <span className="text-2xl font-bold text-primary">{formatCurrency(homePrice)}</span>
          </div>
          <Slider
            value={[homePrice]}
            onValueChange={([value]) => setHomePrice(value)}
            min={100000}
            max={2000000}
            step={10000}
            className="w-full"
          />
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="text-center font-semibold"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              Down Payment ({downPaymentPercent.toFixed(1)}%)
            </Label>
            <span className="text-2xl font-bold text-primary">{formatCurrency(downPayment)}</span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={([value]) => setDownPayment(value)}
            min={homePrice * 0.05}
            max={homePrice * 0.5}
            step={5000}
            className="w-full"
          />
          <Input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
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
              Amortization Period
            </Label>
            <span className="text-2xl font-bold text-primary">{amortizationPeriod} years</span>
          </div>
          <Slider
            value={[amortizationPeriod]}
            onValueChange={([value]) => setAmortizationPeriod(value)}
            min={5}
            max={30}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Payment Frequency</Label>
          <div className="flex gap-2">
            <button
              onClick={() => setPaymentFrequency("monthly")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                paymentFrequency === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPaymentFrequency("bi-weekly")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                paymentFrequency === "bi-weekly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Bi-Weekly
            </button>
            <button
              onClick={() => setPaymentFrequency("weekly")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                paymentFrequency === "weekly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Weekly
            </button>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-4">Canadian Mortgage Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="text-muted-foreground">
              {paymentFrequency.charAt(0).toUpperCase() + paymentFrequency.slice(1)} Payment
            </span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(payment)}</span>
          </div>
          {cmhcInsurance > 0 && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">CMHC Insurance</span>
              <span className="font-semibold">{formatCurrency(cmhcInsurance)}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Mortgage Amount</span>
            <span className="font-semibold">{formatCurrency(loanAmount)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total Loan (with insurance)</span>
            <span className="font-semibold">{formatCurrency(totalLoan)}</span>
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

      {downPaymentPercent < 20 && (
        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-4">
          <p className="text-sm text-orange-800 dark:text-orange-200">
            <strong>Note:</strong> Down payments less than 20% require CMHC mortgage insurance in Canada. This has been
            included in your calculations.
          </p>
        </div>
      )}
    </div>
  )
}
