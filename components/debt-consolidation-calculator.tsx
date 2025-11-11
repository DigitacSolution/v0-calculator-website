"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface Debt {
  id: number
  balance: number
  rate: number
  minPayment: number
}

export default function DebtConsolidationCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [debts, setDebts] = useState<Debt[]>([
    { id: 1, balance: 5000, rate: 18, minPayment: 150 },
    { id: 2, balance: 3000, rate: 22, minPayment: 90 },
  ])
  const [consolidationRate, setConsolidationRate] = useState(10)
  const [consolidationTerm, setConsolidationTerm] = useState(36)

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

  const addDebt = () => {
    setDebts([...debts, { id: Date.now(), balance: 1000, rate: 15, minPayment: 50 }])
  }

  const removeDebt = (id: number) => {
    setDebts(debts.filter((d) => d.id !== id))
  }

  const updateDebt = (id: number, field: keyof Debt, value: number) => {
    setDebts(debts.map((d) => (d.id === id ? { ...d, [field]: value } : d)))
  }

  const totalBalance = debts.reduce((sum, d) => sum + d.balance, 0)
  const totalMinPayments = debts.reduce((sum, d) => sum + d.minPayment, 0)
  const weightedRate = debts.reduce((sum, d) => sum + (d.balance / totalBalance) * d.rate, 0)

  const monthlyRate = consolidationRate / 100 / 12
  const consolidatedPayment =
    (totalBalance * (monthlyRate * Math.pow(1 + monthlyRate, consolidationTerm))) /
    (Math.pow(1 + monthlyRate, consolidationTerm) - 1)
  const totalConsolidated = consolidatedPayment * consolidationTerm
  const totalInterestConsolidated = totalConsolidated - totalBalance

  const monthlySavings = totalMinPayments - consolidatedPayment

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

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Current Debts</h3>
          <Button onClick={addDebt} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Debt
          </Button>
        </div>

        {debts.map((debt) => (
          <Card key={debt.id} className="p-4">
            <div className="grid grid-cols-4 gap-4 items-end">
              <div>
                <Label className="text-xs">Balance</Label>
                <Input
                  type="number"
                  value={debt.balance}
                  onChange={(e) => updateDebt(debt.id, "balance", Number(e.target.value))}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Rate (%)</Label>
                <Input
                  type="number"
                  value={debt.rate}
                  onChange={(e) => updateDebt(debt.id, "rate", Number(e.target.value))}
                  className="text-sm"
                  step="0.1"
                />
              </div>
              <div>
                <Label className="text-xs">Min Payment</Label>
                <Input
                  type="number"
                  value={debt.minPayment}
                  onChange={(e) => updateDebt(debt.id, "minPayment", Number(e.target.value))}
                  className="text-sm"
                />
              </div>
              <Button onClick={() => removeDebt(debt.id)} size="sm" variant="destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4 pt-4 border-t">
        <h3 className="font-semibold text-lg">Consolidation Loan Terms</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>New Interest Rate (%)</Label>
            <Input
              type="number"
              value={consolidationRate}
              onChange={(e) => setConsolidationRate(Number(e.target.value))}
              step="0.1"
            />
          </div>
          <div>
            <Label>Loan Term (months)</Label>
            <Input
              type="number"
              value={consolidationTerm}
              onChange={(e) => setConsolidationTerm(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Monthly Payments</p>
              <p className="text-3xl font-bold text-red-600">{formatCurrency(totalMinPayments)}</p>
              <p className="text-xs text-muted-foreground mt-1">Avg Rate: {weightedRate.toFixed(2)}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">New Monthly Payment</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(consolidatedPayment)}</p>
              <p className="text-xs text-muted-foreground mt-1">Rate: {consolidationRate}%</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Monthly Savings</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(monthlySavings)}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Total Debt</p>
              <p className="text-lg font-semibold">{formatCurrency(totalBalance)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Interest (New Loan)</p>
              <p className="text-lg font-semibold">{formatCurrency(totalInterestConsolidated)}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
