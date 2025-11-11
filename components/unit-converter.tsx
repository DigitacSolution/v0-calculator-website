"use client"

import { useState } from "react"

const conversions = {
  length: {
    name: "Length",
    units: [
      { name: "Meter", symbol: "m", toBase: 1 },
      { name: "Kilometer", symbol: "km", toBase: 1000 },
      { name: "Centimeter", symbol: "cm", toBase: 0.01 },
      { name: "Millimeter", symbol: "mm", toBase: 0.001 },
      { name: "Mile", symbol: "mi", toBase: 1609.34 },
      { name: "Yard", symbol: "yd", toBase: 0.9144 },
      { name: "Foot", symbol: "ft", toBase: 0.3048 },
      { name: "Inch", symbol: "in", toBase: 0.0254 },
    ],
  },
  weight: {
    name: "Weight",
    units: [
      { name: "Kilogram", symbol: "kg", toBase: 1 },
      { name: "Gram", symbol: "g", toBase: 0.001 },
      { name: "Milligram", symbol: "mg", toBase: 0.000001 },
      { name: "Pound", symbol: "lb", toBase: 0.453592 },
      { name: "Ounce", symbol: "oz", toBase: 0.0283495 },
      { name: "Ton", symbol: "t", toBase: 1000 },
    ],
  },
  temperature: {
    name: "Temperature",
    units: [
      { name: "Celsius", symbol: "°C", toBase: 1 },
      { name: "Fahrenheit", symbol: "°F", toBase: 1 },
      { name: "Kelvin", symbol: "K", toBase: 1 },
    ],
  },
}

export default function UnitConverter() {
  const [category, setCategory] = useState("length")
  const [inputValue, setInputValue] = useState("1")
  const [fromUnit, setFromUnit] = useState(0)
  const [toUnit, setToUnit] = useState(1)

  const currentCategory = conversions[category as keyof typeof conversions]
  const units = currentCategory.units

  const convert = () => {
    const value = Number.parseFloat(inputValue) || 0
    if (category === "temperature") {
      if (fromUnit === 0 && toUnit === 1) return ((value * 9) / 5 + 32).toFixed(4)
      if (fromUnit === 1 && toUnit === 0) return (((value - 32) * 5) / 9).toFixed(4)
      if (fromUnit === 0 && toUnit === 2) return (value + 273.15).toFixed(4)
      if (fromUnit === 2 && toUnit === 0) return (value - 273.15).toFixed(4)
      if (fromUnit === 1 && toUnit === 2) return (((value - 32) * 5) / 9 + 273.15).toFixed(4)
      if (fromUnit === 2 && toUnit === 1) return (((value - 273.15) * 9) / 5 + 32).toFixed(4)
    }
    const baseValue = value * units[fromUnit].toBase
    const result = baseValue / units[toUnit].toBase
    return result.toFixed(6)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">Conversion Type</label>
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(conversions).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setCategory(key)
                setFromUnit(0)
                setToUnit(1)
              }}
              className={`p-3 rounded-lg font-medium transition-all ${
                category === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 text-foreground hover:bg-slate-200"
              }`}
            >
              {value.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">From</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
            placeholder="Enter value"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(Number.parseInt(e.target.value))}
            className="w-full mt-2 px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
          >
            {units.map((unit, i) => (
              <option key={i} value={i}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">To</label>
          <div className="px-4 py-3 rounded-lg border border-border bg-slate-100 text-foreground text-xl font-semibold">
            {convert()}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(Number.parseInt(e.target.value))}
            className="w-full mt-2 px-4 py-3 rounded-lg border border-border bg-slate-50 text-foreground"
          >
            {units.map((unit, i) => (
              <option key={i} value={i}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
