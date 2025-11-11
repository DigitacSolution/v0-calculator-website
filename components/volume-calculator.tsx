"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function VolumeCalculator() {
  const [shape, setShape] = useState("sphere")
  const [dim1, setDim1] = useState("")
  const [dim2, setDim2] = useState("")
  const [dim3, setDim3] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const d1 = Number.parseFloat(dim1) || 0
    const d2 = Number.parseFloat(dim2) || 0
    const d3 = Number.parseFloat(dim3) || 0

    let volume = 0

    switch (shape) {
      case "sphere":
        volume = (4 / 3) * Math.PI * Math.pow(d1, 3)
        break
      case "cube":
        volume = Math.pow(d1, 3)
        break
      case "cylinder":
        volume = Math.PI * Math.pow(d1, 2) * d2
        break
      case "rectangular":
        volume = d1 * d2 * d3
        break
      case "cone":
        volume = (1 / 3) * Math.PI * Math.pow(d1, 2) * d2
        break
      default:
        break
    }

    setResult(volume.toFixed(2))
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Shape</label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="w-full p-2 border border-border rounded-lg"
        >
          <option value="sphere">Sphere</option>
          <option value="cube">Cube</option>
          <option value="cylinder">Cylinder</option>
          <option value="rectangular">Rectangular Box</option>
          <option value="cone">Cone</option>
        </select>
      </div>

      {shape === "sphere" && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Radius</label>
          <Input
            type="number"
            value={dim1}
            onChange={(e) => setDim1(e.target.value)}
            placeholder="Enter radius"
            onInput={calculate}
          />
        </div>
      )}

      {shape === "cube" && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Side Length</label>
          <Input
            type="number"
            value={dim1}
            onChange={(e) => setDim1(e.target.value)}
            placeholder="Enter side length"
            onInput={calculate}
          />
        </div>
      )}

      {(shape === "cylinder" || shape === "cone") && (
        <>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Radius</label>
            <Input
              type="number"
              value={dim1}
              onChange={(e) => setDim1(e.target.value)}
              placeholder="Enter radius"
              onInput={calculate}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Height</label>
            <Input
              type="number"
              value={dim2}
              onChange={(e) => setDim2(e.target.value)}
              placeholder="Enter height"
              onInput={calculate}
            />
          </div>
        </>
      )}

      {shape === "rectangular" && (
        <>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Length</label>
            <Input
              type="number"
              value={dim1}
              onChange={(e) => setDim1(e.target.value)}
              placeholder="Enter length"
              onInput={calculate}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Width</label>
            <Input
              type="number"
              value={dim2}
              onChange={(e) => setDim2(e.target.value)}
              placeholder="Enter width"
              onInput={calculate}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Height</label>
            <Input
              type="number"
              value={dim3}
              onChange={(e) => setDim3(e.target.value)}
              placeholder="Enter height"
              onInput={calculate}
            />
          </div>
        </>
      )}

      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Volume</p>
          <p className="text-3xl font-bold text-foreground">{result} cubic units</p>
        </Card>
      )}
    </div>
  )
}
