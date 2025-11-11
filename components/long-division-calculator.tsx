"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function LongDivisionCalculator() {
  const [dividend, setDividend] = useState(125)
  const [divisor, setDivisor] = useState(5)

  const quotient = Math.floor(dividend / divisor)
  const remainder = dividend % divisor
  const decimalResult = dividend / divisor

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Dividend (Number to be divided)</Label>
          <Input
            type="number"
            value={dividend}
            onChange={(e) => setDividend(Number(e.target.value))}
            className="text-2xl font-bold text-center"
          />
        </div>

        <div className="space-y-3">
          <Label>Divisor (Number to divide by)</Label>
          <Input
            type="number"
            value={divisor}
            onChange={(e) => setDivisor(Number(e.target.value) || 1)}
            className="text-2xl font-bold text-center"
          />
        </div>
      </div>

      {divisor !== 0 ? (
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Division Problem</p>
              <div className="text-4xl font-bold">
                {dividend} ÷ {divisor}
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Quotient (Whole Number Result)</p>
                <p className="text-3xl font-bold text-primary">{quotient}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Remainder</p>
                <p className="text-3xl font-bold text-accent">{remainder}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Decimal Result</p>
                <p className="text-3xl font-bold">{decimalResult.toFixed(6)}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Answer in Mixed Number Form</p>
              <p className="text-2xl font-bold">
                {quotient} {remainder > 0 && <span className="text-accent">r {remainder}</span>}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Check: {quotient} × {divisor} + {remainder} = {quotient * divisor + remainder}
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-6 bg-red-50 border-red-200">
          <p className="text-red-600 font-semibold text-center">Cannot divide by zero!</p>
        </Card>
      )}
    </div>
  )
}
