"use client"

import { useState } from "react"

export default function BMICalculator() {
  const [height, setHeight] = useState(70) // inches
  const [weight, setWeight] = useState(180) // pounds
  const [metric, setMetric] = useState(false)

  const calculateBMI = () => {
    const h = height
    const w = weight

    if (metric) {
      // BMI = weight(kg) / (height(m))^2
      return (w / (h * h)).toFixed(1)
    } else {
      // BMI = (weight(lbs) / (height(inches))^2) * 703
      return ((w / (h * h)) * 703).toFixed(1)
    }
  }

  const bmi = Number.parseFloat(calculateBMI())

  const getCategory = () => {
    if (bmi < 18.5) return { category: "Underweight", color: "bg-blue-100 text-blue-800" }
    if (bmi < 25) return { category: "Normal Weight", color: "bg-green-100 text-green-800" }
    if (bmi < 30) return { category: "Overweight", color: "bg-yellow-100 text-yellow-800" }
    return { category: "Obese", color: "bg-red-100 text-red-800" }
  }

  const result = getCategory()

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMetric(false)}
          className={`px-4 py-2 rounded-lg font-medium ${!metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Imperial (lbs/in)
        </button>
        <button
          onClick={() => setMetric(true)}
          className={`px-4 py-2 rounded-lg font-medium ${metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Metric (kg/m)
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          {metric ? "Height (cm)" : "Height (inches)"}
        </label>
        <input
          type="range"
          min={metric ? 100 : 48}
          max={metric ? 250 : 84}
          value={height}
          onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-muted-foreground mt-1">
          {height} {metric ? "cm" : "in"}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          {metric ? "Weight (kg)" : "Weight (lbs)"}
        </label>
        <input
          type="range"
          min={metric ? 30 : 75}
          max={metric ? 200 : 450}
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-muted-foreground mt-1">
          {weight} {metric ? "kg" : "lbs"}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">{bmi}</div>
          <div className={`inline-block px-4 py-2 rounded-full font-semibold ${result.color}`}>{result.category}</div>
        </div>
        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p>
            <strong>BMI Categories:</strong>
          </p>
          <ul className="space-y-1">
            <li>Underweight: &lt; 18.5</li>
            <li>Normal Weight: 18.5 - 24.9</li>
            <li>Overweight: 25 - 29.9</li>
            <li>Obese: 30+</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
