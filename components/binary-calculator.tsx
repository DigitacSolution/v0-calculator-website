"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function BinaryCalculator() {
  const [decimal, setDecimal] = useState("")
  const [binary, setBinary] = useState("")
  const [result, setResult] = useState(null)

  const decimalToBinary = (dec) => {
    const b = (Number.parseInt(dec) || 0).toString(2)
    setBinary(b)
    setResult({ binary: b, decimal: dec, hex: (Number.parseInt(dec) || 0).toString(16).toUpperCase() })
  }

  const binaryToDecimal = (bin) => {
    const d = Number.parseInt(bin, 2) || 0
    setDecimal(d.toString())
    setResult({ binary: bin, decimal: d.toString(), hex: d.toString(16).toUpperCase() })
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Decimal</label>
          <Input
            type="number"
            value={decimal}
            onChange={(e) => {
              setDecimal(e.target.value)
              if (e.target.value) decimalToBinary(e.target.value)
            }}
            placeholder="Enter decimal number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Binary</label>
          <Input
            value={binary}
            onChange={(e) => {
              setBinary(e.target.value)
              if (e.target.value) binaryToDecimal(e.target.value)
            }}
            placeholder="Enter binary number"
          />
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Decimal</p>
            <p className="text-xl font-bold text-foreground">{result.decimal}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Binary</p>
            <p className="text-xl font-bold text-foreground">{result.binary}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Hexadecimal</p>
            <p className="text-xl font-bold text-foreground">{result.hex}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
