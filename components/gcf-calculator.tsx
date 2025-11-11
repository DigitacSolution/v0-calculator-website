"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

export default function GCFCalculator() {
  const [numbers, setNumbers] = useState([48, 72, 96])

  const addNumber = () => {
    setNumbers([...numbers, 0])
  }

  const removeNumber = (index: number) => {
    if (numbers.length > 2) {
      setNumbers(numbers.filter((_, i) => i !== index))
    }
  }

  const updateNumber = (index: number, value: number) => {
    const newNumbers = [...numbers]
    newNumbers[index] = value
    setNumbers(newNumbers)
  }

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
  }

  const calculateGCF = () => {
    const validNumbers = numbers.filter((n) => n > 0)
    if (validNumbers.length === 0) return 0
    return validNumbers.reduce((acc, curr) => gcd(acc, curr))
  }

  const result = calculateGCF()
  const validNumbers = numbers.filter((n) => n > 0)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">Enter Numbers</label>
          <Button onClick={addNumber} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Number
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {numbers.map((num, index) => (
            <div key={index} className="flex gap-2">
              <Input
                type="number"
                value={num}
                onChange={(e) => updateNumber(index, Number(e.target.value))}
                placeholder={`Number ${index + 1}`}
                className="flex-1"
              />
              {numbers.length > 2 && (
                <Button onClick={() => removeNumber(index)} size="icon" variant="outline" className="text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
        <div className="text-sm text-muted-foreground mb-2">Greatest Common Factor (GCF)</div>
        <div className="text-4xl font-bold text-foreground">{result.toLocaleString()}</div>
      </Card>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Calculation Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Numbers:</span>
            <span className="font-medium text-foreground">{validNumbers.join(", ")}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">GCF:</span>
            <span className="font-bold text-foreground">{result.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>The GCF is the largest positive integer that divides all the given numbers without remainder.</p>
        </div>
      </div>
    </div>
  )
}
