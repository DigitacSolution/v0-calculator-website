"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function PermutationCalculator() {
  const [n, setN] = useState("")
  const [r, setR] = useState("")
  const [result, setResult] = useState(null)

  const factorial = (num) => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
  }

  const calculate = () => {
    const nVal = Number.parseInt(n) || 0
    const rVal = Number.parseInt(r) || 0

    if (nVal > 0 && rVal > 0 && rVal <= nVal) {
      const permutation = factorial(nVal) / factorial(nVal - rVal)
      const combination = factorial(nVal) / (factorial(rVal) * factorial(nVal - rVal))

      setResult({
        permutation: permutation.toFixed(0),
        combination: combination.toFixed(0),
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Total Items (n)</label>
        <Input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="Enter total items"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Items to Choose (r)</label>
        <Input
          type="number"
          value={r}
          onChange={(e) => setR(e.target.value)}
          placeholder="Enter items to choose"
          onInput={calculate}
        />
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Permutation (nPr)</p>
            <p className="text-xl font-bold text-foreground">{result.permutation}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Combination (nCr)</p>
            <p className="text-xl font-bold text-foreground">{result.combination}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
