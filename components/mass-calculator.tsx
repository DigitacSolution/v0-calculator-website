"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MassCalculator() {
  const [volume, setVolume] = useState(100)
  const [density, setDensity] = useState(0.5)
  const [volumeUnit, setVolumeUnit] = useState("cm3")
  const [densityUnit, setDensityUnit] = useState("g/cm3")

  const mass = volume * density

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Volume:</Label>
          <div className="flex gap-2">
            <Input type="number" value={volume} onChange={(e) => setVolume(Number(e.target.value))} step={0.1} />
            <Select value={volumeUnit} onValueChange={setVolumeUnit}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cm3">cm³</SelectItem>
                <SelectItem value="m3">m³</SelectItem>
                <SelectItem value="L">Liters</SelectItem>
                <SelectItem value="ml">ml</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Density:</Label>
          <div className="flex gap-2">
            <Input type="number" value={density} onChange={(e) => setDensity(Number(e.target.value))} step={0.01} />
            <Select value={densityUnit} onValueChange={setDensityUnit}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="g/cm3">g/cm³</SelectItem>
                <SelectItem value="kg/m3">kg/m³</SelectItem>
                <SelectItem value="g/ml">g/ml</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Mass Calculation</h3>
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Formula: Mass = Volume × Density</p>
            <p className="text-4xl font-bold text-primary">
              {mass.toFixed(2)} {densityUnit === "g/cm3" ? "g" : "kg"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Volume</p>
              <p className="font-semibold">
                {volume} {volumeUnit}
              </p>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Density</p>
              <p className="font-semibold">
                {density} {densityUnit}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
