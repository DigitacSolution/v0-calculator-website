"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function NumberSequenceCalculator() {
  const [sequence, setSequence] = useState("2, 4, 6, 8")

  const parseSequence = (str: string) => {
    return str
      .split(",")
      .map((n) => Number.parseFloat(n.trim()))
      .filter((n) => !isNaN(n))
  }

  const numbers = parseSequence(sequence)

  const findPattern = () => {
    if (numbers.length < 2) return { type: "unknown", next: null, difference: null }

    const differences = []
    for (let i = 1; i < numbers.length; i++) {
      differences.push(numbers[i] - numbers[i - 1])
    }

    const isArithmetic = differences.every((d) => d === differences[0])
    if (isArithmetic) {
      return {
        type: "Arithmetic Sequence",
        difference: differences[0],
        next: numbers[numbers.length - 1] + differences[0],
      }
    }

    const ratios = []
    for (let i = 1; i < numbers.length; i++) {
      ratios.push(numbers[i] / numbers[i - 1])
    }

    const isGeometric = ratios.every((r) => Math.abs(r - ratios[0]) < 0.001)
    if (isGeometric) {
      return {
        type: "Geometric Sequence",
        ratio: ratios[0],
        next: numbers[numbers.length - 1] * ratios[0],
      }
    }

    return { type: "Unknown Pattern", next: null, difference: null }
  }

  const pattern = findPattern()

  return (
    <div className="space-y-8">
      <div>
        <Label>Enter Sequence (comma-separated)</Label>
        <Input
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="e.g., 2, 4, 6, 8, 10"
          className="mt-2"
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-bold text-lg mb-4">Pattern Analysis</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-muted-foreground">Pattern Type</span>
            <span className="font-bold text-primary">{pattern.type}</span>
          </div>
          {pattern.difference !== null && (
            <div className="flex justify-between items-center">
              <span className="text-sm">Common Difference</span>
              <span className="font-semibold">{pattern.difference}</span>
            </div>
          )}
          {pattern.ratio !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm">Common Ratio</span>
              <span className="font-semibold">{pattern.ratio.toFixed(2)}</span>
            </div>
          )}
          {pattern.next !== null && (
            <div className="flex justify-between items-center">
              <span className="text-sm">Next Number</span>
              <span className="font-semibold text-accent">{pattern.next.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-sm">Count</span>
            <span className="font-semibold">{numbers.length} numbers</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default NumberSequenceCalculator
