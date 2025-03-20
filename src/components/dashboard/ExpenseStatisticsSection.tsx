import SectionHeading from "../reusable/SectionHeading"
import PieChart from "../reusable/Charts/PieChart"
import { useAppSelector } from "../../redux/hooks"

export default function ExpenseStatisticsSection() {
  const { expensesStats } = useAppSelector((store) => store.dashboard)

  return (
    <div className="flex flex-col gap-y-3 lg:gap-[18px]">
      <SectionHeading>Expense Statistics</SectionHeading>
      <div className="bg-white rounded-[25px] p-6">
        <div className="max-w-[280px] sm:max-w-[320px] mx-auto translate-x-[-10px]">
          <PieChart data={expensesStats} percentageKey={"percentage"} textKey={"category"} />
        </div>
      </div>
    </div>
  )
}
