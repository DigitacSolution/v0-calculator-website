"use client"

import { useState } from "react"

export default function DueDateCalculator() {
  const [conceivedDate, setConceivedDate] = useState("2024-11-01")

  const calculateDueDate = () => {
    const date = new Date(conceivedDate)
    date.setDate(date.getDate() + 266) // ~38 weeks from conception
    return date.toLocaleDateString()
  }

  const calculateWeeks = () => {
    const date = new Date(conceivedDate)
    const today = new Date()
    const diff = today - date
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000))
    return weeks
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Conception Date (Estimated)</label>
        <input
          type="date"
          value={conceivedDate}
          onChange={(e) => setConceivedDate(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg text-foreground"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Weeks Since Conception</div>
          <div className="text-3xl font-bold text-pink-600">{calculateWeeks()}</div>
          <div className="text-xs text-muted-foreground">weeks</div>
        </div>
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Due Date (LMP)</div>
          <div className="font-bold text-pink-600">{calculateDueDate()}</div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> Typical pregnancy is 266 days from conception. Last Menstrual Period (LMP) due dates
          add 280 days from LMP.
        </p>
      </div>
    </div>
  )
}
