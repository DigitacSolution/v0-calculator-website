"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RomanNumeralConverter() {
  const [number, setNumber] = useState(1994)

  const toRoman = (num: number) => {
    const romanMap = [
      { val: 1000, numeral: "M" },
      { val: 900, numeral: "CM" },
      { val: 500, numeral: "D" },
      { val: 400, numeral: "CD" },
      { val: 100, numeral: "C" },
      { val: 90, numeral: "XC" },
      { val: 50, numeral: "L" },
      { val: 40, numeral: "XL" },
      { val: 10, numeral: "X" },
      { val: 9, numeral: "IX" },
      { val: 5, numeral: "V" },
      { val: 4, numeral: "IV" },
      { val: 1, numeral: "I" },
    ]

    let roman = ""
    for (let i = 0; i < romanMap.length; i++) {
      while (num >= romanMap[i].val) {
        roman += romanMap[i].numeral
        num -= romanMap[i].val
      }
    }
    return roman
  }

  const roman = toRoman(number)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Number</label>
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number.parseInt(e.target.value) || 0)}
          min="1"
          max="3999"
        />
      </div>

      <Card className="p-4 bg-amber-50 border-amber-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Roman Numeral</div>
          <div className="text-4xl font-bold text-amber-600">{roman}</div>
        </div>
      </Card>
    </div>
  )
}
