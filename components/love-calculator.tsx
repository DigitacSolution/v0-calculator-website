"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export default function LoveCalculator() {
  const [name1, setName1] = useState("Alex")
  const [name2, setName2] = useState("Jordan")

  const calculateLove = (n1: string, n2: string) => {
    const combined = (n1 + n2).toLowerCase().replace(/[^a-z]/g, "")
    let hash = 0
    for (let i = 0; i < combined.length; i++) {
      hash = combined.charCodeAt(i) + ((hash << 5) - hash)
    }
    return Math.abs(hash % 101)
  }

  const loveScore = calculateLove(name1, name2)

  let message = ""
  let color = ""
  if (loveScore >= 90) {
    message = "Perfect Match! You two are made for each other!"
    color = "text-pink-600"
  } else if (loveScore >= 70) {
    message = "Great Chemistry! This could be something special."
    color = "text-rose-600"
  } else if (loveScore >= 50) {
    message = "Good Potential! Worth exploring further."
    color = "text-orange-600"
  } else if (loveScore >= 30) {
    message = "Moderate Compatibility. Challenges ahead but possible."
    color = "text-yellow-600"
  } else {
    message = "Low Match. May need extra effort to make it work."
    color = "text-gray-600"
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>First Name:</Label>
          <Input type="text" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Enter first name" />
        </div>

        <div className="space-y-2">
          <Label>Second Name:</Label>
          <Input type="text" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Enter second name" />
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-pink-600 fill-pink-600 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold">Love Compatibility</h3>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-pink-600">{loveScore}%</p>
            <p className={`text-lg font-semibold ${color}`}>{message}</p>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-1000"
              style={{ width: `${loveScore}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            This is for entertainment purposes only and should not be taken seriously!
          </p>
        </div>
      </Card>
    </div>
  )
}
