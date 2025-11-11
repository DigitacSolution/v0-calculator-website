"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function CDCalculator() {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(4.5)
  const [years, setYears] = useState(5)
  const [compoundFrequency, setCompoundFrequency] = useState(12)

  const amount = principal * Math.pow(1 + rate / 100 / compoundFrequency, compoundFrequency * years)
  const interestEarned = amount - principal

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal: ${principal.toLocaleString()}</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Term: {years} years</label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Compound Frequency</label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          >
            <option value={1}>Annually</option>
            <option value={2}>Semi-Annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
            <option value={365}>Daily</option>
          </select>
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Final Amount</p>
            <p className="text-3xl font-bold text-foreground">${amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Interest Earned</p>
            <p className="text-3xl font-bold text-green-600">${interestEarned.toFixed(2)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
