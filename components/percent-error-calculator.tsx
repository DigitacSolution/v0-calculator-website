"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function PercentErrorCalculator() {
  const [experimentalValue, setExperimentalValue] = useState(98)
  const [theoreticalValue, setTheoreticalValue] = useState(100)

  const error = experimentalValue - theoreticalValue
  const absoluteError = Math.abs(error)
  const percentError = (absoluteError / Math.abs(theoreticalValue)) * 100
  const relativeError = absoluteError / Math.abs(theoreticalValue)

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Experimental Value</Label>
            <Input
              type="number"
              value={experimentalValue}
              onChange={(e) => setExperimentalValue(Number.parseFloat(e.target.value) || 0)}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Theoretical (Accepted) Value</Label>
            <Input
              type="number"
              value={theoreticalValue}
              onChange={(e) => setTheoreticalValue(Number.parseFloat(e.target.value) || 0)}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Error Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Percent Error</span>
              <span className="font-bold text-xl text-primary">{percentError.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Absolute Error</span>
              <span className="font-semibold">{absoluteError.toFixed(4)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Relative Error</span>
              <span className="font-semibold">{relativeError.toFixed(4)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Error</span>
              <span className="font-semibold">
                {error > 0 ? "+" : ""}
                {error.toFixed(4)}
              </span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border border-border">
              <div className="text-xs text-muted-foreground mb-2">Formula</div>
              <div className="text-xs">% Error = |Experimental - Theoretical| / |Theoretical| × 100</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PercentErrorCalculator
