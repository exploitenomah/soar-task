import SectionHeading from "../reusable/SectionHeading"
import BarChart from "../reusable/Charts/BarChart"
import { useAppSelector } from "../../redux/hooks"

export type WeeklyActivityDataPoint = {
  day: string
  deposit: number
  withdraw: number
}

export default function WeeklyActivitySection({}: {}) {
  const { weeklyActivityStats } = useAppSelector((store) => store.dashboard)

  if (weeklyActivityStats.length === 0) return null
  return (
    <div className="flex flex-col gap-y-3 lg:gap-[18px] relative">
      <SectionHeading>Weekly Activity</SectionHeading>
      <div className="bg-white flex justify-center items-center rounded-[25px] py-2 px-[18px] sm:p-4">
        <BarChart
          data={weeklyActivityStats}
          xAxisKey={"day"}
          barsKeys={["withdraw", "deposit"]}
          colors={{ deposit: "#396AFF", withdraw: "#232323" }}
        />
      </div>
    </div>
  )
}
