"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function BondCalculator() {
  const [faceValue, setFaceValue] = useState(10000)
  const [couponRate, setCouponRate] = useState(5)
  const [years, setYears] = useState(10)
  const [yieldRate, setYieldRate] = useState(6)
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  const annualCoupon = (faceValue * couponRate) / 100
  const totalCoupons = annualCoupon * years
  const presentValue =
    (annualCoupon * (1 - Math.pow(1 + yieldRate / 100, -years))) / (yieldRate / 100) +
    faceValue / Math.pow(1 + yieldRate / 100, years)

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="space-y-6">
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
        <div className="space-y-2">
          <Label>Face Value: {formatCurrency(faceValue)}</Label>
          <Slider value={[faceValue]} onValueChange={([v]) => setFaceValue(v)} min={1000} max={100000} step={1000} />
          <Input type="number" value={faceValue} onChange={(e) => setFaceValue(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Coupon Rate: {couponRate}%</Label>
          <Slider value={[couponRate]} onValueChange={([v]) => setCouponRate(v)} min={0} max={15} step={0.25} />
          <Input type="number" value={couponRate} onChange={(e) => setCouponRate(Number(e.target.value))} step={0.1} />
        </div>

        <div className="space-y-2">
          <Label>Years to Maturity: {years}</Label>
          <Slider value={[years]} onValueChange={([v]) => setYears(v)} min={1} max={30} step={1} />
          <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Required Yield: {yieldRate}%</Label>
          <Slider value={[yieldRate]} onValueChange={([v]) => setYieldRate(v)} min={0} max={15} step={0.25} />
          <Input type="number" value={yieldRate} onChange={(e) => setYieldRate(Number(e.target.value))} step={0.1} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Bond Valuation</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Annual Coupon Payment:</span>
            <span className="text-xl font-bold">{formatCurrency(annualCoupon)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Coupon Payments:</span>
            <span className="text-xl font-bold">{formatCurrency(totalCoupons)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Present Value:</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(presentValue)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Face Value at Maturity:</span>
            <span className="text-xl font-bold text-accent">{formatCurrency(faceValue)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
