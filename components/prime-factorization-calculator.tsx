"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function PrimeFactorizationCalculator() {
  const [number, setNumber] = useState(60)

  const findPrimeFactors = (n: number): number[] => {
    const factors: number[] = []
    let num = Math.abs(Math.floor(n))

    while (num % 2 === 0) {
      factors.push(2)
      num = num / 2
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      while (num % i === 0) {
        factors.push(i)
        num = num / i
      }
    }

    if (num > 2) {
      factors.push(num)
    }

    return factors
  }

  const primeFactors = findPrimeFactors(number)
  const factorCounts = primeFactors.reduce(
    (acc, factor) => {
      acc[factor] = (acc[factor] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  const factorization = Object.entries(factorCounts)
    .map(([factor, count]) => (count === 1 ? factor : `${factor}^${count}`))
    .join(" × ")

  const isPrime = primeFactors.length === 1 && primeFactors[0] === number

  return (
    <div className="space-y-8">
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Enter Number</label>
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter a number"
          className="w-full"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
        <div className="text-sm text-muted-foreground mb-2">Prime Factorization</div>
        <div className="text-3xl font-bold text-foreground mb-4">{factorization || "N/A"}</div>
        {isPrime && (
          <div className="inline-block px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Prime Number
          </div>
        )}
      </Card>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Prime Factors</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {primeFactors.map((factor, index) => (
            <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium">
              {factor}
            </span>
          ))}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Number:</span>
            <span className="font-medium text-foreground">{number}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Prime Factors:</span>
            <span className="font-medium text-foreground">{primeFactors.join(", ")}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Factorization:</span>
            <span className="font-bold text-foreground">{factorization}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
