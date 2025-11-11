"use client"

import { useState } from "react"

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState(30)
  const [bmindex, setBmindex] = useState(25)

  const calculateBodyFat = () => {
    if (gender === "male") {
      // Deurenberg formula for men
      return (1.2 * bmindex + 0.23 * age - 16.2).toFixed(1)
    } else {
      // Deurenberg formula for women
      return (1.2 * bmindex + 0.23 * age - 5.4).toFixed(1)
    }
  }

  const bodyFat = Number.parseFloat(calculateBodyFat())

  const getCategory = () => {
    if (gender === "male") {
      if (bodyFat < 6) return "Essential Fat"
      if (bodyFat < 13) return "Athletes"
      if (bodyFat < 17) return "Fitness"
      if (bodyFat < 25) return "Average"
      return "Obese"
    } else {
      if (bodyFat < 13) return "Essential Fat"
      if (bodyFat < 20) return "Athletes"
      if (bodyFat < 24) return "Fitness"
      if (bodyFat < 32) return "Average"
      return "Obese"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setGender("male")}
          className={`px-4 py-2 rounded-lg font-medium ${gender === "male" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Male
        </button>
        <button
          onClick={() => setGender("female")}
          className={`px-4 py-2 rounded-lg font-medium ${gender === "female" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Female
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Age: {age}</label>
        <input
          type="range"
          min="15"
          max="100"
          value={age}
          onChange={(e) => setAge(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">BMI: {bmindex.toFixed(1)}</label>
        <input
          type="range"
          min="10"
          max="50"
          step="0.1"
          value={bmindex}
          onChange={(e) => setBmindex(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">{bodyFat}%</div>
          <div className="text-lg font-semibold text-foreground mb-4">{getCategory()}</div>
        </div>
        <div className="mt-6 bg-white rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Body Fat % Categories:</strong>
          </p>
          <div className="text-xs space-y-1 text-muted-foreground">
            {gender === "male" ? (
              <>
                <p>Essential Fat: &lt;6%</p>
                <p>Athletes: 6-13%</p>
                <p>Fitness: 13-17%</p>
                <p>Average: 17-25%</p>
                <p>Obese: 25%+</p>
              </>
            ) : (
              <>
                <p>Essential Fat: &lt;13%</p>
                <p>Athletes: 13-20%</p>
                <p>Fitness: 20-24%</p>
                <p>Average: 24-32%</p>
                <p>Obese: 32%+</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
