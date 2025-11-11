"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface TimeEntry {
  day: string
  clockIn: string
  clockOut: string
}

export default function TimeCardCalculator() {
  const [hourlyRate, setHourlyRate] = useState(25)
  const [entries, setEntries] = useState<TimeEntry[]>([
    { day: "Monday", clockIn: "09:00", clockOut: "17:00" },
    { day: "Tuesday", clockIn: "09:00", clockOut: "17:00" },
  ])
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")

  const calculateHours = (clockIn: string, clockOut: string) => {
    const [inHour, inMin] = clockIn.split(":").map(Number)
    const [outHour, outMin] = clockOut.split(":").map(Number)
    const totalMinutes = outHour * 60 + outMin - (inHour * 60 + inMin)
    return totalMinutes / 60
  }

  const totalHours = entries.reduce((sum, entry) => sum + calculateHours(entry.clockIn, entry.clockOut), 0)
  const totalPay = totalHours * hourlyRate

  const addEntry = () => {
    setEntries([...entries, { day: "New Day", clockIn: "09:00", clockOut: "17:00" }])
  }

  const removeEntry = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index))
  }

  const updateEntry = (index: number, field: keyof TimeEntry, value: string) => {
    const newEntries = [...entries]
    newEntries[index] = { ...newEntries[index], [field]: value }
    setEntries(newEntries)
  }

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "USD"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "INR"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="space-y-2">
        <Label>Hourly Rate: {formatCurrency(hourlyRate)}</Label>
        <Input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} step={0.5} />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Time Entries</h3>
          <Button onClick={addEntry} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Entry
          </Button>
        </div>

        {entries.map((entry, index) => (
          <Card key={index} className="p-4">
            <div className="grid grid-cols-4 gap-3 items-end">
              <div className="space-y-2">
                <Label>Day</Label>
                <Input value={entry.day} onChange={(e) => updateEntry(index, "day", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Clock In</Label>
                <Input
                  type="time"
                  value={entry.clockIn}
                  onChange={(e) => updateEntry(index, "clockIn", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Clock Out</Label>
                <Input
                  type="time"
                  value={entry.clockOut}
                  onChange={(e) => updateEntry(index, "clockOut", e.target.value)}
                />
              </div>
              <div>
                <Button onClick={() => removeEntry(index)} size="sm" variant="destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Hours: {calculateHours(entry.clockIn, entry.clockOut).toFixed(2)}
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Weekly Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Hours:</span>
            <span className="text-2xl font-bold text-primary">{totalHours.toFixed(2)} hrs</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Hourly Rate:</span>
            <span className="text-xl font-bold">{formatCurrency(hourlyRate)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Pay:</span>
            <span className="text-2xl font-bold text-accent">{formatCurrency(totalPay)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
