import BalanceHistorySection from "../components/dashboard/BalanceHistorySection"
import CardsSection from "../components/dashboard/CardsSection"
import ExpenseStatisticsSection from "../components/dashboard/ExpenseStatisticsSection"
import QuickTransferSection from "../components/dashboard/QuickTransferSection"
import RecentTransactionsSection from "../components/dashboard/RecentTransactionsSection"
import WeeklyActivitySection from "../components/dashboard/WeeklyActivitySection"


export default function DashboardPage() {
  return (
    <>
      <main className="lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[1.875rem] lg:grid-rows-2">
        <section className="col-start-1 col-span-2 row-start-1 row-end-2">
          <CardsSection />
        </section>
        <section className="col-start-3 col-end-4 row-start-1 row-end-2">
          <RecentTransactionsSection />
        </section>
        <section className="col-start-1 col-span-2 row-start-2 row-end-3">
          <WeeklyActivitySection />
        </section>
        <section className="col-start-3 col-end-4 row-start-2 row-end-3">
          <ExpenseStatisticsSection />
        </section>
      </main>
      <section className="lg:grid lg:grid-cols-5 lg:gap-x-6 lg:gap-y-[1.875rem] mt-[1.875rem] lg:mt-6">
        <section className="col-start-1 col-span-2">
          <QuickTransferSection />
        </section>
        <section className="col-start-3 col-end-6 row-start-1 row-end-2">
          <BalanceHistorySection />
        </section>
      </section>
    </>
  )
}
