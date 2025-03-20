import BalanceHistorySection from "../components/dashboard/BalanceHistorySection"
import CardsSection from "../components/dashboard/CardsSection"
import ExpenseStatisticsSection from "../components/dashboard/ExpenseStatisticsSection"
import QuickTransferSection from "../components/dashboard/QuickTransferSection"
import RecentTransactionsSection from "../components/dashboard/RecentTransactionsSection"
import WeeklyActivitySection from "../components/dashboard/WeeklyActivitySection"
import { useAppSelector } from "../redux/hooks"
import DashboardSkeleton from "../components/reusable/skeletons/DashboardSkeleton"

export default function DashboardPage() {
  const { loading: loadingDashboard } = useAppSelector((store) => store.dashboard)

  if (loadingDashboard) return <DashboardSkeleton />
  return (
    <div className="pl-[1.5625rem] xl:p-0">
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="xl:col-start-1 xl:col-span-2">
          <CardsSection />
        </section>
        <section className="pr-[1.5625rem] xl:pr-0 xl:max-w-[380px] xl:col-start-3  xl:col-end-4">
          <RecentTransactionsSection />
        </section>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="flex-grow pr-[1.5625rem] xl:pr-0 xl:col-start-1 xl:col-span-2">
          <WeeklyActivitySection />
        </section>
        <section className="xl:w-[380px] pr-[1.5625rem] xl:pr-0 xl:col-start-3  xl:col-end-4">
          <ExpenseStatisticsSection />
        </section>
      </div>
      <div className="flex flex-col xl:flex-row gap-[22px] xl:gap-6 pr-[1.5625rem] xl:pr-0">
        <section className="xl:w-[480px]">
          <QuickTransferSection />
        </section>
        <section className="flex-grow">
          <BalanceHistorySection />
        </section>
      </div>
    </div>
  )
}
