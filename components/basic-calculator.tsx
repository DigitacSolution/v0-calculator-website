"use client"

import { useState } from "react"
import { Delete } from "lucide-react"

export default function BasicCalculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.")
      setWaitingForNewValue(false)
    } else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const handleOperation = (op: string) => {
    const currentValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setWaitingForNewValue(true)
  }

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current
      case "-":
        return prev - current
      case "×":
        return prev * current
      case "÷":
        return prev / current
      case "%":
        return (prev * current) / 100
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, Number.parseFloat(display), operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ]

  return (
    <div className="space-y-4">
      <div className="bg-slate-100 rounded-lg p-6 text-right">
        <div className="text-sm text-muted-foreground mb-2">
          {operation && previousValue !== null && `${previousValue} ${operation}`}
        </div>
        <div className="text-5xl font-bold text-foreground break-words">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((row, i) => (
          <div key={i} className="contents">
            {row.map((btn) => {
              let handler = () => {}
              let className = "bg-card hover:bg-slate-100"

              if (btn === "=") {
                handler = handleEquals
                className = "bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              } else if (btn === ".") {
                handler = handleDecimal
              } else if ("+-×÷%".includes(btn)) {
                handler = () => handleOperation(btn)
                className = "bg-accent/20 hover:bg-accent/30 text-primary font-bold"
              } else {
                handler = () => handleNumber(btn)
              }

              return (
                <button
                  key={btn}
                  onClick={handler}
                  className={`p-4 rounded-lg font-semibold text-lg border border-border transition-all ${className}`}
                >
                  {btn}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleBackspace}
          className="flex items-center justify-center gap-2 p-4 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold border border-border transition-all"
        >
          <Delete className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={handleClear}
          className="p-4 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-semibold border border-border transition-all"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
