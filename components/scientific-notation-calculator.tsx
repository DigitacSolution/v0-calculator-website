"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ScientificNotationCalculator() {
  const [number, setNumber] = useState("123456789")
  const [coefficient, setCoefficient] = useState("1.23")
  const [exponent, setExponent] = useState("8")

  // Convert standard to scientific notation
  const toScientific = (num: string) => {
    const value = Number.parseFloat(num)
    if (isNaN(value) || value === 0) return { coefficient: "0", exponent: "0" }

    const exp = Math.floor(Math.log10(Math.abs(value)))
    const coef = value / Math.pow(10, exp)

    return {
      coefficient: coef.toFixed(2),
      exponent: exp.toString(),
    }
  }

  // Convert scientific to standard notation
  const toStandard = (coef: string, exp: string) => {
    const coefficient = Number.parseFloat(coef)
    const exponent = Number.parseInt(exp)

    if (isNaN(coefficient) || isNaN(exponent)) return "0"

    const result = coefficient * Math.pow(10, exponent)
    return result.toLocaleString("en-US", { maximumFractionDigits: 10 })
  }

  const scientific = toScientific(number)
  const standard = toStandard(coefficient, exponent)

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Standard to Scientific Notation</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="standard-number">Standard Number</Label>
            <Input
              id="standard-number"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number"
              className="mt-2"
            />
          </div>
          <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-sm text-muted-foreground mb-2">Scientific Notation:</div>
            <div className="text-2xl font-mono font-bold text-primary">
              {scientific.coefficient} × 10<sup>{scientific.exponent}</sup>
            </div>
          </Card>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Scientific to Standard Notation</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="coefficient">Coefficient</Label>
              <Input
                id="coefficient"
                type="text"
                value={coefficient}
                onChange={(e) => setCoefficient(e.target.value)}
                placeholder="1.23"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="exponent">Exponent</Label>
              <Input
                id="exponent"
                type="text"
                value={exponent}
                onChange={(e) => setExponent(e.target.value)}
                placeholder="8"
                className="mt-2"
              />
            </div>
          </div>
          <Card className="p-4 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="text-sm text-muted-foreground mb-2">Standard Notation:</div>
            <div className="text-2xl font-mono font-bold text-accent">{standard}</div>
          </Card>
        </div>
      </Card>

      <Card className="p-6 bg-secondary/50">
        <h3 className="font-semibold mb-3">Common Examples</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-card rounded">
            <div className="font-mono">300,000,000</div>
            <div className="text-xs text-muted-foreground">= 3.00 × 10⁸</div>
          </div>
          <div className="p-3 bg-card rounded">
            <div className="font-mono">0.000045</div>
            <div className="text-xs text-muted-foreground">= 4.50 × 10⁻⁵</div>
          </div>
          <div className="p-3 bg-card rounded">
            <div className="font-mono">6,020,000</div>
            <div className="text-xs text-muted-foreground">= 6.02 × 10⁶</div>
          </div>
          <div className="p-3 bg-card rounded">
            <div className="font-mono">0.00123</div>
            <div className="text-xs text-muted-foreground">= 1.23 × 10⁻³</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
