import SectionHeading from "../reusable/SectionHeading"
import LineChart from "../reusable/Charts/LineChart"
import { useAppSelector } from "../../redux/hooks"

export type BalanceData = {
  month: string
  balance: number
}

export default function BalanceHistorySection() {
  const { balanceHistoryStats } = useAppSelector((store) => store.dashboard)
  return (
    <div className="flex flex-col gap-y-3 lg:gap-[18px] h-full">
      <SectionHeading>Balance History</SectionHeading>
      <div className="bg-white rounded-[25px] p-6 h-full flex justify-center items-center">
        <LineChart
          data={balanceHistoryStats}
          xAxisKey={"month"}
          dataKey={"balance"}
          getHeight={(isMobile) => (isMobile ? 190 : 310)}
        />
      </div>
    </div>
  )
}
