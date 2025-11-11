"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function AutoLeaseCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [vehiclePrice, setVehiclePrice] = useState(30000)
  const [downPayment, setDownPayment] = useState(3000)
  const [tradeInValue, setTradeInValue] = useState(0)
  const [leaseTerm, setLeaseTerm] = useState(36)
  const [interestRate, setInterestRate] = useState(4.5)
  const [residualValue, setResidualValue] = useState(60)

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

  const netCapCost = vehiclePrice - downPayment - tradeInValue
  const residualAmount = vehiclePrice * (residualValue / 100)
  const depreciation = (netCapCost - residualAmount) / leaseTerm
  const financeCharge = ((netCapCost + residualAmount) * (interestRate / 100)) / 12
  const monthlyPayment = depreciation + financeCharge
  const totalLeaseCost = monthlyPayment * leaseTerm + downPayment
  const totalDepreciation = netCapCost - residualAmount

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
            <Label>Vehicle Price: {formatCurrency(vehiclePrice)}</Label>
            <Slider
              value={[vehiclePrice]}
              onValueChange={(value) => setVehiclePrice(value[0])}
              min={10000}
              max={100000}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Down Payment: {formatCurrency(downPayment)}</Label>
            <Slider
              value={[downPayment]}
              onValueChange={(value) => setDownPayment(value[0])}
              min={0}
              max={vehiclePrice * 0.5}
              step={500}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Trade-in Value: {formatCurrency(tradeInValue)}</Label>
            <Slider
              value={[tradeInValue]}
              onValueChange={(value) => setTradeInValue(value[0])}
              min={0}
              max={vehiclePrice * 0.3}
              step={500}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Lease Term: {leaseTerm} months</Label>
            <Slider
              value={[leaseTerm]}
              onValueChange={(value) => setLeaseTerm(value[0])}
              min={12}
              max={60}
              step={12}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Interest Rate: {interestRate}%</Label>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={0}
              max={15}
              step={0.1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Residual Value: {residualValue}%</Label>
            <Slider
              value={[residualValue]}
              onValueChange={(value) => setResidualValue(value[0])}
              min={30}
              max={80}
              step={5}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Lease Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Monthly Payment</span>
              <span className="font-bold text-xl text-primary">{formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Net Cap Cost</span>
              <span className="font-semibold">{formatCurrency(netCapCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Residual Value</span>
              <span className="font-semibold">{formatCurrency(residualAmount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Depreciation</span>
              <span className="font-semibold">{formatCurrency(totalDepreciation)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Lease Cost</span>
              <span className="font-semibold">{formatCurrency(totalLeaseCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Down Payment</span>
              <span className="font-semibold">{formatCurrency(downPayment)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AutoLeaseCalculator
