"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

export default function LCMCalculator() {
  const [numbers, setNumbers] = useState([12, 18, 24])

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

  const lcm = (a: number, b: number): number => {
    return Math.abs(a * b) / gcd(a, b)
  }

  const calculateLCM = () => {
    const validNumbers = numbers.filter((n) => n > 0)
    if (validNumbers.length === 0) return 0
    return validNumbers.reduce((acc, curr) => lcm(acc, curr))
  }

  const result = calculateLCM()
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

      <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
        <div className="text-sm text-muted-foreground mb-2">Least Common Multiple (LCM)</div>
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
            <span className="text-muted-foreground">LCM:</span>
            <span className="font-bold text-foreground">{result.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>The LCM is the smallest positive integer that is divisible by all the given numbers.</p>
        </div>
      </div>
    </div>
  )
}
