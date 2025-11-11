"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function PercentageCalculator() {
  const [type, setType] = useState("percent-of")
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const v1 = Number.parseFloat(value1) || 0
    const v2 = Number.parseFloat(value2) || 0

    switch (type) {
      case "percent-of":
        setResult((v1 / 100) * v2)
        break
      case "percent-change":
        setResult(((v2 - v1) / v1) * 100)
        break
      case "percentage-increase":
        setResult(v1 + (v1 * v2) / 100)
        break
      case "percentage-decrease":
        setResult(v1 - (v1 * v2) / 100)
        break
      case "percent-off":
        setResult(v1 - (v1 * v2) / 100)
        break
      default:
        break
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "percent-of", label: "% of" },
          { id: "percent-change", label: "% Change" },
          { id: "percentage-increase", label: "% Increase" },
          { id: "percentage-decrease", label: "% Decrease" },
          { id: "percent-off", label: "% Off" },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              setType(opt.id)
              setResult(null)
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              type === opt.id ? "bg-primary text-primary-foreground" : "bg-slate-200 text-foreground hover:bg-slate-300"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {type === "percent-of" && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">What is</label>
              <Input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter percentage"
                onInput={calculate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">% of</label>
              <Input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter value"
                onInput={calculate}
              />
            </div>
          </>
        )}

        {type === "percent-change" && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Original value</label>
              <Input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter original"
                onInput={calculate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">New value</label>
              <Input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter new"
                onInput={calculate}
              />
            </div>
          </>
        )}

        {type === "percentage-increase" && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Initial amount</label>
              <Input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter amount"
                onInput={calculate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Increase percentage</label>
              <Input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter percentage"
                onInput={calculate}
              />
            </div>
          </>
        )}

        {type === "percentage-decrease" && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Initial amount</label>
              <Input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter amount"
                onInput={calculate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Decrease percentage</label>
              <Input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter percentage"
                onInput={calculate}
              />
            </div>
          </>
        )}

        {type === "percent-off" && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Original price</label>
              <Input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter price"
                onInput={calculate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Discount percentage</label>
              <Input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter discount"
                onInput={calculate}
              />
            </div>
          </>
        )}
      </div>

      {result !== null && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Result</p>
          <p className="text-3xl font-bold text-foreground">{result.toFixed(2)}</p>
        </Card>
      )}
    </div>
  )
}
