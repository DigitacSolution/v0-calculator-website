"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy } from "lucide-react"

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const generatePassword = () => {
    const chars = {
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lower: "abcdefghijklmnopqrstuvwxyz",
      nums: "0123456789",
      syms: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    }

    let available = ""
    if (uppercase) available += chars.upper
    if (lowercase) available += chars.lower
    if (numbers) available += chars.nums
    if (symbols) available += chars.syms

    if (!available) available = chars.lower

    let pwd = ""
    for (let i = 0; i < length; i++) {
      pwd += available.charAt(Math.floor(Math.random() * available.length))
    }
    setPassword(pwd)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="50"
          value={length}
          onChange={(e) => setLength(Number.parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <Checkbox checked={uppercase} onCheckedChange={setUppercase} />
          <span>Uppercase Letters (A-Z)</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox checked={lowercase} onCheckedChange={setLowercase} />
          <span>Lowercase Letters (a-z)</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox checked={numbers} onCheckedChange={setNumbers} />
          <span>Numbers (0-9)</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox checked={symbols} onCheckedChange={setSymbols} />
          <span>Symbols (!@#$%)</span>
        </label>
      </div>

      <Button onClick={generatePassword} className="w-full">
        Generate Password
      </Button>

      {password && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <code className="text-lg font-mono font-bold">{password}</code>
            <Button onClick={copyToClipboard} size="sm" variant="outline">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
