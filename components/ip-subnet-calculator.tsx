"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function IPSubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0")
  const [cidr, setCidr] = useState(24)

  const maskBits = (0xffffffff << (32 - cidr)) >>> 0
  const mask = [(maskBits >>> 24) & 0xff, (maskBits >>> 16) & 0xff, (maskBits >>> 8) & 0xff, maskBits & 0xff].join(".")

  const hosts = Math.pow(2, 32 - cidr) - 2

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">IP Address</label>
        <Input value={ip} onChange={(e) => setIp(e.target.value)} placeholder="192.168.1.0" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">CIDR Notation</label>
        <Input
          type="number"
          value={cidr}
          onChange={(e) => setCidr(Math.max(1, Math.min(32, Number.parseInt(e.target.value) || 24)))}
          min="1"
          max="32"
        />
      </div>

      <Card className="p-4 bg-teal-50 border-teal-200 space-y-2">
        <div className="flex justify-between">
          <span>Subnet Mask:</span>
          <span className="font-bold">{mask}</span>
        </div>
        <div className="flex justify-between">
          <span>Usable Hosts:</span>
          <span className="font-bold text-teal-600">{hosts}</span>
        </div>
      </Card>
    </div>
  )
}
