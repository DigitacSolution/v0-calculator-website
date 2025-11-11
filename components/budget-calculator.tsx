"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function BudgetCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [income, setIncome] = useState(5000)
  const [housing, setHousing] = useState(1500)
  const [transportation, setTransportation] = useState(500)
  const [food, setFood] = useState(600)
  const [utilities, setUtilities] = useState(200)
  const [insurance, setInsurance] = useState(300)
  const [savings, setSavings] = useState(500)
  const [entertainment, setEntertainment] = useState(300)
  const [other, setOther] = useState(200)

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
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const totalExpenses = housing + transportation + food + utilities + insurance + savings + entertainment + other
  const remaining = income - totalExpenses
  const savingsRate = (savings / income) * 100

  const categories = [
    { name: "Housing", amount: housing, percent: (housing / income) * 100 },
    { name: "Transportation", amount: transportation, percent: (transportation / income) * 100 },
    { name: "Food", amount: food, percent: (food / income) * 100 },
    { name: "Utilities", amount: utilities, percent: (utilities / income) * 100 },
    { name: "Insurance", amount: insurance, percent: (insurance / income) * 100 },
    { name: "Savings", amount: savings, percent: (savings / income) * 100 },
    { name: "Entertainment", amount: entertainment, percent: (entertainment / income) * 100 },
    { name: "Other", amount: other, percent: (other / income) * 100 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "USD" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "INR" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Monthly Income</Label>
            <Input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number.parseFloat(e.target.value) || 0)}
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Housing</Label>
              <Input
                type="number"
                value={housing}
                onChange={(e) => setHousing(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Transportation</Label>
              <Input
                type="number"
                value={transportation}
                onChange={(e) => setTransportation(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Food</Label>
              <Input
                type="number"
                value={food}
                onChange={(e) => setFood(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Utilities</Label>
              <Input
                type="number"
                value={utilities}
                onChange={(e) => setUtilities(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Insurance</Label>
              <Input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Savings</Label>
              <Input
                type="number"
                value={savings}
                onChange={(e) => setSavings(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Entertainment</Label>
              <Input
                type="number"
                value={entertainment}
                onChange={(e) => setEntertainment(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Other</Label>
              <Input
                type="number"
                value={other}
                onChange={(e) => setOther(Number.parseFloat(e.target.value) || 0)}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Budget Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Total Expenses</span>
              <span className="font-bold text-xl text-primary">{formatCurrency(totalExpenses)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Income</span>
              <span className="font-semibold">{formatCurrency(income)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Remaining</span>
              <span className={`font-semibold ${remaining >= 0 ? "text-green-600" : "text-red-600"}`}>
                {formatCurrency(remaining)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Savings Rate</span>
              <span className="font-semibold text-accent">{savingsRate.toFixed(1)}%</span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Budget Breakdown</div>
              {categories.map((cat) => (
                <div key={cat.name} className="flex justify-between text-xs">
                  <span>{cat.name}</span>
                  <span className="font-semibold">{cat.percent.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default BudgetCalculator
