"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AreaCalculator() {
  const [shape, setShape] = useState("rectangle")
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(8)
  const [radius, setRadius] = useState(5)
  const [base, setBase] = useState(10)
  const [height, setHeight] = useState(6)

  let area = 0
  let perimeter = 0

  if (shape === "rectangle") {
    area = length * width
    perimeter = 2 * (length + width)
  } else if (shape === "circle") {
    area = Math.PI * radius * radius
    perimeter = 2 * Math.PI * radius
  } else if (shape === "triangle") {
    area = (base * height) / 2
    perimeter = base + 2 * Math.sqrt((base / 2) ** 2 + height ** 2)
  } else if (shape === "square") {
    area = length * length
    perimeter = 4 * length
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Shape:</Label>
        <Select value={shape} onValueChange={setShape}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rectangle">Rectangle</SelectItem>
            <SelectItem value="square">Square</SelectItem>
            <SelectItem value="circle">Circle</SelectItem>
            <SelectItem value="triangle">Triangle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {shape === "rectangle" && (
        <>
          <div className="space-y-2">
            <Label>Length: {length} units</Label>
            <Slider value={[length]} onValueChange={([v]) => setLength(v)} min={1} max={50} step={0.5} />
            <Input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>Width: {width} units</Label>
            <Slider value={[width]} onValueChange={([v]) => setWidth(v)} min={1} max={50} step={0.5} />
            <Input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} step={0.1} />
          </div>
        </>
      )}

      {shape === "square" && (
        <div className="space-y-2">
          <Label>Side Length: {length} units</Label>
          <Slider value={[length]} onValueChange={([v]) => setLength(v)} min={1} max={50} step={0.5} />
          <Input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} step={0.1} />
        </div>
      )}

      {shape === "circle" && (
        <div className="space-y-2">
          <Label>Radius: {radius} units</Label>
          <Slider value={[radius]} onValueChange={([v]) => setRadius(v)} min={1} max={50} step={0.5} />
          <Input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} step={0.1} />
        </div>
      )}

      {shape === "triangle" && (
        <>
          <div className="space-y-2">
            <Label>Base: {base} units</Label>
            <Slider value={[base]} onValueChange={([v]) => setBase(v)} min={1} max={50} step={0.5} />
            <Input type="number" value={base} onChange={(e) => setBase(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>Height: {height} units</Label>
            <Slider value={[height]} onValueChange={([v]) => setHeight(v)} min={1} max={50} step={0.5} />
            <Input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} step={0.1} />
          </div>
        </>
      )}

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Results</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Area:</span>
            <span className="text-2xl font-bold text-primary">{area.toFixed(2)} units²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Perimeter/Circumference:</span>
            <span className="text-xl font-bold text-accent">{perimeter.toFixed(2)} units</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
