"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

export default function IRRCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [initialInvestment, setInitialInvestment] = useState(-100000)
  const [cashFlows, setCashFlows] = useState([20000, 25000, 30000, 35000, 40000])

  const addCashFlow = () => {
    setCashFlows([...cashFlows, 0])
  }

  const removeCashFlow = (index: number) => {
    setCashFlows(cashFlows.filter((_, i) => i !== index))
  }

  const updateCashFlow = (index: number, value: number) => {
    const newFlows = [...cashFlows]
    newFlows[index] = value
    setCashFlows(newFlows)
  }

  // Calculate IRR using Newton-Raphson method
  const calculateIRR = () => {
    const flows = [initialInvestment, ...cashFlows]
    let rate = 0.1 // Initial guess
    const maxIterations = 1000
    const tolerance = 0.00001

    for (let i = 0; i < maxIterations; i++) {
      let npv = 0
      let dnpv = 0

      for (let t = 0; t < flows.length; t++) {
        npv += flows[t] / Math.pow(1 + rate, t)
        dnpv += (-t * flows[t]) / Math.pow(1 + rate, t + 1)
      }

      const newRate = rate - npv / dnpv

      if (Math.abs(newRate - rate) < tolerance) {
        return newRate * 100
      }

      rate = newRate
    }

    return rate * 100
  }

  const irr = calculateIRR()
  const totalInvested = Math.abs(initialInvestment)
  const totalReturns = cashFlows.reduce((sum, flow) => sum + flow, 0)
  const netProfit = totalReturns + initialInvestment

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

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Initial Investment (negative value)</label>
          <Input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground">Annual Cash Flows</label>
            <Button onClick={addCashFlow} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              Add Year
            </Button>
          </div>
          <div className="space-y-2">
            {cashFlows.map((flow, index) => (
              <div key={index} className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    value={flow}
                    onChange={(e) => updateCashFlow(index, Number(e.target.value))}
                    placeholder={`Year ${index + 1}`}
                  />
                </div>
                <Button
                  onClick={() => removeCashFlow(index)}
                  size="icon"
                  variant="outline"
                  className="text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">IRR</div>
          <div
            className={`text-2xl font-bold ${irr >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {irr.toFixed(2)}%
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Total Returns</div>
          <div className="text-2xl font-bold text-foreground">{formatCurrency(totalReturns)}</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="text-sm text-muted-foreground mb-1">Net Profit</div>
          <div
            className={`text-2xl font-bold ${netProfit >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {formatCurrency(netProfit)}
          </div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Investment Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Initial Investment:</span>
            <span className="font-medium text-foreground">{formatCurrency(totalInvested)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Cash Inflows:</span>
            <span className="font-medium text-foreground">{formatCurrency(totalReturns)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Project Duration:</span>
            <span className="font-medium text-foreground">{cashFlows.length} years</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Internal Rate of Return:</span>
            <span className="font-bold text-foreground">{irr.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
