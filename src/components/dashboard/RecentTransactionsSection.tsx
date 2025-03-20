import { useAppSelector } from "../../redux/hooks"
import SectionHeading from "../reusable/SectionHeading"
import Transaction from "../reusable/Transaction"



export default function RecentTransactionsSection() {
    const { recentTransactions } = useAppSelector((store) => store.dashboard)
  
  return (
    <div className="flex flex-col gap-y-[1.375rem] lg:gap-5">
      <SectionHeading>Recent Transactions</SectionHeading>
      <ul className="overflow-auto max-h-[214px] lg:max-h-[235px] flex flex-col gap-3 lg:gap-[0.625rem] bg-white py-5 lg:py-[1.875rem] px-[1.125rem] lg:px-6 rounded-[15px] lg:rounded-[25px]">
        {recentTransactions.map((trx) => (
          <li key={trx.date + trx.title + trx.amount}>
            <Transaction transaction={trx} />
          </li>
        ))}
      </ul>
    </div>
  )
}
