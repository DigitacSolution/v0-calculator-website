"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CommonFactorCalculator() {
  const [numbers, setNumbers] = useState("12, 18, 24")

  const parseNumbers = (input: string): number[] => {
    return input
      .split(",")
      .map((n) => Number.parseInt(n.trim()))
      .filter((n) => !isNaN(n) && n > 0)
  }

  const findFactors = (num: number): number[] => {
    const factors: number[] = []
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i)
      }
    }
    return factors
  }

  const findCommonFactors = (nums: number[]): number[] => {
    if (nums.length === 0) return []

    const factorSets = nums.map(findFactors)
    const commonFactors = factorSets[0].filter((factor) => factorSets.every((set) => set.includes(factor)))

    return commonFactors.sort((a, b) => b - a)
  }

  const findGCF = (nums: number[]): number => {
    if (nums.length === 0) return 0

    const gcd = (a: number, b: number): number => {
      while (b !== 0) {
        const temp = b
        b = a % b
        a = temp
      }
      return a
    }

    return nums.reduce((acc, num) => gcd(acc, num))
  }

  const numbersList = parseNumbers(numbers)
  const commonFactors = findCommonFactors(numbersList)
  const gcf = findGCF(numbersList)
  const factorsByNumber = numbersList.map((num) => ({
    number: num,
    factors: findFactors(num),
  }))

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="numbers">Enter Numbers (comma-separated)</Label>
        <Input
          id="numbers"
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="12, 18, 24"
          className="mt-2"
        />
      </div>

      {numbersList.length > 0 && (
        <>
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="font-semibold text-lg mb-4 text-center">Greatest Common Factor (GCF)</h3>
            <div className="text-5xl font-bold text-primary text-center">{gcf}</div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Common Factors</h3>
            <div className="flex flex-wrap gap-2">
              {commonFactors.map((factor) => (
                <div
                  key={factor}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    factor === gcf ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {factor}
                </div>
              ))}
            </div>
            {commonFactors.length === 0 && <div className="text-sm text-muted-foreground">No common factors found</div>}
          </Card>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-4">All Factors by Number</h3>
            <div className="space-y-4">
              {factorsByNumber.map(({ number, factors }) => (
                <div key={number}>
                  <div className="font-semibold text-sm mb-2">Factors of {number}:</div>
                  <div className="flex flex-wrap gap-2">
                    {factors.map((factor) => (
                      <div
                        key={factor}
                        className={`px-3 py-1 rounded text-sm ${
                          commonFactors.includes(factor)
                            ? "bg-primary/20 text-primary font-semibold border border-primary/30"
                            : "bg-card text-foreground border border-border"
                        }`}
                      >
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">How to Find Common Factors</h3>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside leading-relaxed">
              <li>Find all factors of each number</li>
              <li>Identify factors that appear in all lists</li>
              <li>The largest common factor is the GCF</li>
            </ol>
          </Card>
        </>
      )}
    </div>
  )
}
