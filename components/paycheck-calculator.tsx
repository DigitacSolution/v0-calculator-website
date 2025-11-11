"use client"

import { useState } from "react"

export default function PaycheckCalculator() {
  const [grossPay, setGrossPay] = useState(3000)
  const [socialSecurity, setSocialSecurity] = useState(6.2)
  const [medicare, setMedicare] = useState(1.45)
  const [federalTax, setFederalTax] = useState(15)
  const [stateTax, setStateTax] = useState(5)
  const [other, setOther] = useState(0)

  const socialSecurityDeduction = (grossPay * socialSecurity) / 100
  const medicareDeduction = (grossPay * medicare) / 100
  const federalTaxDeduction = (grossPay * federalTax) / 100
  const stateTaxDeduction = (grossPay * stateTax) / 100
  const otherDeduction = (grossPay * other) / 100

  const totalDeductions =
    socialSecurityDeduction + medicareDeduction + federalTaxDeduction + stateTaxDeduction + otherDeduction
  const netPay = grossPay - totalDeductions

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Gross Pay: ${grossPay.toLocaleString()}
        </label>
        <input
          type="range"
          min="500"
          max="20000"
          step="100"
          value={grossPay}
          onChange={(e) => setGrossPay(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-foreground">Deductions (%)</h3>
        <div>
          <label className="text-xs text-muted-foreground">Social Security: {socialSecurity.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={socialSecurity}
            onChange={(e) => setSocialSecurity(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Medicare: {medicare.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={medicare}
            onChange={(e) => setMedicare(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Federal Tax: {federalTax.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            value={federalTax}
            onChange={(e) => setFederalTax(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">State Tax: {stateTax.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="15"
            step="0.1"
            value={stateTax}
            onChange={(e) => setStateTax(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Other Deductions: {other.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={other}
            onChange={(e) => setOther(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Deductions</p>
            <p className="text-2xl font-bold text-accent">
              ${totalDeductions.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="pt-3 border-t border-primary/20">
            <p className="text-sm text-muted-foreground mb-1">Net Pay (Take Home)</p>
            <p className="text-3xl font-bold text-primary">
              ${netPay.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
