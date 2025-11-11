"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Calendar, Baby } from "lucide-react"

export default function ConceptionCalculator() {
  const [lastPeriod, setLastPeriod] = useState(new Date().toISOString().split("T")[0])
  const [cycleLength, setCycleLength] = useState(28)

  const calculateDates = () => {
    const lmp = new Date(lastPeriod)
    const ovulationDate = new Date(lmp)
    ovulationDate.setDate(lmp.getDate() + cycleLength - 14)

    const conceptionStart = new Date(ovulationDate)
    conceptionStart.setDate(ovulationDate.getDate() - 5)

    const conceptionEnd = new Date(ovulationDate)
    conceptionEnd.setDate(ovulationDate.getDate() + 1)

    const dueDate = new Date(lmp)
    dueDate.setDate(lmp.getDate() + 280)

    return {
      ovulation: ovulationDate,
      conceptionStart,
      conceptionEnd,
      dueDate,
    }
  }

  const dates = calculateDates()

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">First Day of Last Period</label>
          <Input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="w-full" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Cycle Length (days): {cycleLength}</label>
          <Input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
            min={21}
            max={35}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid gap-4">
        <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-pink-200 dark:border-pink-800">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            Ovulation Date
          </div>
          <div className="text-2xl font-bold text-foreground">{formatDate(dates.ovulation)}</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Baby className="w-4 h-4" />
            Conception Window
          </div>
          <div className="text-lg font-bold text-foreground">
            {formatDate(dates.conceptionStart)} - {formatDate(dates.conceptionEnd)}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-2">Estimated Due Date</div>
          <div className="text-2xl font-bold text-foreground">{formatDate(dates.dueDate)}</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">About Conception</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Conception typically occurs during ovulation, which happens about 14 days before the next period.</p>
          <p>
            Sperm can survive for up to 5 days, so the fertile window extends from 5 days before ovulation to 1 day
            after.
          </p>
          <p>
            This calculator provides estimates based on a regular cycle. Consult a healthcare provider for personalized
            guidance.
          </p>
        </div>
      </div>
    </div>
  )
}
