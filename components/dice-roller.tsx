"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DiceRoller() {
  const [numDice, setNumDice] = useState(1)
  const [diceType, setDiceType] = useState(6)
  const [results, setResults] = useState<number[]>([])
  const [total, setTotal] = useState(0)

  const rollDice = () => {
    const rolls: number[] = []
    for (let i = 0; i < numDice; i++) {
      rolls.push(Math.floor(Math.random() * diceType) + 1)
    }
    setResults(rolls)
    setTotal(rolls.reduce((a, b) => a + b, 0))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Number of Dice</label>
          <Input
            type="number"
            value={numDice}
            onChange={(e) => setNumDice(Math.max(1, Number.parseInt(e.target.value) || 1))}
            min="1"
            max="10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Dice Type</label>
          <select
            value={diceType}
            onChange={(e) => setDiceType(Number.parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={4}>D4</option>
            <option value={6}>D6</option>
            <option value={8}>D8</option>
            <option value={10}>D10</option>
            <option value={12}>D12</option>
            <option value={20}>D20</option>
            <option value={100}>D100</option>
          </select>
        </div>
      </div>

      <Button onClick={rollDice} className="w-full">
        Roll Dice
      </Button>

      {results.length > 0 && (
        <div className="space-y-4">
          <Card className="p-4 bg-indigo-50 border-indigo-200">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Results</div>
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 flex items-center justify-center bg-indigo-500 text-white rounded font-bold"
                  >
                    {r}
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-indigo-200">
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-3xl font-bold text-indigo-600">{total}</div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
