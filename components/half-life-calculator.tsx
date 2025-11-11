"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function HalfLifeCalculator() {
  const [initialAmount, setInitialAmount] = useState(100)
  const [halfLife, setHalfLife] = useState(5)
  const [timeElapsed, setTimeElapsed] = useState(10)

  const numberOfHalfLives = timeElapsed / halfLife
  const remainingAmount = initialAmount * Math.pow(0.5, numberOfHalfLives)
  const decayedAmount = initialAmount - remainingAmount
  const percentRemaining = (remainingAmount / initialAmount) * 100
  const percentDecayed = (decayedAmount / initialAmount) * 100

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Initial Amount: {initialAmount}</Label>
            <Slider
              value={[initialAmount]}
              onValueChange={(value) => setInitialAmount(value[0])}
              min={1}
              max={1000}
              step={10}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Half-Life: {halfLife} years</Label>
            <Slider
              value={[halfLife]}
              onValueChange={(value) => setHalfLife(value[0])}
              min={0.1}
              max={100}
              step={0.1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Time Elapsed: {timeElapsed} years</Label>
            <Slider
              value={[timeElapsed]}
              onValueChange={(value) => setTimeElapsed(value[0])}
              min={0}
              max={100}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Decay Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Remaining Amount</span>
              <span className="font-bold text-xl text-primary">{remainingAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Decayed Amount</span>
              <span className="font-semibold">{decayedAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Percent Remaining</span>
              <span className="font-semibold text-accent">{percentRemaining.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Percent Decayed</span>
              <span className="font-semibold">{percentDecayed.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Number of Half-Lives</span>
              <span className="font-semibold">{numberOfHalfLives.toFixed(2)}</span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border border-border">
              <div className="text-xs text-muted-foreground mb-2">Formula</div>
              <div className="text-xs">N(t) = N₀ × (1/2)^(t/t½)</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HalfLifeCalculator
