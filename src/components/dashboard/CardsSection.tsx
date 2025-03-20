import { Link } from "react-router"
import SectionHeading from "../reusable/SectionHeading"
import CreditCard, { CreditCardInterface } from "../reusable/CreditCard"
import { useAppSelector } from "../../redux/hooks"

export default function CardsSection() {
  const { cards } = useAppSelector((store) => store.dashboard)

  return (
    <div className="flex flex-col gap-y-[1.375rem] lg:gap-5">
      <div className="text-logo-text flex justify-between pr-[1.5625rem] lg:pr-0">
        <SectionHeading>My Cards</SectionHeading>
        <Link
          to="/credit-cards"
          className="capitalize text-sm md:text-[1.0625rem] font-semibold leading-[100%] hover:underline"
        >
          See all
        </Link>
      </div>
      <ul className="flex gap-5 lg:gap-[1.875rem] overflow-auto pr-4 xl:pr-0">
        {cards.map((card) => (
          <li key={card.cardNumber}>
            <CreditCard card={card as CreditCardInterface} />
          </li>
        ))}
      </ul>
    </div>
  )
}