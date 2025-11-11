"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function HexCalculator() {
  const [decimal, setDecimal] = useState("255")

  const parseDecimal = (str: string) => {
    const num = Number.parseInt(str)
    return isNaN(num) ? 0 : num
  }

  const decimalValue = parseDecimal(decimal)
  const hexValue = decimalValue.toString(16).toUpperCase()
  const binaryValue = decimalValue.toString(2)
  const octalValue = decimalValue.toString(8)

  return (
    <div className="space-y-8">
      <div>
        <Label>Enter Decimal Number</Label>
        <Input
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          placeholder="Enter a number"
          className="mt-2"
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-bold text-lg mb-4">Conversions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-card rounded border border-border">
            <div className="text-xs text-muted-foreground mb-1">Decimal</div>
            <div className="font-mono text-lg font-bold">{decimalValue}</div>
          </div>
          <div className="p-4 bg-card rounded border border-border">
            <div className="text-xs text-muted-foreground mb-1">Hexadecimal</div>
            <div className="font-mono text-lg font-bold text-primary">0x{hexValue}</div>
          </div>
          <div className="p-4 bg-card rounded border border-border">
            <div className="text-xs text-muted-foreground mb-1">Binary</div>
            <div className="font-mono text-lg font-bold text-accent">{binaryValue}</div>
          </div>
          <div className="p-4 bg-card rounded border border-border">
            <div className="text-xs text-muted-foreground mb-1">Octal</div>
            <div className="font-mono text-lg font-bold">{octalValue}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default HexCalculator
