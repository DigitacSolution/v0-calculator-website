"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(100)
  const [tipPercent, setTipPercent] = useState(15)
  const [people, setPeople] = useState(1)

  const tipAmount = (billAmount * tipPercent) / 100
  const totalAmount = billAmount + tipAmount
  const perPerson = totalAmount / people

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Bill Amount: ${billAmount.toFixed(2)}</label>
        <Slider
          value={[billAmount]}
          onValueChange={(value) => setBillAmount(value[0])}
          min={0}
          max={1000}
          step={10}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tip Percentage: {tipPercent}%</label>
        <Slider
          value={[tipPercent]}
          onValueChange={(value) => setTipPercent(value[0])}
          min={0}
          max={50}
          step={1}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Number of People</label>
        <Input
          type="number"
          value={people}
          onChange={(e) => setPeople(Math.max(1, Number.parseInt(e.target.value) || 1))}
          min="1"
        />
      </div>

      <Card className="p-4 bg-green-50 border-green-200 space-y-2">
        <div className="flex justify-between">
          <span>Tip Amount:</span>
          <span className="font-bold">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Amount:</span>
          <span className="font-bold text-lg">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="pt-2 border-t border-green-200 flex justify-between">
          <span>Per Person:</span>
          <span className="font-bold text-lg text-green-600">${perPerson.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
