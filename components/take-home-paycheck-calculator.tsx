"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function TakeHomePaycheckCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [grossPay, setGrossPay] = useState(5000)
  const [federalTax, setFederalTax] = useState(22)
  const [stateTax, setStateTax] = useState(5)
  const [socialSecurity, setSocialSecurity] = useState(6.2)
  const [medicare, setMedicare] = useState(1.45)
  const [retirement401k, setRetirement401k] = useState(5)

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

  const federalTaxAmount = (grossPay * federalTax) / 100
  const stateTaxAmount = (grossPay * stateTax) / 100
  const socialSecurityAmount = (grossPay * socialSecurity) / 100
  const medicareAmount = (grossPay * medicare) / 100
  const retirement401kAmount = (grossPay * retirement401k) / 100
  const totalDeductions =
    federalTaxAmount + stateTaxAmount + socialSecurityAmount + medicareAmount + retirement401kAmount
  const netPay = grossPay - totalDeductions

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

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Gross Pay (Monthly)</Label>
            <Input
              type="number"
              value={grossPay}
              onChange={(e) => setGrossPay(Number(e.target.value))}
              className="w-32 text-right"
            />
          </div>
          <Slider value={[grossPay]} onValueChange={(v) => setGrossPay(v[0])} min={1000} max={50000} step={100} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Federal Tax (%)</Label>
            <Input
              type="number"
              value={federalTax}
              onChange={(e) => setFederalTax(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[federalTax]} onValueChange={(v) => setFederalTax(v[0])} min={0} max={40} step={0.1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>State Tax (%)</Label>
            <Input
              type="number"
              value={stateTax}
              onChange={(e) => setStateTax(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[stateTax]} onValueChange={(v) => setStateTax(v[0])} min={0} max={15} step={0.1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>401k Contribution (%)</Label>
            <Input
              type="number"
              value={retirement401k}
              onChange={(e) => setRetirement401k(Number(e.target.value))}
              className="w-24 text-right"
              step="0.1"
            />
          </div>
          <Slider value={[retirement401k]} onValueChange={(v) => setRetirement401k(v[0])} min={0} max={20} step={0.1} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Take-Home Pay</p>
            <p className="text-4xl font-bold text-primary">{formatCurrency(netPay)}</p>
          </div>
          <div className="space-y-3 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Gross Pay</span>
              <span className="font-semibold">{formatCurrency(grossPay)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Federal Tax</span>
              <span className="text-red-600">-{formatCurrency(federalTaxAmount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">State Tax</span>
              <span className="text-red-600">-{formatCurrency(stateTaxAmount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Social Security</span>
              <span className="text-red-600">-{formatCurrency(socialSecurityAmount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Medicare</span>
              <span className="text-red-600">-{formatCurrency(medicareAmount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">401k</span>
              <span className="text-red-600">-{formatCurrency(retirement401kAmount)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-2 border-t">
              <span className="text-muted-foreground">Total Deductions</span>
              <span className="text-red-600">-{formatCurrency(totalDeductions)}</span>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">Annual Take-Home</p>
            <p className="text-2xl font-bold">{formatCurrency(netPay * 12)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
