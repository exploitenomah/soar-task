import BalanceHistorySection from "../components/dashboard/BalanceHistorySection"
import CardsSection from "../components/dashboard/CardsSection"
import ExpenseStatisticsSection from "../components/dashboard/ExpenseStatisticsSection"
import QuickTransferSection from "../components/dashboard/QuickTransferSection"
import RecentTransactionsSection from "../components/dashboard/RecentTransactionsSection"
import WeeklyActivitySection from "../components/dashboard/WeeklyActivitySection"


export default function DashboardPage() {
  return (
    <div className="pl-[1.5625rem] xl:p-0">
      <main className="flex flex-col gap-[22px] xl:grid xl:grid-cols-3 xl:gap-x-6 xl:gap-y-[1.875rem] xl:grid-rows-2">
        <section className="col-start-1 col-span-2 row-start-1 row-end-2">
          <CardsSection />
        </section>
        <section className="col-start-3 col-end-4 row-start-1 row-end-2 pr-[1.5625rem] xl:pr-0">
          <RecentTransactionsSection />
        </section>
        <section className="col-start-1 col-span-2 row-start-2 row-end-3">
          <WeeklyActivitySection />
        </section>
        <section className="col-start-3 col-end-4 row-start-2 row-end-3">
          <ExpenseStatisticsSection />
        </section>
      </main>
      <section className="flex flex-col gap-[22px] xl:grid xl:grid-cols-12 xl:gap-x-6 xl:gap-y-[1.875rem] mt-[22px] xl:mt-6  pr-[1.5625rem] xl:pr-0">
        <section className="col-start-1 col-span-5">
          <QuickTransferSection />
        </section>
        <section className="col-start-6 col-end-13 row-start-1 row-end-2">
          <BalanceHistorySection />
        </section>
      </section>
    </div>
  )
}
