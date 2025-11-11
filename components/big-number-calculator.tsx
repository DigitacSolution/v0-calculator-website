"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BigNumberCalculator() {
  const [operation, setOperation] = useState<"add" | "subtract" | "multiply" | "divide">("add")
  const [num1, setNum1] = useState("999999999999999999")
  const [num2, setNum2] = useState("111111111111111111")

  const addBigNumbers = (a: string, b: string): string => {
    const bigA = BigInt(a)
    const bigB = BigInt(b)
    return (bigA + bigB).toString()
  }

  const subtractBigNumbers = (a: string, b: string): string => {
    const bigA = BigInt(a)
    const bigB = BigInt(b)
    return (bigA - bigB).toString()
  }

  const multiplyBigNumbers = (a: string, b: string): string => {
    const bigA = BigInt(a)
    const bigB = BigInt(b)
    return (bigA * bigB).toString()
  }

  const divideBigNumbers = (a: string, b: string): { quotient: string; remainder: string } => {
    const bigA = BigInt(a)
    const bigB = BigInt(b)
    if (bigB === BigInt(0)) return { quotient: "Cannot divide by zero", remainder: "0" }
    return {
      quotient: (bigA / bigB).toString(),
      remainder: (bigA % bigB).toString(),
    }
  }

  let result: string | { quotient: string; remainder: string } = "0"
  let operationSymbol = "+"

  try {
    switch (operation) {
      case "add":
        result = addBigNumbers(num1, num2)
        operationSymbol = "+"
        break
      case "subtract":
        result = subtractBigNumbers(num1, num2)
        operationSymbol = "-"
        break
      case "multiply":
        result = multiplyBigNumbers(num1, num2)
        operationSymbol = "×"
        break
      case "divide":
        result = divideBigNumbers(num1, num2)
        operationSymbol = "÷"
        break
    }
  } catch (error) {
    result = "Invalid input"
  }

  const formatBigNumber = (num: string) => {
    if (!num || num === "Invalid input" || num === "Cannot divide by zero") return num
    const parts = num.split("")
    const formatted = []
    for (let i = parts.length - 1, count = 0; i >= 0; i--, count++) {
      if (count > 0 && count % 3 === 0) {
        formatted.unshift(",")
      }
      formatted.unshift(parts[i])
    }
    return formatted.join("")
  }

  return (
    <div className="space-y-6">
      <div>
        <Label>Operation</Label>
        <Select value={operation} onValueChange={(value: any) => setOperation(value)}>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="add">Addition (+)</SelectItem>
            <SelectItem value="subtract">Subtraction (-)</SelectItem>
            <SelectItem value="multiply">Multiplication (×)</SelectItem>
            <SelectItem value="divide">Division (÷)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="num1">First Number</Label>
          <Input
            id="num1"
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value.replace(/[^0-9-]/g, ""))}
            placeholder="Enter large number"
            className="mt-2 font-mono"
          />
          <div className="text-xs text-muted-foreground mt-1">Formatted: {formatBigNumber(num1)}</div>
        </div>

        <div className="text-center text-2xl font-bold text-primary">{operationSymbol}</div>

        <div>
          <Label htmlFor="num2">Second Number</Label>
          <Input
            id="num2"
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value.replace(/[^0-9-]/g, ""))}
            placeholder="Enter large number"
            className="mt-2 font-mono"
          />
          <div className="text-xs text-muted-foreground mt-1">Formatted: {formatBigNumber(num2)}</div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-4">Result</h3>
        {typeof result === "string" ? (
          <div>
            <div className="text-3xl font-mono font-bold text-primary break-all">{formatBigNumber(result)}</div>
            <div className="text-sm text-muted-foreground mt-2">Digit count: {result.replace("-", "").length}</div>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <div className="text-sm text-muted-foreground">Quotient:</div>
              <div className="text-2xl font-mono font-bold text-primary break-all">
                {formatBigNumber(result.quotient)}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Remainder:</div>
              <div className="text-xl font-mono font-semibold text-accent break-all">
                {formatBigNumber(result.remainder)}
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card className="p-6 bg-secondary/50">
        <h3 className="font-semibold mb-3">About Big Number Calculator</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This calculator can handle extremely large integers beyond JavaScript's standard number limits. It uses BigInt
          to perform accurate calculations with numbers of virtually unlimited size.
        </p>
      </Card>
    </div>
  )
}
