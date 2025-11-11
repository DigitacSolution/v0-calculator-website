"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function FactorCalculator() {
  const [number, setNumber] = useState(24)

  const getFactors = (num: number): number[] => {
    const factors: number[] = []
    for (let i = 1; i <= Math.abs(num); i++) {
      if (num % i === 0) {
        factors.push(i)
      }
    }
    return factors
  }

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
  }

  const factors = getFactors(number)
  const factorPairs: [number, number][] = []
  for (let i = 0; i < factors.length; i++) {
    const pair = number / factors[i]
    if (factors[i] <= pair && !factorPairs.some((p) => p[0] === factors[i] && p[1] === pair)) {
      factorPairs.push([factors[i], pair])
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Enter a Number</Label>
          <Input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="text-2xl font-bold text-center"
          />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">All Factors of {number}</p>
            <div className="flex flex-wrap gap-2">
              {factors.map((factor) => (
                <span key={factor} className="px-3 py-1 bg-primary/20 rounded-lg font-semibold">
                  {factor}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Factor Pairs</p>
            <div className="space-y-2">
              {factorPairs.map((pair, index) => (
                <div key={index} className="text-sm">
                  <span className="font-semibold">{pair[0]}</span> × <span className="font-semibold">{pair[1]}</span> ={" "}
                  {number}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Total Factors</p>
              <p className="text-2xl font-bold">{factors.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Number Type</p>
              <p className="text-2xl font-bold">{isPrime(number) ? "Prime" : "Composite"}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
