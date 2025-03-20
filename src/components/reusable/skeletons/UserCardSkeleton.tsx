import { HTMLAttributes } from "react"

export default function UserCardSkeleton({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <figure
      className={`flex flex-col items-center gap-[12px] lg:gap-[15px] ${className}`}
      {...props}
    >      <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-gray-200 animate-pulse" />
      <figcaption className="flex flex-col items-center gap-[1px] lg:gap-[5px]">
        <div className="w-20 h-4 md:h-5 bg-gray-200 rounded-md animate-pulse" />
        <div className="w-24 h-3 md:h-4 bg-gray-200 rounded-md animate-pulse mt-1" />
      </figcaption>
    </figure>
  )
}
