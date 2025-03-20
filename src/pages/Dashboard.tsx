import React, { Suspense } from "react"
import { useAppSelector } from "../redux/hooks"
import DashboardSkeleton from "../components/reusable/skeletons/DashboardSkeleton"

const BalanceHistorySection = React.lazy(
  () => import("../components/dashboard/BalanceHistorySection"),
)
const CardsSection = React.lazy(() => import("../components/dashboard/CardsSection"))
const ExpenseStatisticsSection = React.lazy(
  () => import("../components/dashboard/ExpenseStatisticsSection"),
)
const QuickTransferSection = React.lazy(
  () => import("../components/dashboard/QuickTransferSection"),
)
const RecentTransactionsSection = React.lazy(
  () => import("../components/dashboard/RecentTransactionsSection"),
)
const WeeklyActivitySection = React.lazy(
  () => import("../components/dashboard/WeeklyActivitySection"),
)

export default function DashboardPage() {
  const { loading: loadingDashboard } = useAppSelector((store) => store.dashboard)

  if (loadingDashboard) return <DashboardSkeleton />
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <div className="pl-[1.5625rem] xl:p-0 max-w-[2025px]">
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
          <section className="xl:col-start-1 xl:col-span-2">
            <CardsSection />
          </section>
          <section className="pr-[1.5625rem] xl:pr-0 xl:col-start-3 xl:col-end-4">
            <RecentTransactionsSection />
          </section>
        </div>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
          <section className="flex-grow pr-[1.5625rem] xl:pr-0 xl:col-start-1 xl:col-span-2">
            <WeeklyActivitySection />
          </section>
          <section className="pr-[1.5625rem] xl:pr-0 xl:col-start-3 xl:col-end-4">
            <ExpenseStatisticsSection />
          </section>
        </div>
        <div className="flex flex-col xl:grid xl:grid-cols-10 gap-[22px] xl:gap-6 pr-[1.5625rem] xl:pr-0">
          <section className="xl:col-start-1 xl:col-span-4">
            <QuickTransferSection />
          </section>
          <section className="xl:col-start-5 xl:col-span-6">
            <BalanceHistorySection />
          </section>
        </div>
      </div>
    </Suspense>
  )
}
