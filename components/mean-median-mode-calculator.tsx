"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function MeanMedianModeCalculator() {
  const [numbers, setNumbers] = useState("1, 2, 3, 4, 5, 5, 6, 7")

  const parseNumbers = (str: string) => {
    return str
      .split(",")
      .map((n) => Number.parseFloat(n.trim()))
      .filter((n) => !isNaN(n))
  }

  const data = parseNumbers(numbers)
  const sortedData = [...data].sort((a, b) => a - b)

  const mean = data.length > 0 ? data.reduce((sum, n) => sum + n, 0) / data.length : 0

  const median =
    sortedData.length === 0
      ? 0
      : sortedData.length % 2 === 0
        ? (sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2
        : sortedData[Math.floor(sortedData.length / 2)]

  const frequencyMap: { [key: number]: number } = {}
  data.forEach((n) => {
    frequencyMap[n] = (frequencyMap[n] || 0) + 1
  })
  const maxFrequency = Math.max(...Object.values(frequencyMap))
  const modes = Object.keys(frequencyMap)
    .filter((key) => frequencyMap[Number(key)] === maxFrequency)
    .map(Number)
  const mode = maxFrequency > 1 ? modes.join(", ") : "No mode"

  const range = sortedData.length > 0 ? sortedData[sortedData.length - 1] - sortedData[0] : 0

  return (
    <div className="space-y-8">
      <div>
        <Label>Enter Numbers (comma-separated)</Label>
        <Input
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="e.g., 1, 2, 3, 4, 5"
          className="mt-2"
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-bold text-lg mb-4">Statistical Measures</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-muted-foreground">Mean (Average)</span>
            <span className="font-bold text-xl text-primary">{mean.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Median</span>
            <span className="font-semibold">{median.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Mode</span>
            <span className="font-semibold text-accent">{mode}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Range</span>
            <span className="font-semibold">{range.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Count</span>
            <span className="font-semibold">{data.length} numbers</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Sum</span>
            <span className="font-semibold">{data.reduce((sum, n) => sum + n, 0).toFixed(2)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MeanMedianModeCalculator
