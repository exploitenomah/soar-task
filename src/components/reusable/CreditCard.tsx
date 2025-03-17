import { ReactNode } from "react"
import CardChipIcon from "../../assets/icons/CardChipIcon"
import CardCircleIcons from "../../assets/icons/CardCircleIcons"

export default function CreditCard({
  balance,
  cardHolder,
  expiry,
  cardNumber,
  theme,
}: {
  balance: string
  cardHolder: string
  expiry: string
  cardNumber: string
  theme: "light" | "dark"
}) {
  const isDarkTheme = theme === "dark"

  return (
    <article
      className={`font-lato rounded-[25px] w-[265px] md:w-[350px] ${
        !isDarkTheme
          ? "bg-white border border-[#DFEAF2] text-black"
          : "bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)] text-white"
      }`}
    >
      <header className="flex justify-between mb-[33px] items-center pt-6 px-[1.65rem]">
        <div>
          <h2
            className={`text-[0.7rem] md:text-[0.75rem] ${isDarkTheme ? "text-white" : "text-primary-dark-blue"}`}
          >
            Balance
          </h2>
          <p
            className={`leading-[100%] text-base md:text-xl font-semibold ${isDarkTheme ? "text-white" : "text-logo-text"}`}
          >
            {balance}
          </p>
        </div>
        <CardChipIcon variant={isDarkTheme ? "light" : "dark"} />
      </header>

      <div className="pl-[1.65rem] mb-[35px] flex items-start justify-between max-w-[227px]">
        <CardDetailKeyValue keyName="Card Holder" value={cardHolder} isDarkTheme={isDarkTheme} />
        <CardDetailKeyValue keyName="Valid Thru" value={expiry} isDarkTheme={isDarkTheme} />
      </div>

      <footer
        className={`py-5 pl-[1.625rem] pr-6 flex justify-between items-center ${
          theme === "light"
            ? "border-t border-[#DFEAF2] text-[#9199AF80]"
            : "bg-gradient-to-b from-white/15 to-white/0 text-white/50"
        }`}
      >
        <p
          className={`leading-[100%] text-[0.95rem] md:text-[1.375rem] ${isDarkTheme ? "text-white" : "text-logo-text"}`}
        >
          {cardNumber}
        </p>
        <CardCircleIcons />
      </footer>
    </article>
  )
}

function CardDetailKeyValue({
  keyName,
  value,
  isDarkTheme,
}: {
  isDarkTheme: boolean
  keyName: string
  value: ReactNode
}) {
  return (
    <section>
      <p
        className={`leading-[100%] text-[0.65rem] md:text-xs uppercase font-normal ${isDarkTheme ? "text-white/70" : "text-primary-dark-blue"}`}
      >
        {keyName}
      </p>
      <p
        className={`text-[0.8rem] md:text-[0.95rem] font-semibold ${isDarkTheme ? "text-white" : "text-logo-text"}`}
      >
        {value}
      </p>
    </section>
  )
}
