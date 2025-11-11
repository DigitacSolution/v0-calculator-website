"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SurfaceAreaCalculator() {
  const [shape, setShape] = useState("cube")
  const [side, setSide] = useState(5)
  const [length, setLength] = useState(8)
  const [width, setWidth] = useState(6)
  const [height, setHeight] = useState(4)
  const [radius, setRadius] = useState(5)

  let surfaceArea = 0
  let volume = 0

  if (shape === "cube") {
    surfaceArea = 6 * side * side
    volume = side * side * side
  } else if (shape === "rectangular-prism") {
    surfaceArea = 2 * (length * width + width * height + height * length)
    volume = length * width * height
  } else if (shape === "sphere") {
    surfaceArea = 4 * Math.PI * radius * radius
    volume = (4 / 3) * Math.PI * radius * radius * radius
  } else if (shape === "cylinder") {
    surfaceArea = 2 * Math.PI * radius * (radius + height)
    volume = Math.PI * radius * radius * height
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select 3D Shape:</Label>
        <Select value={shape} onValueChange={setShape}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cube">Cube</SelectItem>
            <SelectItem value="rectangular-prism">Rectangular Prism</SelectItem>
            <SelectItem value="sphere">Sphere</SelectItem>
            <SelectItem value="cylinder">Cylinder</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {shape === "cube" && (
        <div className="space-y-2">
          <Label>Side Length: {side} units</Label>
          <Slider value={[side]} onValueChange={([v]) => setSide(v)} min={1} max={20} step={0.5} />
          <Input type="number" value={side} onChange={(e) => setSide(Number(e.target.value))} step={0.1} />
        </div>
      )}

      {shape === "rectangular-prism" && (
        <>
          <div className="space-y-2">
            <Label>Length: {length} units</Label>
            <Slider value={[length]} onValueChange={([v]) => setLength(v)} min={1} max={20} step={0.5} />
            <Input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>Width: {width} units</Label>
            <Slider value={[width]} onValueChange={([v]) => setWidth(v)} min={1} max={20} step={0.5} />
            <Input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>Height: {height} units</Label>
            <Slider value={[height]} onValueChange={([v]) => setHeight(v)} min={1} max={20} step={0.5} />
            <Input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} step={0.1} />
          </div>
        </>
      )}

      {(shape === "sphere" || shape === "cylinder") && (
        <div className="space-y-2">
          <Label>Radius: {radius} units</Label>
          <Slider value={[radius]} onValueChange={([v]) => setRadius(v)} min={1} max={20} step={0.5} />
          <Input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} step={0.1} />
        </div>
      )}

      {shape === "cylinder" && (
        <div className="space-y-2">
          <Label>Height: {height} units</Label>
          <Slider value={[height]} onValueChange={([v]) => setHeight(v)} min={1} max={20} step={0.5} />
          <Input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} step={0.1} />
        </div>
      )}

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Results</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Surface Area:</span>
            <span className="text-2xl font-bold text-primary">{surfaceArea.toFixed(2)} units²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Volume:</span>
            <span className="text-xl font-bold text-accent">{volume.toFixed(2)} units³</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
