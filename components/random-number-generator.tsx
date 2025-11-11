"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function RandomNumberGenerator() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(1)
  const [numbers, setNumbers] = useState<number[]>([])

  const generateNumbers = () => {
    const generated = []
    for (let i = 0; i < count; i++) {
      generated.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    setNumbers(generated)
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Minimum Value</Label>
            <Input
              type="number"
              value={min}
              onChange={(e) => setMin(Number.parseInt(e.target.value) || 0)}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Maximum Value</Label>
            <Input
              type="number"
              value={max}
              onChange={(e) => setMax(Number.parseInt(e.target.value) || 0)}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Count (How many numbers?)</Label>
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.min(100, Math.max(1, Number.parseInt(e.target.value) || 1)))}
              className="mt-2"
            />
          </div>

          <Button onClick={generateNumbers} className="w-full">
            Generate Random Numbers
          </Button>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Generated Numbers</h3>
          {numbers.length > 0 ? (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {numbers.map((num, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-card rounded border border-border font-mono font-bold text-primary"
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Average</span>
                  <span className="font-semibold">
                    {(numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sum</span>
                  <span className="font-semibold">{numbers.reduce((a, b) => a + b, 0)}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">Click "Generate" to create random numbers</p>
          )}
        </Card>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
