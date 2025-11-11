"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MatrixCalculator() {
  const [operation, setOperation] = useState<"add" | "subtract" | "multiply" | "determinant" | "transpose">("add")
  const [matrixA, setMatrixA] = useState([
    [1, 2],
    [3, 4],
  ])
  const [matrixB, setMatrixB] = useState([
    [5, 6],
    [7, 8],
  ])

  const updateMatrixA = (row: number, col: number, value: string) => {
    const newMatrix = [...matrixA]
    newMatrix[row][col] = Number.parseFloat(value) || 0
    setMatrixA(newMatrix)
  }

  const updateMatrixB = (row: number, col: number, value: string) => {
    const newMatrix = [...matrixB]
    newMatrix[row][col] = Number.parseFloat(value) || 0
    setMatrixB(newMatrix)
  }

  // Matrix operations
  const addMatrices = () => {
    return matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]))
  }

  const subtractMatrices = () => {
    return matrixA.map((row, i) => row.map((val, j) => val - matrixB[i][j]))
  }

  const multiplyMatrices = () => {
    const result: number[][] = []
    for (let i = 0; i < matrixA.length; i++) {
      result[i] = []
      for (let j = 0; j < matrixB[0].length; j++) {
        let sum = 0
        for (let k = 0; k < matrixA[0].length; k++) {
          sum += matrixA[i][k] * matrixB[k][j]
        }
        result[i][j] = sum
      }
    }
    return result
  }

  const calculateDeterminant = (matrix: number[][]) => {
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }
    return 0
  }

  const transposeMatrix = (matrix: number[][]) => {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]))
  }

  let result: number[][] | number = [
    [0, 0],
    [0, 0],
  ]
  let resultLabel = ""

  switch (operation) {
    case "add":
      result = addMatrices()
      resultLabel = "A + B ="
      break
    case "subtract":
      result = subtractMatrices()
      resultLabel = "A - B ="
      break
    case "multiply":
      result = multiplyMatrices()
      resultLabel = "A × B ="
      break
    case "determinant":
      result = calculateDeterminant(matrixA)
      resultLabel = "det(A) ="
      break
    case "transpose":
      result = transposeMatrix(matrixA)
      resultLabel = "A^T ="
      break
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
            <SelectItem value="add">Addition</SelectItem>
            <SelectItem value="subtract">Subtraction</SelectItem>
            <SelectItem value="multiply">Multiplication</SelectItem>
            <SelectItem value="determinant">Determinant</SelectItem>
            <SelectItem value="transpose">Transpose</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Matrix A (2×2)</h3>
          <div className="space-y-3">
            {matrixA.map((row, i) => (
              <div key={i} className="flex gap-2">
                {row.map((val, j) => (
                  <Input
                    key={`${i}-${j}`}
                    type="number"
                    value={val}
                    onChange={(e) => updateMatrixA(i, j, e.target.value)}
                    className="w-20 text-center"
                  />
                ))}
              </div>
            ))}
          </div>
        </Card>

        {operation !== "determinant" && operation !== "transpose" && (
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Matrix B (2×2)</h3>
            <div className="space-y-3">
              {matrixB.map((row, i) => (
                <div key={i} className="flex gap-2">
                  {row.map((val, j) => (
                    <Input
                      key={`${i}-${j}`}
                      type="number"
                      value={val}
                      onChange={(e) => updateMatrixB(i, j, e.target.value)}
                      className="w-20 text-center"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-4">{resultLabel}</h3>
        {typeof result === "number" ? (
          <div className="text-4xl font-bold text-primary text-center py-4">{result.toFixed(2)}</div>
        ) : (
          <div className="space-y-3">
            {result.map((row, i) => (
              <div key={i} className="flex gap-4 justify-center">
                {row.map((val, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="w-20 h-12 flex items-center justify-center bg-card rounded border font-mono text-lg"
                  >
                    {val.toFixed(1)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
