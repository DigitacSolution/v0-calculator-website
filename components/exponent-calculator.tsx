"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ExponentCalculator() {
  const [base, setBase] = useState("")
  const [exponent, setExponent] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const b = Number.parseFloat(base) || 0
    const e = Number.parseFloat(exponent) || 0
    const res = Math.pow(b, e)
    setResult(res)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Base</label>
        <Input
          type="number"
          value={base}
          onChange={(e) => {
            setBase(e.target.value)
            if (exponent) calculate()
          }}
          placeholder="Enter base number"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Exponent</label>
        <Input
          type="number"
          value={exponent}
          onChange={(e) => {
            setExponent(e.target.value)
            if (base) calculate()
          }}
          placeholder="Enter exponent"
          onInput={calculate}
        />
      </div>

      {result !== null && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Result</p>
          <p className="text-3xl font-bold text-foreground">
            {base}^{exponent} = {result.toFixed(6)}
          </p>
        </Card>
      )}

      {result !== null && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Scientific Notation</p>
            <p className="text-lg font-bold text-foreground">{result.toExponential(4)}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
