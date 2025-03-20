import { useCallback, useRef, useState } from "react"
import RightChevronIcon from "../../assets/icons/RightChevronIcon"
import SectionHeading from "../reusable/SectionHeading"
import UserCard from "../reusable/UserCard"
import SendIcon from "../../assets/icons/SendIcon"
import { useAppSelector } from "../../redux/hooks"
import { Beneficiary } from "../../redux/slices/dashboard.slice"

export default function QuickTransferSection() {
  const { savedBeneficiaries } = useAppSelector((store) => store.dashboard)

  const [selectedRecipient, setSelectedRecipient] = useState<Beneficiary | null>(null)
  const usersContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollUsersContainer = useCallback(() => {
    usersContainerRef.current?.scrollBy({ left: 150, behavior: "smooth" })
  }, [usersContainerRef])

  return (
    <div className="flex flex-col gap-y-[1.375rem] lg:gap-5 relative">
      <SectionHeading>Quick Transfer</SectionHeading>

      <div className="max-h-[195px] md:max-h-[276px] px-[1.125rem] md:px-6 py-5 md:py-[2.1875rem] bg-white rounded-[15px] lg:rounded-[25px]">
        <div
          ref={usersContainerRef}
          className="relative overflow-auto w-[80%] lg:max-h-[235px] flex gap-5 lg:gap-[2.0625rem]"
        >
          {savedBeneficiaries.map((user) => (
            <label key={user.id} className="shrink-0 cursor-pointer">
              <UserCard user={user} isSelected={selectedRecipient?.id === user.id} />
              <input
                type="radio"
                name="recipient"
                className="sr-only"
                onChange={() => setSelectedRecipient(user)}
              />
            </label>
          ))}
        </div>
        <button
          onClick={scrollUsersContainer}
          className="absolute -translate-y-1/2 top-[50%] left-[80%] w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] p-4 cursor-pointer hover:bg-primary-light hover:shadow-[8px_8px_18px_-2px_rgba(231,228,232,0.8)]"
        >
          <span className="sr-only">Click to scroll right</span>
          <RightChevronIcon />
        </button>
        <div className="mt-[22px] lg:mt-[28px] flex justify-between items-center">
          <label
            htmlFor="amountInput"
            className="text-primary-dark-blue text-xs lg:text-base shrink"
          >
            Write Amount
          </label>
          <div className="relative focus-within:outline-1 focus-within:outline-primary-dark rounded-[50px] max-w-[187px] md:max-w-[80%] xl:max-w-[265px] grow">
            <input
              type="number"
              placeholder="Amount"
              className="w-full bg-[#EDF1F7] text-primary-dark-blue text-xs lg:text-base leading-[100%] rounded-[50px] py-3 lg:py-4 pl-[15px] lg:pl-[30px] pr-[115px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary-dark text-white flex justify-center items-center py-[13px] lg:py-4 text-[0.8125rem] lg:text-base rounded-[50px] w-[53%] absolute inset-y-0 right-0 lg:w-[125px] gap-[9px] lg:gap-[11px] cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-150 active:scale-100"
            >
              Send <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
