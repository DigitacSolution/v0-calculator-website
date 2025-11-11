"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function RoundingCalculator() {
  const [number, setNumber] = useState(123.456789)
  const [decimalPlaces, setDecimalPlaces] = useState(2)

  const roundToNearest = number >= 0 ? Math.round(number) : Math.round(number)
  const roundUp = Math.ceil(number)
  const roundDown = Math.floor(number)
  const roundToDecimal = Number(number.toFixed(decimalPlaces))
  const roundToTens = Math.round(number / 10) * 10
  const roundToHundreds = Math.round(number / 100) * 100

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Enter a Number</Label>
          <Input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="text-2xl font-bold text-center"
            step="0.000001"
          />
        </div>

        <div className="space-y-3">
          <Label>Decimal Places for Precision Rounding</Label>
          <Input
            type="number"
            value={decimalPlaces}
            onChange={(e) => setDecimalPlaces(Number(e.target.value))}
            className="text-center"
            min="0"
            max="10"
          />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Original Number</p>
            <p className="text-3xl font-bold text-primary">{number}</p>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Round to Nearest Integer</span>
              <span className="text-xl font-semibold">{roundToNearest}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Round Up (Ceiling)</span>
              <span className="text-xl font-semibold">{roundUp}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Round Down (Floor)</span>
              <span className="text-xl font-semibold">{roundDown}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Round to {decimalPlaces} Decimal Places</span>
              <span className="text-xl font-semibold">{roundToDecimal}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Round to Nearest 10</span>
              <span className="text-xl font-semibold">{roundToTens}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Round to Nearest 100</span>
              <span className="text-xl font-semibold">{roundToHundreds}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
