"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function CollegeCostCalculator() {
  const [tuition, setTuition] = useState(30000)
  const [roomBoard, setRoomBoard] = useState(12000)
  const [books, setBooks] = useState(1500)
  const [years, setYears] = useState(4)
  const [inflation, setInflation] = useState(3)
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  const annualCost = tuition + roomBoard + books
  let totalCost = 0
  for (let i = 0; i < years; i++) {
    totalCost += annualCost * Math.pow(1 + inflation / 100, i)
  }

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
      maximumFractionDigits: 0,
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
          <Label>Annual Tuition: {formatCurrency(tuition)}</Label>
          <Slider value={[tuition]} onValueChange={([v]) => setTuition(v)} min={5000} max={100000} step={1000} />
          <Input type="number" value={tuition} onChange={(e) => setTuition(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Room & Board: {formatCurrency(roomBoard)}</Label>
          <Slider value={[roomBoard]} onValueChange={([v]) => setRoomBoard(v)} min={5000} max={30000} step={500} />
          <Input type="number" value={roomBoard} onChange={(e) => setRoomBoard(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Books & Supplies: {formatCurrency(books)}</Label>
          <Slider value={[books]} onValueChange={([v]) => setBooks(v)} min={500} max={5000} step={100} />
          <Input type="number" value={books} onChange={(e) => setBooks(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Number of Years: {years}</Label>
          <Slider value={[years]} onValueChange={([v]) => setYears(v)} min={1} max={6} step={1} />
          <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </div>

        <div className="space-y-2">
          <Label>Annual Inflation Rate: {inflation}%</Label>
          <Slider value={[inflation]} onValueChange={([v]) => setInflation(v)} min={0} max={10} step={0.5} />
          <Input type="number" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} step={0.1} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Total College Cost</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">First Year Cost:</span>
            <span className="text-xl font-bold">{formatCurrency(annualCost)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total {years}-Year Cost:</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(totalCost)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Average Annual Cost:</span>
            <span className="text-xl font-bold text-accent">{formatCurrency(totalCost / years)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
