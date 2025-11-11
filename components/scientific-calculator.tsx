"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(String(num))
      setNewNumber(false)
    } else {
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }

  const handleOperation = (op) => {
    const currentValue = Number.parseFloat(display)
    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }
    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (prev, current, op) => {
    switch (op) {
      case "+":
        return prev + current
      case "-":
        return prev - current
      case "*":
        return prev * current
      case "/":
        return prev / current
      case "^":
        return Math.pow(prev, current)
      case "√":
        return Math.sqrt(current)
      case "%":
        return prev * (current / 100)
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
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleScientific = (func) => {
    const value = Number.parseFloat(display)
    let result = 0
    switch (func) {
      case "sin":
        result = Math.sin((value * Math.PI) / 180)
        break
      case "cos":
        result = Math.cos((value * Math.PI) / 180)
        break
      case "tan":
        result = Math.tan((value * Math.PI) / 180)
        break
      case "log":
        result = Math.log10(value)
        break
      case "ln":
        result = Math.log(value)
        break
      case "factorial":
        result = factorial(Math.floor(value))
        break
      default:
        break
    }
    setDisplay(String(result.toFixed(6)))
    setNewNumber(true)
  }

  const factorial = (n) => {
    if (n <= 1) return 1
    return n * factorial(n - 1)
  }

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 text-white p-6 rounded-lg text-right">
        <div className="text-4xl font-mono font-bold truncate">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button onClick={() => handleScientific("sin")} variant="outline" className="col-span-1">
          sin
        </Button>
        <Button onClick={() => handleScientific("cos")} variant="outline">
          cos
        </Button>
        <Button onClick={() => handleScientific("tan")} variant="outline">
          tan
        </Button>
        <Button onClick={handleClear} variant="destructive">
          C
        </Button>

        <Button onClick={() => handleScientific("log")} variant="outline">
          log
        </Button>
        <Button onClick={() => handleScientific("ln")} variant="outline">
          ln
        </Button>
        <Button onClick={() => handleScientific("factorial")} variant="outline">
          n!
        </Button>
        <Button onClick={() => handleOperation("%")} variant="outline">
          %
        </Button>

        <Button onClick={() => handleNumber(7)}>7</Button>
        <Button onClick={() => handleNumber(8)}>8</Button>
        <Button onClick={() => handleNumber(9)}>9</Button>
        <Button onClick={() => handleOperation("/")}>/</Button>

        <Button onClick={() => handleNumber(4)}>4</Button>
        <Button onClick={() => handleNumber(5)}>5</Button>
        <Button onClick={() => handleNumber(6)}>6</Button>
        <Button onClick={() => handleOperation("*")}>*</Button>

        <Button onClick={() => handleNumber(1)}>1</Button>
        <Button onClick={() => handleNumber(2)}>2</Button>
        <Button onClick={() => handleNumber(3)}>3</Button>
        <Button onClick={() => handleOperation("-")}>-</Button>

        <Button onClick={() => handleNumber(0)} className="col-span-2">
          0
        </Button>
        <Button onClick={() => setDisplay(display + ".")}>.</Button>
        <Button onClick={() => handleOperation("+")}>+</Button>

        <Button onClick={handleEquals} className="col-span-4" size="lg">
          =
        </Button>
      </div>
    </div>
  )
}
