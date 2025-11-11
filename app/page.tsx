"use client"

import { useState } from "react"
import { Calculator, TrendingUp, CreditCard, Percent, Heart, Sigma, Zap, ArrowLeft, Search, X } from "lucide-react"
import Header from "@/components/header"
import BasicCalculator from "@/components/basic-calculator"
import UnitConverter from "@/components/unit-converter"
import LoanCalculator from "@/components/loan-calculator"
import MortgageCalculator from "@/components/mortgage-calculator"
import AutoLoanCalculator from "@/components/auto-loan-calculator"
import SimpleInterestCalculator from "@/components/simple-interest-calculator"
import CompoundInterestCalculator from "@/components/compound-interest-calculator"
import InvestmentCalculator from "@/components/investment-calculator"
import SavingsCalculator from "@/components/savings-calculator"
import RetirementCalculator from "@/components/retirement-calculator"
import DividendCalculator from "@/components/dividend-calculator"
import CreditCardPayoffCalculator from "@/components/credit-card-payoff-calculator"
import DebtPayoffCalculator from "@/components/debt-payoff-calculator"
import StudentLoanCalculator from "@/components/student-loan-calculator"
import BadCreditLoanCalculator from "@/components/bad-credit-loan-calculator"
import IncomeTaxCalculator from "@/components/income-tax-calculator"
import HourlyToSalaryCalculator from "@/components/hourly-to-salary-calculator"
import PaycheckCalculator from "@/components/paycheck-calculator"
import NetWorthCalculator from "@/components/net-worth-calculator"
import BMICalculator from "@/components/bmi-calculator"
import BodyFatCalculator from "@/components/body-fat-calculator"
import IdealWeightCalculator from "@/components/ideal-weight-calculator"
import LeanBodyMassCalculator from "@/components/lean-body-mass-calculator"
import BodySurfaceAreaCalculator from "@/components/body-surface-area-calculator"
import BMRCalculator from "@/components/bmr-calculator"
import CalorieCalculator from "@/components/calorie-calculator"
import TDEECalculator from "@/components/tdee-calculator"
import ProteinCalculator from "@/components/protein-calculator"
import MacroCalculator from "@/components/macro-calculator"
import OneRepMaxCalculator from "@/components/one-rep-max-calculator"
import TargetHeartRateCalculator from "@/components/target-heart-rate-calculator"
import PaceCalculator from "@/components/pace-calculator"
import CaloriesBurnedCalculator from "@/components/calories-burned-calculator"
import FatIntakeCalculator from "@/components/fat-intake-calculator"
import PregnancyCalculator from "@/components/pregnancy-calculator"
import OvulationCalculator from "@/components/ovulation-calculator"
import PeriodCalculator from "@/components/period-calculator"
import DueDateCalculator from "@/components/due-date-calculator"
import PregnancyWeightGainCalculator from "@/components/pregnancy-weight-gain-calculator"
import ScientificCalculator from "@/components/scientific-calculator"
import PercentageCalculator from "@/components/percentage-calculator"
import FractionCalculator from "@/components/fraction-calculator"
import AverageCalculator from "@/components/average-calculator"
import ExponentCalculator from "@/components/exponent-calculator"
import TriangleCalculator from "@/components/triangle-calculator"
import CircleCalculator from "@/components/circle-calculator"
import VolumeCalculator from "@/components/volume-calculator"
import PythagoreanCalculator from "@/components/pythagorean-calculator"
import RightTriangleCalculator from "@/components/right-triangle-calculator"
import StandardDeviationCalculator from "@/components/standard-deviation-calculator"
import ProbabilityCalculator from "@/components/probability-calculator"
import ZScoreCalculator from "@/components/z-score-calculator"
import PermutationCalculator from "@/components/permutation-calculator"
import LogCalculator from "@/components/log-calculator"
import RootCalculator from "@/components/root-calculator"
import BinaryCalculator from "@/components/binary-calculator"
import DistanceCalculator from "@/components/distance-calculator"
import AgeCalculator from "@/components/age-calculator"
import TipCalculator from "@/components/tip-calculator"
import ConversionCalculator from "@/components/conversion-calculator"
import FuelCostCalculator from "@/components/fuel-cost-calculator"
import SpeedCalculator from "@/components/speed-calculator"
import GPACalculator from "@/components/gpa-calculator"
import PasswordGenerator from "@/components/password-generator"
import DiceRoller from "@/components/dice-roller"
import DateCalculator from "@/components/date-calculator"
import TimeCalculator from "@/components/time-calculator"
import HoursCalculator from "@/components/hours-calculator"
import TimeZoneCalculator from "@/components/time-zone-calculator"
import DayCounter from "@/components/day-counter"
import TimeDurationCalculator from "@/components/time-duration-calculator"
import SleepCalculator from "@/components/sleep-calculator"
import SquareFootageCalculator from "@/components/square-footage-calculator"
import ConcreteCalculator from "@/components/concrete-calculator"
import RoofingCalculator from "@/components/roofing-calculator"
import TileCalculator from "@/components/tile-calculator"
import MulchCalculator from "@/components/mulch-calculator"
import GravelCalculator from "@/components/gravel-calculator"
import StairCalculator from "@/components/stair-calculator"
import DensityCalculator from "@/components/density-calculator"
import WindChillCalculator from "@/components/wind-chill-calculator"
import HeatIndexCalculator from "@/components/heat-index-calculator"
import DewPointCalculator from "@/components/dew-point-calculator"
import BTUCalculator from "@/components/btu-calculator"
import VoltageDropCalculator from "@/components/voltage-drop-calculator"
import GasMileageCalculator from "@/components/gas-mileage-calculator"
import HorsepowerCalculator from "@/components/horsepower-calculator"
import TireSizeCalculator from "@/components/tire-size-calculator"
import HeightCalculator from "@/components/height-calculator"
import BraSizeCalculator from "@/components/bra-size-calculator"
import ShoeSizeCalculator from "@/components/shoe-size-calculator"
import ResistorCalculator from "@/components/resistor-calculator"
import BandwidthCalculator from "@/components/bandwidth-calculator"
import IPSubnetCalculator from "@/components/ip-subnet-calculator"
import GDPCalculator from "@/components/gdp-calculator"
import GolfHandicapCalculator from "@/components/golf-handicap-calculator"
import GradeCalculator from "@/components/grade-calculator"
import MolarityCalculator from "@/components/molarity-calculator"
import MolecularWeightCalculator from "@/components/molecular-weight-calculator"
import RomanNumeralConverter from "@/components/roman-numeral-converter"
import OhmsLawCalculator from "@/components/ohms-law-calculator"
import ElectricityCalculator from "@/components/electricity-calculator"
import MileageCalculator from "@/components/mileage-calculator"
import AmortizationCalculator from "@/components/amortization-calculator"
import APRCalculator from "@/components/apr-calculator"
import PaymentCalculator from "@/components/payment-calculator"
import InterestRateCalculator from "@/components/interest-rate-calculator"
import DiscountCalculator from "@/components/discount-calculator"
import SalesTaxCalculator from "@/components/sales-tax-calculator"
import HouseAffordabilityCalculator from "@/components/house-affordability-calculator"
import CashBackCalculator from "@/components/cash-back-calculator"
import K401Calculator from "@/components/401k-calculator"
import CDCalculator from "@/components/cd-calculator"
import RothIRACalculator from "@/components/roth-ira-calculator"
import IRACalculator from "@/components/ira-calculator"
import AnnuityCalculator from "@/components/annuity-calculator"
import ROICalculator from "@/components/roi-calculator"
import RentCalculator from "@/components/rent-calculator"
import RentVsBuyCalculator from "@/components/rent-vs-buy-calculator"
import RefinanceCalculator from "@/components/refinance-calculator"
import BusinessLoanCalculator from "@/components/business-loan-calculator"
import DownPaymentCalculator from "@/components/down-payment-calculator"
import InflationCalculator from "@/components/inflation-calculator"
import CurrencyCalculator from "@/components/currency-calculator"
import MarriageTaxCalculator from "@/components/marriage-tax-calculator"
import SocialSecurityCalculator from "@/components/social-security-calculator"
import EstateTaxCalculator from "@/components/estate-tax-calculator"
import VATCalculator from "@/components/vat-calculator"
import PensionCalculator from "@/components/pension-calculator"
import CollegeCostCalculator from "@/components/college-cost-calculator"
import BondCalculator from "@/components/bond-calculator"
import RMDCalculator from "@/components/rmd-calculator"
import DebtToIncomeCalculator from "@/components/debt-to-income-calculator"
import QuadraticFormulaCalculator from "@/components/quadratic-formula-calculator"
import SlopeCalculator from "@/components/slope-calculator"
import AreaCalculator from "@/components/area-calculator"
import RatioCalculator from "@/components/ratio-calculator"
import SurfaceAreaCalculator from "@/components/surface-area-calculator"
import TimeCardCalculator from "@/components/time-card-calculator"
import LoveCalculator from "@/components/love-calculator"
import MassCalculator from "@/components/mass-calculator"
import WeightCalculator from "@/components/weight-calculator"
import DayOfWeekCalculator from "@/components/day-of-week-calculator"
import AutoLeaseCalculator from "@/components/auto-lease-calculator"
import DepreciationCalculator from "@/components/depreciation-calculator"
import AverageReturnCalculator from "@/components/average-return-calculator"
import MarginCalculator from "@/components/margin-calculator"
import LeaseCalculator from "@/components/lease-calculator"
import BudgetCalculator from "@/components/budget-calculator"
import NumberSequenceCalculator from "@/components/number-sequence-calculator"
import PercentErrorCalculator from "@/components/percent-error-calculator"
import HalfLifeCalculator from "@/components/half-life-calculator"
import HexCalculator from "@/components/hex-calculator"
import MeanMedianModeCalculator from "@/components/mean-median-mode-calculator"
import RandomNumberGenerator from "@/components/random-number-generator"
import ArmyBodyFatCalculator from "@/components/army-body-fat-calculator"
import CarbohydrateCalculator from "@/components/carbohydrate-calculator"
import BACCalculator from "@/components/bac-calculator"
import PersonalLoanCalculator from "@/components/personal-loan-calculator"
import BoatLoanCalculator from "@/components/boat-loan-calculator"
import RentalPropertyCalculator from "@/components/rental-property-calculator"
import IRRCalculator from "@/components/irr-calculator"
import FHALoanCalculator from "@/components/fha-loan-calculator"
import VAMortgageCalculator from "@/components/va-mortgage-calculator"
import PaybackPeriodCalculator from "@/components/payback-period-calculator"

import SampleSizeCalculator from "@/components/sample-size-calculator"
import LCMCalculator from "@/components/lcm-calculator"
import GCFCalculator from "@/components/gcf-calculator"
import PrimeFactorizationCalculator from "@/components/prime-factorization-calculator"

import EngineHorsepowerCalculator from "@/components/engine-horsepower-calculator"
import ConceptionCalculator from "@/components/conception-calculator"
import GFRCalculator from "@/components/gfr-calculator"

import PresentValueCalculator from "@/components/present-value-calculator"
import FutureValueCalculator from "@/components/future-value-calculator"
import CommissionCalculator from "@/components/commission-calculator"
import TakeHomePaycheckCalculator from "@/components/take-home-paycheck-calculator"
import FactorCalculator from "@/components/factor-calculator"
import RoundingCalculator from "@/components/rounding-calculator"
import LongDivisionCalculator from "@/components/long-division-calculator"
import PValueCalculator from "@/components/p-value-calculator"
import FinanceCalculator from "@/components/finance-calculator"
import RepaymentCalculator from "@/components/repayment-calculator"
import DebtConsolidationCalculator from "@/components/debt-consolidation-calculator"

// New imports
import MortgagePayoffCalculator from "@/components/mortgage-payoff-calculator"
import PercentOffCalculator from "@/components/percent-off-calculator"
import HealthyWeightCalculator from "@/components/healthy-weight-calculator"
import BodyTypeCalculator from "@/components/body-type-calculator"
import MatrixCalculator from "@/components/matrix-calculator"
import ScientificNotationCalculator from "@/components/scientific-notation-calculator"
import BigNumberCalculator from "@/components/big-number-calculator"
import CommonFactorCalculator from "@/components/common-factor-calculator"
import OverweightCalculator from "@/components/overweight-calculator"
import AnorexicBMICalculator from "@/components/anorexic-bmi-calculator"
import WeightWatcherPointsCalculator from "@/components/weight-watcher-points-calculator"

import AdSenseResponsiveAd from "@/components/adsense-responsive-ad"

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("basic")
  const [activeTab, setActiveTab] = useState("basic")
  const [view, setView] = useState<"grid" | "calculator">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      id: "basic",
      name: "Basic",
      icon: Calculator,
      calculators: [
        {
          id: "basic",
          name: "Basic Calculator",
          description: "Simple arithmetic calculations",
          component: BasicCalculator,
        },
        {
          id: "converter",
          name: "Unit Converter",
          description: "Convert between units",
          component: UnitConverter,
        },
      ],
    },
    {
      id: "loans",
      name: "Loans & Mortgages",
      icon: Calculator,
      calculators: [
        {
          id: "loan",
          name: "Loan Calculator",
          description: "Calculate loan payments",
          component: LoanCalculator,
        },
        {
          id: "mortgage",
          name: "Mortgage Calculator",
          description: "Home loan calculations",
          component: MortgageCalculator,
        },
        {
          id: "auto",
          name: "Auto Loan Calculator",
          description: "Car loan payments",
          component: AutoLoanCalculator,
        },
        {
          id: "student",
          name: "Student Loan Calculator",
          description: "Education loan repayment",
          component: StudentLoanCalculator,
        },
        {
          id: "amortization",
          name: "Amortization Calculator",
          description: "Loan amortization schedule",
          component: AmortizationCalculator,
        },
        {
          id: "apr",
          name: "APR Calculator",
          description: "Annual percentage rate",
          component: APRCalculator,
        },
        {
          id: "payment",
          name: "Payment Calculator",
          description: "Calculate periodic payments",
          component: PaymentCalculator,
        },
        {
          id: "interest-rate",
          name: "Interest Rate Calculator",
          description: "Calculate interest rates",
          component: InterestRateCalculator,
        },
        {
          id: "discount",
          name: "Discount Calculator",
          description: "Calculate discounts and sales",
          component: DiscountCalculator,
        },
        {
          id: "sales-tax",
          name: "Sales Tax Calculator",
          description: "Calculate sales tax",
          component: SalesTaxCalculator,
        },
        {
          id: "house-affordability",
          name: "House Affordability",
          description: "Calculate max home price",
          component: HouseAffordabilityCalculator,
        },
        {
          id: "cash-back",
          name: "Cash Back Calculator",
          description: "Evaluate cash back offers",
          component: CashBackCalculator,
        },
        {
          id: "auto-lease",
          name: "Auto Lease Calculator",
          description: "Calculate vehicle lease payments",
          component: AutoLeaseCalculator,
        },
        {
          id: "lease",
          name: "Lease Calculator",
          description: "General lease payment calculator",
          component: LeaseCalculator,
        },
        {
          id: "personal-loan",
          name: "Personal Loan Calculator",
          description: "Calculate personal loan payments",
          component: PersonalLoanCalculator,
        },
        {
          id: "boat-loan",
          name: "Boat Loan Calculator",
          description: "Marine vessel financing",
          component: BoatLoanCalculator,
        },
        {
          id: "fha-loan",
          name: "FHA Loan Calculator",
          description: "FHA mortgage with MIP",
          component: FHALoanCalculator,
        },
        {
          id: "va-mortgage",
          name: "VA Mortgage Calculator",
          description: "VA home loan calculator",
          component: VAMortgageCalculator,
        },
        {
          id: "finance",
          name: "Finance Calculator",
          description: "Multi-purpose financial calculator",
          component: FinanceCalculator,
        },
        {
          id: "repayment",
          name: "Repayment Calculator",
          description: "General loan repayment planning",
          component: RepaymentCalculator,
        },
        {
          id: "mortgage-payoff",
          name: "Mortgage Payoff Calculator",
          description: "Calculate early mortgage payoff",
          component: MortgagePayoffCalculator,
        },
      ],
    },
    {
      id: "investments",
      name: "Investments & Savings",
      icon: TrendingUp,
      calculators: [
        {
          id: "investment",
          name: "Investment Calculator",
          description: "Investment growth projections",
          component: InvestmentCalculator,
        },
        {
          id: "savings",
          name: "Savings Calculator",
          description: "Savings growth with interest",
          component: SavingsCalculator,
        },
        {
          id: "compound",
          name: "Compound Interest",
          description: "Compound interest calculations",
          component: CompoundInterestCalculator,
        },
        {
          id: "simple",
          name: "Simple Interest",
          description: "Simple interest calculations",
          component: SimpleInterestCalculator,
        },
        {
          id: "retirement",
          name: "Retirement Calculator",
          description: "Retirement savings planning",
          component: RetirementCalculator,
        },
        {
          id: "dividend",
          name: "Dividend Calculator",
          description: "Dividend income projections",
          component: DividendCalculator,
        },
        {
          id: "401k",
          name: "401K Calculator",
          description: "401K retirement projections",
          component: K401Calculator,
        },
        {
          id: "cd",
          name: "CD Calculator",
          description: "Certificate of Deposit returns",
          component: CDCalculator,
        },
        {
          id: "roth-ira",
          name: "Roth IRA Calculator",
          description: "Roth IRA growth projections",
          component: RothIRACalculator,
        },
        {
          id: "ira",
          name: "IRA Calculator",
          description: "Traditional IRA planning",
          component: IRACalculator,
        },
        {
          id: "annuity",
          name: "Annuity Calculator",
          description: "Annuity payout calculations",
          component: AnnuityCalculator,
        },
        {
          id: "roi",
          name: "ROI Calculator",
          description: "Return on investment analysis",
          component: ROICalculator,
        },
        {
          id: "pension",
          name: "Pension Calculator",
          description: "Retirement pension projections",
          component: PensionCalculator,
        },
        {
          id: "college-cost",
          name: "College Cost Calculator",
          description: "Calculate total college expenses",
          component: CollegeCostCalculator,
        },
        {
          id: "bond",
          name: "Bond Calculator",
          description: "Bond valuation and yield",
          component: BondCalculator,
        },
        {
          id: "rmd",
          name: "RMD Calculator",
          description: "Required minimum distribution",
          component: RMDCalculator,
        },
        {
          id: "average-return",
          name: "Average Return Calculator",
          description: "Calculate investment returns and CAGR",
          component: AverageReturnCalculator,
        },
        {
          id: "depreciation",
          name: "Depreciation Calculator",
          description: "Asset depreciation schedules",
          component: DepreciationCalculator,
        },
        {
          id: "margin",
          name: "Margin Calculator",
          description: "Calculate profit margins and markup",
          component: MarginCalculator,
        },
        {
          id: "budget",
          name: "Budget Calculator",
          description: "Monthly budget planning",
          component: BudgetCalculator,
        },
        {
          id: "rental-property",
          name: "Rental Property Calculator",
          description: "Investment property analysis",
          component: RentalPropertyCalculator,
        },
        {
          id: "irr",
          name: "IRR Calculator",
          description: "Internal rate of return",
          component: IRRCalculator,
        },
        {
          id: "payback-period",
          name: "Payback Period Calculator",
          description: "Investment payback analysis",
          component: PaybackPeriodCalculator,
        },
        {
          id: "present-value",
          name: "Present Value Calculator",
          description: "Calculate present value of future money",
          component: PresentValueCalculator,
        },
        {
          id: "future-value",
          name: "Future Value Calculator",
          description: "Calculate future value of investments",
          component: FutureValueCalculator,
        },
        {
          id: "commission",
          name: "Commission Calculator",
          description: "Calculate sales commission earnings",
          component: CommissionCalculator,
        },
        {
          id: "percent-off",
          name: "Percent Off Calculator",
          description: "Calculate discounts and sale prices",
          component: PercentOffCalculator,
        },
      ],
    },
    {
      id: "debt",
      name: "Debt Management",
      icon: CreditCard,
      calculators: [
        {
          id: "credit-card",
          name: "Credit Card Payoff",
          description: "Credit card debt payoff timeline",
          component: CreditCardPayoffCalculator,
        },
        {
          id: "debt-payoff",
          name: "Debt Payoff Calculator",
          description: "General debt payoff planning",
          component: DebtPayoffCalculator,
        },
        {
          id: "bad-credit",
          name: "Bad Credit Loan",
          description: "Loans with higher interest rates",
          component: BadCreditLoanCalculator,
        },
        {
          id: "debt-to-income",
          name: "Debt-to-Income Ratio",
          description: "Calculate DTI for loan approval",
          component: DebtToIncomeCalculator,
        },
        {
          id: "debt-consolidation",
          name: "Debt Consolidation Calculator",
          description: "Compare debt consolidation savings",
          component: DebtConsolidationCalculator,
        },
      ],
    },
    {
      id: "tax",
      name: "Taxes & Income",
      icon: Percent,
      calculators: [
        {
          id: "income-tax",
          name: "Income Tax Calculator",
          description: "Federal income tax estimation",
          component: IncomeTaxCalculator,
        },
        {
          id: "hourly",
          name: "Hourly to Salary",
          description: "Convert hourly wage to salary",
          component: HourlyToSalaryCalculator,
        },
        {
          id: "paycheck",
          name: "Paycheck Calculator",
          description: "Calculate take-home pay",
          component: PaycheckCalculator,
        },
        {
          id: "net-worth",
          name: "Net Worth Calculator",
          description: "Calculate your total net worth",
          component: NetWorthCalculator,
        },
        {
          id: "inflation",
          name: "Inflation Calculator",
          description: "Calculate inflation impact",
          component: InflationCalculator,
        },
        {
          id: "currency",
          name: "Currency Calculator",
          description: "Foreign exchange conversion",
          component: CurrencyCalculator,
        },
        {
          id: "marriage-tax",
          name: "Marriage Tax Calculator",
          description: "Marriage tax penalty/benefit",
          component: MarriageTaxCalculator,
        },
        {
          id: "social-security",
          name: "Social Security Calculator",
          description: "Estimate Social Security benefits",
          component: SocialSecurityCalculator,
        },
        {
          id: "estate-tax",
          name: "Estate Tax Calculator",
          description: "Calculate estate tax liability",
          component: EstateTaxCalculator,
        },
        {
          id: "vat",
          name: "VAT Calculator",
          description: "Value added tax calculation",
          component: VATCalculator,
        },
        {
          id: "take-home-paycheck",
          name: "Take-Home Paycheck",
          description: "Detailed paycheck deductions",
          component: TakeHomePaycheckCalculator,
        },
      ],
    },
    {
      id: "fitness",
      name: "Fitness & Health",
      icon: Heart,
      calculators: [
        {
          id: "bmi",
          name: "BMI Calculator",
          description: "Calculate Body Mass Index",
          component: BMICalculator,
        },
        {
          id: "body-fat",
          name: "Body Fat Calculator",
          description: "Estimate body fat percentage",
          component: BodyFatCalculator,
        },
        {
          id: "ideal-weight",
          name: "Ideal Weight Calculator",
          description: "Calculate healthy weight range",
          component: IdealWeightCalculator,
        },
        {
          id: "lean-body-mass",
          name: "Lean Body Mass",
          description: "Calculate muscle vs fat mass",
          component: LeanBodyMassCalculator,
        },
        {
          id: "body-surface-area",
          name: "Body Surface Area",
          description: "Calculate BSA for medical use",
          component: BodySurfaceAreaCalculator,
        },
        {
          id: "bmr",
          name: "BMR Calculator",
          description: "Basal metabolic rate calculation",
          component: BMRCalculator,
        },
        {
          id: "calorie",
          name: "Calorie Calculator",
          description: "Daily calorie goals by objective",
          component: CalorieCalculator,
        },
        {
          id: "tdee",
          name: "TDEE Calculator",
          description: "Total daily energy expenditure",
          component: TDEECalculator,
        },
        {
          id: "protein",
          name: "Protein Calculator",
          description: "Daily protein intake needs",
          component: ProteinCalculator,
        },
        {
          id: "macro",
          name: "Macro Calculator",
          description: "Macronutrient distribution",
          component: MacroCalculator,
        },
        {
          id: "one-rep-max",
          name: "One Rep Max",
          description: "Estimate maximum lift weight",
          component: OneRepMaxCalculator,
        },
        {
          id: "target-hr",
          name: "Target Heart Rate",
          description: "Exercise heart rate zones",
          component: TargetHeartRateCalculator,
        },
        {
          id: "pace",
          name: "Pace Calculator",
          description: "Running pace and speed",
          component: PaceCalculator,
        },
        {
          id: "calories-burned",
          name: "Calories Burned",
          description: "Calories burned by activity",
          component: CaloriesBurnedCalculator,
        },
        {
          id: "fat-intake",
          name: "Fat Intake Calculator",
          description: "Daily fat intake goals",
          component: FatIntakeCalculator,
        },
        {
          id: "pregnancy",
          name: "Pregnancy Calculator",
          description: "Estimate due date",
          component: PregnancyCalculator,
        },
        {
          id: "ovulation",
          name: "Ovulation Calculator",
          description: "Predict ovulation date",
          component: OvulationCalculator,
        },
        {
          id: "period",
          name: "Period Calculator",
          description: "Track period cycle",
          component: PeriodCalculator,
        },
        {
          id: "due-date",
          name: "Due Date Calculator",
          description: "Calculate pregnancy due date",
          component: DueDateCalculator,
        },
        {
          id: "pregnancy-weight",
          name: "Pregnancy Weight Gain",
          description: "Track healthy weight gain",
          component: PregnancyWeightGainCalculator,
        },
        {
          id: "healthy-weight",
          name: "Healthy Weight Calculator",
          description: "Calculate ideal weight range",
          component: HealthyWeightCalculator,
        },
        {
          id: "body-type",
          name: "Body Type Calculator",
          description: "Determine your body shape and type",
          component: BodyTypeCalculator,
        },
        {
          id: "overweight",
          name: "Overweight Calculator",
          description: "Assess overweight status and health risks",
          component: OverweightCalculator,
        },
        {
          id: "anorexic-bmi",
          name: "Anorexic BMI Calculator",
          description: "Screen for underweight conditions",
          component: AnorexicBMICalculator,
        },
        {
          id: "weight-watcher",
          name: "Weight Watcher Points",
          description: "Calculate daily points budget",
          component: WeightWatcherPointsCalculator,
        },
        {
          id: "army-body-fat",
          name: "Army Body Fat Calculator",
          description: "Military body fat standards",
          component: ArmyBodyFatCalculator,
        },
        {
          id: "carbohydrate",
          name: "Carbohydrate Calculator",
          description: "Daily carb intake needs",
          component: CarbohydrateCalculator,
        },
        {
          id: "bac",
          name: "BAC Calculator",
          description: "Blood alcohol content estimator",
          component: BACCalculator,
        },
      ],
    },
    {
      id: "math",
      name: "Math",
      icon: Sigma,
      calculators: [
        {
          id: "scientific",
          name: "Scientific Calculator",
          description: "Advanced scientific functions",
          component: ScientificCalculator,
        },
        {
          id: "percentage",
          name: "Percentage Calculator",
          description: "Percentage calculations",
          component: PercentageCalculator,
        },
        {
          id: "fraction",
          name: "Fraction Calculator",
          description: "Fraction arithmetic",
          component: FractionCalculator,
        },
        {
          id: "average",
          name: "Average Calculator",
          description: "Mean, median, mode calculations",
          component: AverageCalculator,
        },
        {
          id: "exponent",
          name: "Exponent Calculator",
          description: "Power and exponent calculations",
          component: ExponentCalculator,
        },
        {
          id: "triangle",
          name: "Triangle Calculator",
          description: "Triangle area and properties",
          component: TriangleCalculator,
        },
        {
          id: "circle",
          name: "Circle Calculator",
          description: "Circle area and circumference",
          component: CircleCalculator,
        },
        {
          id: "volume",
          name: "Volume Calculator",
          description: "3D shape volume calculations",
          component: VolumeCalculator,
        },
        {
          id: "pythagorean",
          name: "Pythagorean Theorem",
          description: "Right triangle calculations",
          component: PythagoreanCalculator,
        },
        {
          id: "right-triangle",
          name: "Right Triangle Calculator",
          description: "Complete right triangle analysis",
          component: RightTriangleCalculator,
        },
        {
          id: "standard-dev",
          name: "Standard Deviation",
          description: "Statistical deviation analysis",
          component: StandardDeviationCalculator,
        },
        {
          id: "probability",
          name: "Probability Calculator",
          description: "Basic probability calculations",
          component: ProbabilityCalculator,
        },
        {
          id: "z-score",
          name: "Z-Score Calculator",
          description: "Statistical z-score analysis",
          component: ZScoreCalculator,
        },
        {
          id: "permutation",
          name: "Permutation Calculator",
          description: "Permutation and combination",
          component: PermutationCalculator,
        },
        {
          id: "log",
          name: "Log Calculator",
          description: "Logarithm calculations",
          component: LogCalculator,
        },
        {
          id: "root",
          name: "Root Calculator",
          description: "Square and nth root calculations",
          component: RootCalculator,
        },
        {
          id: "binary",
          name: "Binary Calculator",
          description: "Binary, decimal, hex conversion",
          component: BinaryCalculator,
        },
        {
          id: "distance",
          name: "Distance Calculator",
          description: "Coordinate distance and slope",
          component: DistanceCalculator,
        },
        {
          id: "quadratic",
          name: "Quadratic Formula",
          description: "Solve quadratic equations",
          component: QuadraticFormulaCalculator,
        },
        {
          id: "slope",
          name: "Slope Calculator",
          description: "Calculate slope and line equation",
          component: SlopeCalculator,
        },
        {
          id: "area",
          name: "Area Calculator",
          description: "Calculate area of shapes",
          component: AreaCalculator,
        },
        {
          id: "ratio",
          name: "Ratio Calculator",
          description: "Simplify ratios and proportions",
          component: RatioCalculator,
        },
        {
          id: "surface-area",
          name: "Surface Area Calculator",
          description: "3D shape surface area",
          component: SurfaceAreaCalculator,
        },
        {
          id: "number-sequence",
          name: "Number Sequence Calculator",
          description: "Find patterns in number sequences",
          component: NumberSequenceCalculator,
        },
        {
          id: "percent-error",
          name: "Percent Error Calculator",
          description: "Calculate experimental error",
          component: PercentErrorCalculator,
        },
        {
          id: "half-life",
          name: "Half-Life Calculator",
          description: "Radioactive decay calculations",
          component: HalfLifeCalculator,
        },
        {
          id: "hex",
          name: "Hex Calculator",
          description: "Hex, binary, decimal conversion",
          component: HexCalculator,
        },
        {
          id: "mean-median-mode",
          name: "Mean Median Mode",
          description: "Statistical measures calculator",
          component: MeanMedianModeCalculator,
        },
        {
          id: "random-number",
          name: "Random Number Generator",
          description: "Generate random numbers",
          component: RandomNumberGenerator,
        },
        {
          id: "sample-size",
          name: "Sample Size Calculator",
          description: "Statistical sample size",
          component: SampleSizeCalculator,
        },
        {
          id: "lcm",
          name: "LCM Calculator",
          description: "Least common multiple",
          component: LCMCalculator,
        },
        {
          id: "gcf",
          name: "GCF Calculator",
          description: "Greatest common factor",
          component: GCFCalculator,
        },
        {
          id: "prime-factorization",
          name: "Prime Factorization",
          description: "Find prime factors",
          component: PrimeFactorizationCalculator,
        },
        {
          id: "factor",
          name: "Factor Calculator",
          description: "Find all factors of a number",
          component: FactorCalculator,
        },
        {
          id: "rounding",
          name: "Rounding Calculator",
          description: "Round numbers multiple ways",
          component: RoundingCalculator,
        },
        {
          id: "long-division",
          name: "Long Division Calculator",
          description: "Solve division problems step by step",
          component: LongDivisionCalculator,
        },
        {
          id: "p-value",
          name: "P-Value Calculator",
          description: "Calculate statistical p-values",
          component: PValueCalculator,
        },
        {
          id: "matrix",
          name: "Matrix Calculator",
          description: "2x2 matrix operations",
          component: MatrixCalculator,
        },
        {
          id: "scientific-notation",
          name: "Scientific Notation",
          description: "Convert to/from scientific notation",
          component: ScientificNotationCalculator,
        },
        {
          id: "big-number",
          name: "Big Number Calculator",
          description: "Calculate with extremely large numbers",
          component: BigNumberCalculator,
        },
        {
          id: "common-factor",
          name: "Common Factor Calculator",
          description: "Find common factors and GCF",
          component: CommonFactorCalculator,
        },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: Zap,
      calculators: [
        {
          id: "rent",
          name: "Rent Calculator",
          description: "Rent projection with increases",
          component: RentCalculator,
        },
        {
          id: "rent-vs-buy",
          name: "Rent vs Buy",
          description: "Compare renting and buying",
          component: RentVsBuyCalculator,
        },
        {
          id: "refinance",
          name: "Refinance Calculator",
          description: "Refinancing savings analysis",
          component: RefinanceCalculator,
        },
        {
          id: "business-loan",
          name: "Business Loan Calculator",
          description: "Business loan payments",
          component: BusinessLoanCalculator,
        },
        {
          id: "down-payment",
          name: "Down Payment Calculator",
          description: "Down payment requirements",
          component: DownPaymentCalculator,
        },
        {
          id: "age",
          name: "Age Calculator",
          description: "Calculate age from birthdate",
          component: AgeCalculator,
        },
        {
          id: "tip",
          name: "Tip Calculator",
          description: "Calculate tips and split bills",
          component: TipCalculator,
        },
        {
          id: "conversion",
          name: "Conversion Calculator",
          description: "General unit conversions",
          component: ConversionCalculator,
        },
        {
          id: "fuel-cost",
          name: "Fuel Cost Calculator",
          description: "Calculate fuel expenses",
          component: FuelCostCalculator,
        },
        {
          id: "speed",
          name: "Speed Calculator",
          description: "Speed, distance, time calculations",
          component: SpeedCalculator,
        },
        {
          id: "gpa",
          name: "GPA Calculator",
          description: "Calculate grade point average",
          component: GPACalculator,
        },
        {
          id: "password",
          name: "Password Generator",
          description: "Generate secure passwords",
          component: PasswordGenerator,
        },
        {
          id: "dice",
          name: "Dice Roller",
          description: "Roll virtual dice",
          component: DiceRoller,
        },
        {
          id: "date",
          name: "Date Calculator",
          description: "Calculate date differences",
          component: DateCalculator,
        },
        {
          id: "time",
          name: "Time Calculator",
          description: "Add and subtract time",
          component: TimeCalculator,
        },
        {
          id: "hours",
          name: "Hours Calculator",
          description: "Calculate work hours",
          component: HoursCalculator,
        },
        {
          id: "timezone",
          name: "Time Zone Calculator",
          description: "Convert between time zones",
          component: TimeZoneCalculator,
        },
        {
          id: "day-counter",
          name: "Day Counter",
          description: "Count days between dates",
          component: DayCounter,
        },
        {
          id: "duration",
          name: "Time Duration Calculator",
          description: "Calculate time duration",
          component: TimeDurationCalculator,
        },
        {
          id: "sleep",
          name: "Sleep Calculator",
          description: "Optimal sleep timing",
          component: SleepCalculator,
        },
        {
          id: "square-footage",
          name: "Square Footage Calculator",
          description: "Calculate area in square feet",
          component: SquareFootageCalculator,
        },
        {
          id: "concrete",
          name: "Concrete Calculator",
          description: "Calculate concrete needed",
          component: ConcreteCalculator,
        },
        {
          id: "roofing",
          name: "Roofing Calculator",
          description: "Calculate roofing materials",
          component: RoofingCalculator,
        },
        {
          id: "tile",
          name: "Tile Calculator",
          description: "Calculate tile needed",
          component: TileCalculator,
        },
        {
          id: "mulch",
          name: "Mulch Calculator",
          description: "Calculate mulch needed",
          component: MulchCalculator,
        },
        {
          id: "gravel",
          name: "Gravel Calculator",
          description: "Calculate gravel needed",
          component: GravelCalculator,
        },
        {
          id: "stair",
          name: "Stair Calculator",
          description: "Calculate stair dimensions",
          component: StairCalculator,
        },
        {
          id: "density",
          name: "Density Calculator",
          description: "Calculate mass and density",
          component: DensityCalculator,
        },
        {
          id: "wind-chill",
          name: "Wind Chill Calculator",
          description: "Calculate wind chill factor",
          component: WindChillCalculator,
        },
        {
          id: "heat-index",
          name: "Heat Index Calculator",
          description: "Calculate heat index",
          component: HeatIndexCalculator,
        },
        {
          id: "dew-point",
          name: "Dew Point Calculator",
          description: "Calculate dew point",
          component: DewPointCalculator,
        },
        {
          id: "btu",
          name: "BTU Calculator",
          description: "Calculate BTU requirements",
          component: BTUCalculator,
        },
        {
          id: "voltage",
          name: "Voltage Drop Calculator",
          description: "Calculate voltage drop",
          component: VoltageDropCalculator,
        },
        {
          id: "gas-mileage",
          name: "Gas Mileage Calculator",
          description: "Calculate fuel efficiency",
          component: GasMileageCalculator,
        },
        {
          id: "horsepower",
          name: "Horsepower Calculator",
          description: "Calculate engine horsepower",
          component: HorsepowerCalculator,
        },
        {
          id: "tire-size",
          name: "Tire Size Calculator",
          description: "Tire size conversion",
          component: TireSizeCalculator,
        },
        {
          id: "height",
          name: "Height Calculator",
          description: "Height conversions",
          component: HeightCalculator,
        },
        {
          id: "bra-size",
          name: "Bra Size Calculator",
          description: "Calculate bra size",
          component: BraSizeCalculator,
        },
        {
          id: "shoe-size",
          name: "Shoe Size Converter",
          description: "Shoe size conversion",
          component: ShoeSizeCalculator,
        },
        {
          id: "resistor",
          name: "Resistor Calculator",
          description: "Calculate resistor values",
          component: ResistorCalculator,
        },
        {
          id: "bandwidth",
          name: "Bandwidth Calculator",
          description: "Calculate bandwidth requirements",
          component: BandwidthCalculator,
        },
        {
          id: "ip-subnet",
          name: "IP Subnet Calculator",
          description: "Calculate IP subnets",
          component: IPSubnetCalculator,
        },
        {
          id: "gdp",
          name: "GDP Calculator",
          description: "Calculate GDP",
          component: GDPCalculator,
        },
        {
          id: "golf-handicap",
          name: "Golf Handicap Calculator",
          description: "Calculate golf handicap",
          component: GolfHandicapCalculator,
        },
        {
          id: "grade",
          name: "Grade Calculator",
          description: "Calculate grades and GPA",
          component: GradeCalculator,
        },
        {
          id: "molarity",
          name: "Molarity Calculator",
          description: "Calculate molarity",
          component: MolarityCalculator,
        },
        {
          id: "molecular-weight",
          name: "Molecular Weight Calculator",
          description: "Calculate molecular weight",
          component: MolecularWeightCalculator,
        },
        {
          id: "roman-numeral",
          name: "Roman Numeral Converter",
          description: "Convert Roman numerals",
          component: RomanNumeralConverter,
        },
        {
          id: "ohms-law",
          name: "Ohms Law Calculator",
          description: "Calculate using Ohms Law",
          component: OhmsLawCalculator,
        },
        {
          id: "electricity",
          name: "Electricity Calculator",
          description: "Electricity calculations",
          component: ElectricityCalculator,
        },
        {
          id: "mileage",
          name: "Mileage Calculator",
          description: "Calculate travel distance",
          component: MileageCalculator,
        },
        {
          id: "time-card",
          name: "Time Card Calculator",
          description: "Track work hours and pay",
          component: TimeCardCalculator,
        },
        {
          id: "love",
          name: "Love Calculator",
          description: "Fun compatibility calculator",
          component: LoveCalculator,
        },
        {
          id: "mass",
          name: "Mass Calculator",
          description: "Calculate mass from density",
          component: MassCalculator,
        },
        {
          id: "weight",
          name: "Weight Calculator",
          description: "Convert weight units",
          component: WeightCalculator,
        },
        {
          id: "day-of-week",
          name: "Day of Week Calculator",
          description: "Find day for any date",
          component: DayOfWeekCalculator,
        },
        {
          id: "engine-horsepower",
          name: "Engine Horsepower Calculator",
          description: "Calculate engine power",
          component: EngineHorsepowerCalculator,
        },
        {
          id: "conception",
          name: "Conception Calculator",
          description: "Conception date estimation",
          component: ConceptionCalculator,
        },
        {
          id: "gfr",
          name: "GFR Calculator",
          description: "Kidney function (GFR)",
          component: GFRCalculator,
        },
      ],
    },
  ]

  const currentCategory = categories.find((cat) => cat.id === activeCategory)
  const currentCalculator = currentCategory?.calculators.find((calc) => calc.id === activeTab)
  const CurrentComponent = currentCalculator?.component

  const getFilteredCalculators = () => {
    if (!searchQuery.trim()) return null

    const query = searchQuery.toLowerCase()
    const results: Array<{
      calculator: any
      category: any
    }> = []

    categories.forEach((category) => {
      category.calculators.forEach((calculator) => {
        if (
          calculator.name.toLowerCase().includes(query) ||
          calculator.description.toLowerCase().includes(query) ||
          category.name.toLowerCase().includes(query)
        ) {
          results.push({ calculator, category })
        }
      })
    })

    return results
  }

  const searchResults = getFilteredCalculators()

  const handleBackToGrid = () => {
    setView("grid")
  }

  const handleSelectCalculator = (categoryId: string, calculatorId: string) => {
    setActiveCategory(categoryId)
    setActiveTab(calculatorId)
    setView("calculator")
    setSearchQuery("")
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Free Online{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Calculators
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8 leading-relaxed">
            190+ professional calculators for financial planning, health tracking, math problems, and everyday utilities
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Always Free
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              No Sign-up Required
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              100% Private
            </span>
          </div>
        </div>

        {view === "calculator" && CurrentComponent && (
          <>
            <button
              onClick={handleBackToGrid}
              className="group flex items-center gap-2 mb-8 px-5 py-2.5 rounded-xl bg-card hover:bg-secondary border border-border hover:border-primary text-foreground transition-all duration-200 shadow-sm hover:shadow-md animate-scale-in"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Calculators</span>
            </button>

            {/* Calculator Content */}
            <div className="grid lg:grid-cols-3 gap-8 animate-scale-in">
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-foreground mb-2">{currentCalculator?.name}</h2>
                  <p className="text-muted-foreground mb-8">{currentCalculator?.description}</p>
                  <CurrentComponent />

                  <div className="mt-8">
                    <AdSenseResponsiveAd slot="1234567891" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 border border-primary/10 sticky top-24 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">About This Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{currentCalculator.description}</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Enter values or adjust sliders for instant results</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Toggle between currencies for financial calculators</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">All calculations are private and secure</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block mt-6">
                  <AdSenseResponsiveAd slot="1234567892" />
                </div>
              </div>
            </div>
          </>
        )}

        {view === "grid" && (
          <>
            <div className="mb-12">
              <AdSenseResponsiveAd slot="1234567890" />
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search calculators... (e.g., 'loan', 'BMI', 'percentage')"
                  className="w-full pl-12 pr-12 py-4 rounded-xl bg-card border-2 border-border focus:border-primary outline-none text-foreground placeholder:text-muted-foreground transition-all duration-200 shadow-sm focus:shadow-md"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
              </div>
              {searchQuery && searchResults && (
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Found {searchResults.length} calculator{searchResults.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            {searchQuery && searchResults ? (
              <div className="mb-12">
                {searchResults.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map(({ calculator, category }, index) => (
                      <button
                        key={`${category.id}-${calculator.id}`}
                        onClick={() => handleSelectCalculator(category.id, calculator.id)}
                        className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-lg leading-tight mb-1">{calculator.name}</h3>
                            <p className="text-xs text-muted-foreground font-medium">{category.name}</p>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Calculator className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{calculator.description}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                          <span>Open Calculator</span>
                          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No calculators found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try searching with different keywords like "loan", "BMI", "tax", or "percentage"
                    </p>
                    <button
                      onClick={clearSearch}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="mb-12 flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => {
                    const Icon = category.icon
                    const isActive = activeCategory === category.id
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id)
                          setActiveTab(category.calculators[0].id)
                        }}
                        className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                            : "bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/50 hover:scale-105 shadow-sm"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-transform duration-300 ${isActive ? "" : "group-hover:rotate-12"}`}
                        />
                        <span>{category.name}</span>
                      </button>
                    )
                  })}
                </div>

                {currentCategory && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {currentCategory.calculators.map((calc, index) => (
                      <button
                        key={calc.id}
                        onClick={() => handleSelectCalculator(currentCategory.id, calc.id)}
                        className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-foreground text-lg leading-tight flex-1">{calc.name}</h3>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Calculator className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{calc.description}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                          <span>Open Calculator</span>
                          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Hero Section with SEO content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Free Online Calculators - 190+ Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance mb-6">
            Comprehensive calculator suite for financial planning, investments, loans, mortgages, health, fitness, BMI,
            calorie tracking, math problems, geometry, statistics, and everyday utilities. All calculators are free,
            accurate, and require no sign-up.
          </p>
          <div className="max-w-4xl mx-auto text-sm text-muted-foreground space-y-2">
            <p>
              Calculate loan payments, mortgage rates, investment returns, retirement savings, BMI, calories, macros,
              percentages, geometry formulas, and more. Perfect for students, professionals, homeowners, and anyone
              needing quick, reliable calculations.
            </p>
          </div>
        </div>

        <div className="mt-12 mb-8">
          <AdSenseResponsiveAd slot="1234567893" />
        </div>

        <div className="mt-20 mb-16">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Choose Our Calculators?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧮</div>
              <h3 className="font-bold text-foreground mb-3 text-xl">190+ Free Calculators</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Financial planning, investment analysis, health tracking, fitness goals, math homework, and everyday
                calculations all in one place
              </p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="font-bold text-foreground mb-3 text-xl">Private & Secure</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All calculations happen locally in your browser. We never store, transmit, or access your personal or
                financial data
              </p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="font-bold text-foreground mb-3 text-xl">Instant Results</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real-time calculations as you type. No loading, no waiting. Get accurate results immediately with our
                optimized calculators
              </p>
            </div>
          </div>
        </div>

        <section id="financial" className="mt-16 mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Financial Calculators</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Plan your financial future with our comprehensive suite of financial calculators. Calculate loan payments,
            mortgage rates, investment returns, retirement savings, tax obligations, and more. Perfect for budgeting,
            financial planning, and making informed money decisions.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Loans & Mortgages</h4>
              <p className="text-xs text-muted-foreground">Calculate payments, interest, and amortization schedules</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Investments</h4>
              <p className="text-xs text-muted-foreground">Project investment growth, retirement, and savings goals</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Tax & Income</h4>
              <p className="text-xs text-muted-foreground">Estimate taxes, calculate take-home pay, and net worth</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Debt Management</h4>
              <p className="text-xs text-muted-foreground">Plan debt payoff strategies and timelines</p>
            </div>
          </div>
        </section>

        <section id="health" className="mt-16 mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Health & Fitness Calculators</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Track your health and fitness journey with calculators for BMI, body fat, calories, macros, TDEE, BMR, and
            more. Perfect for weight loss, muscle gain, nutrition planning, and general wellness monitoring.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Body Composition</h4>
              <p className="text-xs text-muted-foreground">BMI, body fat, ideal weight, lean mass calculations</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Nutrition</h4>
              <p className="text-xs text-muted-foreground">Calories, macros, protein, TDEE, and BMR calculators</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Fitness & Women's Health</h4>
              <p className="text-xs text-muted-foreground">Heart rate zones, pregnancy, ovulation tracking</p>
            </div>
          </div>
        </section>

        <section id="math" className="mt-16 mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Math Calculators</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Solve math problems quickly with calculators for algebra, geometry, trigonometry, statistics, and more.
            Perfect for students, teachers, engineers, and anyone working with numbers.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Basic Math</h4>
              <p className="text-xs text-muted-foreground">Scientific, percentage, fraction calculations</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Geometry</h4>
              <p className="text-xs text-muted-foreground">Area, volume, triangle, circle calculators</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Statistics</h4>
              <p className="text-xs text-muted-foreground">Standard deviation, probability, z-score</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
              <p className="text-xs text-muted-foreground">Logarithms, roots, binary conversion</p>
            </div>
          </div>
        </section>

        <section id="other" className="mt-16 mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Other Useful Calculators</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Everyday utility calculators for time, date, conversions, construction, weather, and more. From calculating
            tips to planning construction projects, we've got the tools you need for daily tasks.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Time & Date</h4>
              <p className="text-xs text-muted-foreground">Age, date difference, time zone, sleep calculators</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Construction</h4>
              <p className="text-xs text-muted-foreground">Concrete, roofing, tile, square footage calculators</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Utilities</h4>
              <p className="text-xs text-muted-foreground">Tip, GPA, fuel cost, conversion calculators</p>
            </div>
          </div>
        </section>

        <div className="mt-16 mb-8">
          <AdSenseResponsiveAd slot="1234567894" />
        </div>

        <section className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Are these calculators really free?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes! All 190+ calculators are completely free to use with no hidden fees, subscriptions, or sign-up
                requirements. We're supported by advertising.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Is my data private and secure?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All calculations are performed locally in your browser. We never store, transmit, or have access to any
                values you enter. Your financial and personal data remains completely private.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Are the calculator results accurate?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We strive for accuracy in all our calculators using industry-standard formulas. However, results are for
                informational purposes only and should not be replaced by professional advice. Always consult qualified
                professionals for important decisions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Can I use these calculators on mobile devices?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes! All our calculators are fully responsive and optimized for mobile phones, tablets, and desktop
                computers. Use them anywhere, anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
