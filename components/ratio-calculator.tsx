"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function RatioCalculator() {
  const [a, setA] = useState(12)
  const [b, setB] = useState(18)
  const [c, setC] = useState(20)
  const [d, setD] = useState(0)

  const gcd = (x: number, y: number): number => {
    return y === 0 ? x : gcd(y, x % y)
  }

  const divisor = gcd(a, b)
  const simplifiedA = a / divisor
  const simplifiedB = b / divisor

  // Solve for d in proportion a:b = c:d
  const proportionD = (b * c) / a

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Simplify Ratio</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>First Value (a):</Label>
            <Input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Second Value (b):</Label>
            <Input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Simplified Ratio</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Original:</span>
            <span className="text-xl font-bold">
              {a} : {b}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Simplified:</span>
            <span className="text-2xl font-bold text-primary">
              {simplifiedA} : {simplifiedB}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Decimal:</span>
            <span className="text-xl font-bold text-accent">{(a / b).toFixed(4)}</span>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="font-semibold">Solve Proportion</h3>
        <p className="text-sm text-muted-foreground">Find d where a:b = c:d</p>
        <div className="space-y-2">
          <Label>Value of c:</Label>
          <Input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Proportion Solution</h3>
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {a} : {b} = {c} : d
            </p>
            <p className="text-3xl font-bold text-primary">d = {proportionD.toFixed(2)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
