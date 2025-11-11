"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Gauge, Zap } from "lucide-react"

export default function EngineHorsepowerCalculator() {
  const [torque, setTorque] = useState(300)
  const [rpm, setRpm] = useState(5000)
  const [cylinders, setCylinders] = useState(6)
  const [displacement, setDisplacement] = useState(3.5)

  // Horsepower = (Torque × RPM) / 5252
  const horsepower = (torque * rpm) / 5252

  // kW conversion
  const kilowatts = horsepower * 0.7457

  // Power per liter
  const specificOutput = horsepower / displacement

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Gauge className="w-4 h-4" />
            Torque: {torque} lb-ft
          </label>
          <Slider
            value={[torque]}
            onValueChange={(value) => setTorque(value[0])}
            min={100}
            max={800}
            step={10}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Zap className="w-4 h-4" />
            RPM: {rpm.toLocaleString()}
          </label>
          <Slider
            value={[rpm]}
            onValueChange={(value) => setRpm(value[0])}
            min={1000}
            max={8000}
            step={100}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            Engine Displacement: {displacement} L
          </label>
          <Slider
            value={[displacement]}
            onValueChange={(value) => setDisplacement(value[0])}
            min={1}
            max={8}
            step={0.1}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">Cylinders: {cylinders}</label>
          <Slider
            value={[cylinders]}
            onValueChange={(value) => setCylinders(value[0])}
            min={4}
            max={12}
            step={2}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
          <div className="text-sm text-muted-foreground mb-1">Horsepower</div>
          <div className="text-3xl font-bold text-foreground">{horsepower.toFixed(1)} HP</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Kilowatts</div>
          <div className="text-3xl font-bold text-foreground">{kilowatts.toFixed(1)} kW</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Specific Output</div>
          <div className="text-3xl font-bold text-foreground">{specificOutput.toFixed(1)} HP/L</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Engine Specifications</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Torque:</span>
            <span className="font-medium text-foreground">{torque} lb-ft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">RPM:</span>
            <span className="font-medium text-foreground">{rpm.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Displacement:</span>
            <span className="font-medium text-foreground">{displacement} L</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cylinders:</span>
            <span className="font-medium text-foreground">{cylinders}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Horsepower:</span>
            <span className="font-bold text-foreground">
              {horsepower.toFixed(1)} HP ({kilowatts.toFixed(1)} kW)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
