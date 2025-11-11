"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WeightCalculator() {
  const [weight, setWeight] = useState(150)
  const [fromUnit, setFromUnit] = useState("lbs")
  const [toUnit, setToUnit] = useState("kg")

  const conversions: { [key: string]: number } = {
    kg: 1,
    lbs: 2.20462,
    oz: 35.274,
    g: 1000,
    stone: 0.157473,
    ton: 0.001,
  }

  const weightInKg = weight / conversions[fromUnit]
  const convertedWeight = weightInKg * conversions[toUnit]

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Weight:</Label>
          <div className="flex gap-2">
            <Input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} step={0.1} />
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">Kilograms</SelectItem>
                <SelectItem value="lbs">Pounds</SelectItem>
                <SelectItem value="oz">Ounces</SelectItem>
                <SelectItem value="g">Grams</SelectItem>
                <SelectItem value="stone">Stone</SelectItem>
                <SelectItem value="ton">Metric Tons</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Convert To:</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kg">Kilograms</SelectItem>
              <SelectItem value="lbs">Pounds</SelectItem>
              <SelectItem value="oz">Ounces</SelectItem>
              <SelectItem value="g">Grams</SelectItem>
              <SelectItem value="stone">Stone</SelectItem>
              <SelectItem value="ton">Metric Tons</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Converted Weight</h3>
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-5xl font-bold text-primary">{convertedWeight.toFixed(2)}</p>
            <p className="text-xl text-muted-foreground mt-2">{toUnit}</p>
          </div>
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
            <p className="text-sm text-center">
              {weight} {fromUnit} = {convertedWeight.toFixed(2)} {toUnit}
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-secondary/30">
        <h4 className="font-semibold mb-2">Quick Reference</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>1 kg = 2.205 lbs</div>
          <div>1 lb = 16 oz</div>
          <div>1 stone = 14 lbs</div>
          <div>1 ton = 1000 kg</div>
        </div>
      </Card>
    </div>
  )
}
