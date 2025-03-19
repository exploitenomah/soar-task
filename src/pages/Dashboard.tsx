import BalanceHistorySection from "../components/dashboard/BalanceHistorySection"
import CardsSection from "../components/dashboard/CardsSection"
import ExpenseStatisticsSection from "../components/dashboard/ExpenseStatisticsSection"
import QuickTransferSection from "../components/dashboard/QuickTransferSection"
import RecentTransactionsSection from "../components/dashboard/RecentTransactionsSection"
import WeeklyActivitySection from "../components/dashboard/WeeklyActivitySection"

export default function DashboardPage() {
  return (
    <div className="pl-[1.5625rem] xl:p-0">
      <div className="flex flex-col xl:flex-row gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="flex-grow">
          <CardsSection />
        </section>
        <section className="pr-[1.5625rem] xl:pr-0 xl:w-[380px]">
          <RecentTransactionsSection />
        </section>
      </div>
      <div className="flex flex-col xl:flex-row gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="flex-grow pr-[1.5625rem] xl:pr-0">
          <WeeklyActivitySection />
        </section>
        <section className="xl:w-[380px] pr-[1.5625rem] xl:pr-0 ">
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
