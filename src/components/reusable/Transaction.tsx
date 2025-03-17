
export default function Transaction({
  amount,
  title,
  date,
  imgSrc,
  imgAlt,
}: {
  amount: number
  title: string
  date: string
  imgSrc: string
  imgAlt: string
}) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date)
  }
  return (
    <article className="flex items-center gap-[15px] md:gap-[17px]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="object-cover w-[50px] h-[50px] md:w-[55px] md:h-[55px]"
      />
      <div className="mr-auto">
        <h2 className="text-primary-dark font-medium text-sm md:text-base">{title}</h2>
        <p className="text-primary-dark-blue text-xs md:text-[1.0667rem]">{formatDate(date)}</p>
      </div>
      <p className={`font-semibold ${amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]"}`}>
        {amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
    </article>
  )
}
