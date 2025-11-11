"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function FractionCalculator() {
  const [num1, setNum1] = useState("")
  const [den1, setDen1] = useState("")
  const [num2, setNum2] = useState("")
  const [den2, setDen2] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState(null)

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  const simplifyFraction = (num, den) => {
    const divisor = gcd(Math.abs(num), Math.abs(den))
    return { num: num / divisor, den: den / divisor }
  }

  const calculate = () => {
    const n1 = Number.parseFloat(num1) || 0
    const d1 = Number.parseFloat(den1) || 1
    const n2 = Number.parseFloat(num2) || 0
    const d2 = Number.parseFloat(den2) || 1

    let resultNum, resultDen

    switch (operation) {
      case "+":
        resultNum = n1 * d2 + n2 * d1
        resultDen = d1 * d2
        break
      case "-":
        resultNum = n1 * d2 - n2 * d1
        resultDen = d1 * d2
        break
      case "*":
        resultNum = n1 * n2
        resultDen = d1 * d2
        break
      case "/":
        resultNum = n1 * d2
        resultDen = d1 * n2
        break
      default:
        return
    }

    const simplified = simplifyFraction(resultNum, resultDen)
    setResult(simplified)
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-4">Fraction 1</label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Numerator"
              className="text-center"
            />
            <span className="text-xl">/</span>
            <Input
              type="number"
              value={den1}
              onChange={(e) => setDen1(e.target.value)}
              placeholder="Denominator"
              className="text-center"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-4">Fraction 2</label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Numerator"
              className="text-center"
            />
            <span className="text-xl">/</span>
            <Input
              type="number"
              value={den2}
              onChange={(e) => setDen2(e.target.value)}
              placeholder="Denominator"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              operation === op ? "bg-primary text-primary-foreground" : "bg-slate-200"
            }`}
          >
            {op}
          </button>
        ))}
      </div>

      <button onClick={calculate} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold">
        Calculate
      </button>

      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Result</p>
          <p className="text-3xl font-bold text-foreground">
            {result.num} / {result.den}
          </p>
          <p className="text-muted-foreground mt-2">Decimal: {(result.num / result.den).toFixed(4)}</p>
        </Card>
      )}
    </div>
  )
}
