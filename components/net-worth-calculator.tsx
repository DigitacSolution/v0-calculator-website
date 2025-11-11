"use client"

import { useState } from "react"

export default function NetWorthCalculator() {
  const [cash, setCash] = useState(5000)
  const [investments, setInvestments] = useState(50000)
  const [propertyValue, setPropertyValue] = useState(300000)
  const [vehicles, setVehicles] = useState(30000)
  const [creditCardDebt, setCreditCardDebt] = useState(5000)
  const [mortgageDebt, setMortgageDebt] = useState(200000)
  const [studentLoans, setStudentLoans] = useState(20000)
  const [otherDebts, setOtherDebts] = useState(0)

  const totalAssets = cash + investments + propertyValue + vehicles
  const totalLiabilities = creditCardDebt + mortgageDebt + studentLoans + otherDebts
  const netWorth = totalAssets - totalLiabilities

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-4">Assets</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-muted-foreground">Cash & Savings: ${cash.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={cash}
              onChange={(e) => setCash(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Investments: ${investments.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={investments}
              onChange={(e) => setInvestments(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Property Value: ${propertyValue.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Vehicles: ${vehicles.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={vehicles}
              onChange={(e) => setVehicles(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Liabilities</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-muted-foreground">
              Credit Card Debt: ${creditCardDebt.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={creditCardDebt}
              onChange={(e) => setCreditCardDebt(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Mortgage: ${mortgageDebt.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="500000"
              step="10000"
              value={mortgageDebt}
              onChange={(e) => setMortgageDebt(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Student Loans: ${studentLoans.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={studentLoans}
              onChange={(e) => setStudentLoans(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Other Debts: ${otherDebts.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={otherDebts}
              onChange={(e) => setOtherDebts(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Assets</p>
            <p className="text-xl font-bold text-accent">
              ${totalAssets.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Liabilities</p>
            <p className="text-xl font-bold text-accent">
              ${totalLiabilities.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="pt-3 border-t border-primary/20">
            <p className="text-sm text-muted-foreground mb-1">Net Worth</p>
            <p className={`text-3xl font-bold ${netWorth >= 0 ? "text-primary" : "text-red-500"}`}>
              ${netWorth.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
