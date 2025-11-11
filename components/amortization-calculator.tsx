"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function AmortizationCalculator() {
  const [principal, setPrincipal] = useState(200000)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)

  const monthlyRate = rate / 100 / 12
  const numberOfPayments = years * 12
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const schedule = []
  let balance = principal

  for (let i = 1; i <= Math.min(12, numberOfPayments); i++) {
    const interestPayment = balance * monthlyRate
    const principalPayment = monthlyPayment - interestPayment
    balance -= principalPayment

    schedule.push({
      month: i,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: Math.max(0, balance),
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Loan Amount: ${principal.toLocaleString()}</label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="5000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Loan Term: {years} years</label>
          <input
            type="range"
            min="1"
            max="40"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Payment</p>
            <p className="text-3xl font-bold text-foreground">${monthlyPayment.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Interest Paid</p>
            <p className="text-3xl font-bold text-foreground">
              ${(monthlyPayment * numberOfPayments - principal).toFixed(2)}
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="font-semibold mb-4">Amortization Schedule (First 12 Months)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Month</th>
                <th className="text-right py-2">Payment</th>
                <th className="text-right py-2">Principal</th>
                <th className="text-right py-2">Interest</th>
                <th className="text-right py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month} className="border-b">
                  <td className="py-2">{row.month}</td>
                  <td className="text-right">${row.payment.toFixed(2)}</td>
                  <td className="text-right">${row.principal.toFixed(2)}</td>
                  <td className="text-right">${row.interest.toFixed(2)}</td>
                  <td className="text-right">${row.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
