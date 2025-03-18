import SectionHeading from "../reusable/SectionHeading"
import Transaction from "../reusable/Transaction"

const transactions = [
  {
    amount: -45.99,
    title: "Grocery Shopping",
    date: "2024-03-10T14:30:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Grocery Bag",
  },
  {
    amount: 1500.0,
    title: "Freelance Payment",
    date: "2024-03-09T10:00:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Laptop with code",
  },
  {
    amount: -12.5,
    title: "Coffee Purchase",
    date: "2024-03-08T08:15:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Coffee Cup",
  },
  {
    amount: -75.0,
    title: "Electricity Bill",
    date: "2024-03-05T12:00:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Light bulb icon",
  },
  {
    amount: 2500.99,
    title: "Salary Deposit",
    date: "2024-03-01T07:45:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Bank transfer icon",
  },
  {
    amount: -30.0,
    title: "Gym Subscription",
    date: "2024-02-28T18:20:00Z",
    imgSrc: "/trx.png",
    imgAlt: "Dumbbell icon",
  },
]

export default function RecentTransactionsSection() {
  return (
    <div className="flex flex-col gap-y-[1.375rem] lg:gap-5">
      <SectionHeading>Recent Transactions</SectionHeading>
      <ul className="overflow-auto max-h-[214px] lg:max-h-[235px] flex flex-col gap-3 lg:gap-[0.625rem] bg-white py-5 lg:py-[1.875rem] px-[1.125rem] lg:px-6 rounded-[15px] lg:rounded-[25px]">
        {transactions.map((trx) => (
          <li key={trx.date + trx.title + trx.amount}>
            <Transaction transaction={trx} />
          </li>
        ))}
      </ul>
    </div>
  )
}
