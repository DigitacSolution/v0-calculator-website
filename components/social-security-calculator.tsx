"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function SocialSecurityCalculator() {
  const [currentAge, setCurrentAge] = useState(35)
  const [retirementAge, setRetirementAge] = useState(67)
  const [estimatedBenefit, setEstimatedBenefit] = useState(2000)

  const yearsUntilRetirement = Math.max(0, retirementAge - currentAge)
  const lifeExpectancy = 85
  const yearsInRetirement = Math.max(0, lifeExpectancy - retirementAge)
  const totalBenefits = estimatedBenefit * 12 * yearsInRetirement
  const delayedCredits = 0.08 * yearsUntilRetirement

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Age: {currentAge}</label>
          <input
            type="range"
            min="18"
            max="70"
            step="1"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Planned Retirement Age: {retirementAge}</label>
          <input
            type="range"
            min="62"
            max="70"
            step="1"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Estimated Monthly Benefit: ${estimatedBenefit}</label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={estimatedBenefit}
            onChange={(e) => setEstimatedBenefit(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Benefit at {retirementAge}</p>
            <p className="text-3xl font-bold text-foreground">${estimatedBenefit.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Lifetime Benefits</p>
            <p className="text-3xl font-bold text-foreground">${totalBenefits.toFixed(0)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Delayed Retirement Credits</p>
        <p className="text-2xl font-bold">{(delayedCredits * 100).toFixed(1)}% increase per year</p>
      </Card>
    </div>
  )
}
