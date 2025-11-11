"use client"

import { useState } from "react"

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(5)
  const [time, setTime] = useState(5)
  const [compoundFrequency, setCompoundFrequency] = useState(12)

  const amount = principal * Math.pow(1 + rate / 100 / compoundFrequency, compoundFrequency * time)
  const interest = amount - principal

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Principal Amount: ${principal.toLocaleString()}
        </label>
        <input
          type="range"
          min="1000"
          max="1000000"
          step="1000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Interest Rate (%): {rate.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="30"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Time Period (Years): {time}</label>
        <input
          type="range"
          min="0.5"
          max="50"
          step="0.5"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Compounding Frequency</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Annually", value: 1 },
            { label: "Semi-Annually", value: 2 },
            { label: "Quarterly", value: 4 },
            { label: "Monthly", value: 12 },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setCompoundFrequency(option.value)}
              className={`py-2 px-3 rounded-lg font-medium transition-all ${
                compoundFrequency === option.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 text-foreground hover:bg-slate-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Interest Earned</p>
            <p className="text-2xl font-bold text-accent">
              ${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
            <p className="text-2xl font-bold text-primary">
              ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
