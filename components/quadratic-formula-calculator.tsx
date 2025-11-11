"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function QuadraticFormulaCalculator() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(-5)
  const [c, setC] = useState(6)

  const discriminant = b * b - 4 * a * c
  const x1 = discriminant >= 0 ? (-b + Math.sqrt(discriminant)) / (2 * a) : null
  const x2 = discriminant >= 0 ? (-b - Math.sqrt(discriminant)) / (2 * a) : null

  return (
    <div className="space-y-6">
      <div className="bg-secondary/30 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground mb-2">Quadratic equation format:</p>
        <p className="text-lg font-mono">
          {a}x² + {b}x + {c} = 0
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Coefficient a:</Label>
          <Input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} step={0.1} />
        </div>

        <div className="space-y-2">
          <Label>Coefficient b:</Label>
          <Input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} step={0.1} />
        </div>

        <div className="space-y-2">
          <Label>Coefficient c:</Label>
          <Input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} step={0.1} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Solutions</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Discriminant:</span>
            <span className="text-xl font-bold">{discriminant.toFixed(2)}</span>
          </div>
          {discriminant >= 0 ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">x₁:</span>
                <span className="text-2xl font-bold text-primary">{x1?.toFixed(4)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">x₂:</span>
                <span className="text-2xl font-bold text-accent">{x2?.toFixed(4)}</span>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-red-600 font-semibold">No real solutions</p>
              <p className="text-sm text-muted-foreground">Complex roots exist</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
