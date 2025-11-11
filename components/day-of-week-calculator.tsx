"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar } from "lucide-react"

export default function DayOfWeekCalculator() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const selectedDate = new Date(date + "T00:00:00")
  const dayOfWeek = selectedDate.toLocaleDateString("en-US", { weekday: "long" })
  const fullDate = selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  const dayNumber = selectedDate.getDay()

  const dayColors: { [key: number]: string } = {
    0: "text-red-600",
    1: "text-yellow-600",
    2: "text-pink-600",
    3: "text-green-600",
    4: "text-orange-600",
    5: "text-blue-600",
    6: "text-purple-600",
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Date:</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Calendar className="w-16 h-16 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">{fullDate}</p>
            <p className={`text-5xl font-bold ${dayColors[dayNumber]}`}>{dayOfWeek}</p>
          </div>
          <div className="grid grid-cols-7 gap-2 mt-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
              <div
                key={day}
                className={`p-2 rounded-lg text-xs font-semibold ${
                  index === dayNumber ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
