"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function TileCalculator() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(10)
  const [tileSize, setTileSize] = useState(12)

  const sqft = length * width
  const tileSqft = (tileSize / 12) * (tileSize / 12)
  const tilesNeeded = Math.ceil(sqft / tileSqft)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Room Length (ft)</label>
        <Input type="number" value={length} onChange={(e) => setLength(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Room Width (ft)</label>
        <Input type="number" value={width} onChange={(e) => setWidth(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tile Size (inches)</label>
        <Input type="number" value={tileSize} onChange={(e) => setTileSize(Number.parseFloat(e.target.value) || 1)} />
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200 space-y-2">
        <div className="flex justify-between">
          <span>Area (sq ft):</span>
          <span className="font-bold">{sqft}</span>
        </div>
        <div className="flex justify-between">
          <span>Tiles Needed:</span>
          <span className="font-bold text-lg text-yellow-600">{tilesNeeded}</span>
        </div>
      </Card>
    </div>
  )
}
