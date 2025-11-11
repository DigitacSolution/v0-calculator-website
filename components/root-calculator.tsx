"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RootCalculator() {
  const [value, setValue] = useState("")
  const [root, setRoot] = useState("2")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const v = Number.parseFloat(value) || 0
    const r = Number.parseFloat(root) || 2

    if (v >= 0) {
      const res = Math.pow(v, 1 / r)
      setResult(res.toFixed(6))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Value</label>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter number"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Root Degree</label>
        <Input
          type="number"
          value={root}
          onChange={(e) => setRoot(e.target.value)}
          placeholder="e.g., 2 for square root"
          onInput={calculate}
        />
      </div>

      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Result</p>
          <p className="text-3xl font-bold text-foreground">
            {root}√{value} = {result}
          </p>
        </Card>
      )}
    </div>
  )
}
