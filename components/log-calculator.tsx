"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function LogCalculator() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const v = Number.parseFloat(value) || 0
    if (v > 0) {
      const log10 = Math.log10(v)
      const log2 = Math.log2(v)
      const ln = Math.log(v)

      setResult({
        log10: log10.toFixed(6),
        log2: log2.toFixed(6),
        ln: ln.toFixed(6),
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Enter Value</label>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter positive number"
          onInput={calculate}
        />
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Log Base 10</p>
            <p className="text-xl font-bold text-foreground">{result.log10}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Log Base 2</p>
            <p className="text-xl font-bold text-foreground">{result.log2}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Natural Log (ln)</p>
            <p className="text-xl font-bold text-foreground">{result.ln}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
