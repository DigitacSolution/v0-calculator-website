"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function PythagoreanCalculator() {
  const [sideA, setSideA] = useState("")
  const [sideB, setSideB] = useState("")
  const [hypotenuse, setHypotenuse] = useState("")
  const [result, setResult] = useState(null)

  const calculateHypotenuse = () => {
    const a = Number.parseFloat(sideA) || 0
    const b = Number.parseFloat(sideB) || 0
    if (a > 0 && b > 0) {
      const c = Math.sqrt(a * a + b * b)
      setResult({ c: c.toFixed(2), type: "hypotenuse" })
    }
  }

  const calculateSide = () => {
    const c = Number.parseFloat(hypotenuse) || 0
    const b = Number.parseFloat(sideB) || 0
    if (c > 0 && b > 0 && c > b) {
      const a = Math.sqrt(c * c - b * b)
      setResult({ a: a.toFixed(2), type: "side" })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Find Hypotenuse (c)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="number"
            value={sideA}
            onChange={(e) => setSideA(e.target.value)}
            placeholder="Side A"
            onInput={calculateHypotenuse}
          />
          <Input
            type="number"
            value={sideB}
            onChange={(e) => setSideB(e.target.value)}
            placeholder="Side B"
            onInput={calculateHypotenuse}
          />
        </div>
      </div>

      <hr className="border-border" />

      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Find Side (a)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="number"
            value={hypotenuse}
            onChange={(e) => setHypotenuse(e.target.value)}
            placeholder="Hypotenuse (c)"
            onInput={calculateSide}
          />
          <Input
            type="number"
            value={sideB}
            onChange={(e) => setSideB(e.target.value)}
            placeholder="Side B"
            onInput={calculateSide}
          />
        </div>
      </div>

      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Result</p>
          <p className="text-3xl font-bold text-foreground">{result.type === "hypotenuse" ? result.c : result.a}</p>
        </Card>
      )}
    </div>
  )
}
