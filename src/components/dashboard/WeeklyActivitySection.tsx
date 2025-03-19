import SectionHeading from "../reusable/SectionHeading"
import BarChart from "../reusable/Charts/BarChart"

export type WeeklyActivityDataPoint = {
  day: string
  deposit: number
  withdraw: number
}

export default function WeeklyActivitySection({}: {}) {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-[18px] relative">
      <SectionHeading>Weekly Activity</SectionHeading>
      <div className="bg-white flex justify-center items-center rounded-[25px] py-2 px-[18px] sm:p-4">
        <BarChart
          data={[]}
          xAxisKey={"day"}
          barsKeys={["withdraw", "deposit"]}
          colors={{ deposit: "#396AFF", withdraw: "#1C1C1C" }}
        />
      </div>
    </div>
  )
}
