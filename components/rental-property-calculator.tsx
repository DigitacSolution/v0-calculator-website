"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { DollarSign, Home, TrendingUp } from "lucide-react"

export default function RentalPropertyCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [propertyPrice, setPropertyPrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [monthlyRent, setMonthlyRent] = useState(2000)
  const [expenses, setExpenses] = useState(500)
  const [vacancyRate, setVacancyRate] = useState(5)

  const loanAmount = propertyPrice - downPayment
  const monthlyIncome = monthlyRent * (1 - vacancyRate / 100)
  const monthlyCashFlow = monthlyIncome - expenses
  const annualCashFlow = monthlyCashFlow * 12
  const cashOnCashReturn = (annualCashFlow / downPayment) * 100
  const capRate = (annualCashFlow / propertyPrice) * 100
  const grossYield = ((monthlyRent * 12) / propertyPrice) * 100

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
            Property Price: {formatCurrency(propertyPrice)}
          </label>
          <Slider
            value={[propertyPrice]}
            onValueChange={(value) => setPropertyPrice(value[0])}
            min={100000}
            max={1000000}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatCurrency(100000)}</span>
            <span>{formatCurrency(1000000)}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <DollarSign className="w-4 h-4" />
            Down Payment: {formatCurrency(downPayment)}
          </label>
          <Slider
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            min={0}
            max={propertyPrice * 0.5}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatCurrency(0)}</span>
            <span>{formatCurrency(propertyPrice * 0.5)}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <TrendingUp className="w-4 h-4" />
            Monthly Rent: {formatCurrency(monthlyRent)}
          </label>
          <Slider
            value={[monthlyRent]}
            onValueChange={(value) => setMonthlyRent(value[0])}
            min={500}
            max={10000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatCurrency(500)}</span>
            <span>{formatCurrency(10000)}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <DollarSign className="w-4 h-4" />
            Monthly Expenses: {formatCurrency(expenses)}
          </label>
          <Slider
            value={[expenses]}
            onValueChange={(value) => setExpenses(value[0])}
            min={0}
            max={2000}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatCurrency(0)}</span>
            <span>{formatCurrency(2000)}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <TrendingUp className="w-4 h-4" />
            Vacancy Rate: {vacancyRate}%
          </label>
          <Slider
            value={[vacancyRate]}
            onValueChange={(value) => setVacancyRate(value[0])}
            min={0}
            max={20}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0%</span>
            <span>20%</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Monthly Cash Flow</div>
          <div
            className={`text-2xl font-bold ${monthlyCashFlow >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {formatCurrency(monthlyCashFlow)}
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Cash on Cash Return</div>
          <div
            className={`text-2xl font-bold ${cashOnCashReturn >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {cashOnCashReturn.toFixed(2)}%
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Cap Rate</div>
          <div className="text-2xl font-bold text-foreground">{capRate.toFixed(2)}%</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Investment Analysis</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Property Price:</span>
            <span className="font-medium text-foreground">{formatCurrency(propertyPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Down Payment:</span>
            <span className="font-medium text-foreground">{formatCurrency(downPayment)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monthly Rent:</span>
            <span className="font-medium text-foreground">{formatCurrency(monthlyRent)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Annual Cash Flow:</span>
            <span
              className={`font-medium ${annualCashFlow >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {formatCurrency(annualCashFlow)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Gross Yield:</span>
            <span className="font-medium text-foreground">{grossYield.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
