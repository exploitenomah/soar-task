import { formatNumToUSD } from "../../_utils"
import { Transaction } from "../../redux/slices/dashboard.slice"

const transactionImages = {
  deposit: "/images/deposit.png",
  credit: "/images/credit.png",
  paypal: "/images/paypal.png",
}
export default function RecentTransaction({ transaction }: { transaction: Transaction }) {
  const { amount, title, date, type } = transaction
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date)
  }
  return (
    <article className="flex items-center">
      <img
        src={transactionImages[type as keyof typeof transactionImages]}
        alt={type}
        className="object-cover w-[50px] h-[50px] md:w-[55px] md:h-[55px] mr-[15px] mr:gap-[17px]"
      />
      <div className="mr-auto">
        <h2 className="text-primary-dark font-medium text-sm md:text-base">{title}</h2>
        <p className="text-primary-dark-blue text-xs md:text-[1.0667rem]">{formatDate(date)}</p>
      </div>
      <p
        className={`font-semibold text-[0.6875rem] lg:text-base ${amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]"}`}
      >
        {formatNumToUSD(amount)}
      </p>
    </article>
  )
}
