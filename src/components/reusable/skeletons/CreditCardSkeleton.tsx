const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
)

interface CreditCardSkeletonProps {
  theme?: "light" | "dark"
}

export default function CreditCardSkeleton({
  theme = "light",
}: CreditCardSkeletonProps) {
  const isDarkTheme = theme === "dark"

  return (
    <article
      className={`font-lato rounded-[15px] lg:rounded-[25px] min-w-[265px] lg:w-[350px] ${
        !isDarkTheme
          ? "bg-white border border-[#DFEAF2]"
          : "bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)]"
      }`}
    >
      <header className="flex justify-between mb-[1.4375rem] lg:mb-[33px] items-center pt-[17px] lg:pt-6 px-[1.65rem]">
        <div className="space-y-1">
          <Skeleton
            className={`h-3 w-14 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
          <Skeleton
            className={`h-5 w-24 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
        </div>
        <Skeleton
          className={`h-8 w-8 rounded-md ${isDarkTheme ? "bg-white/20" : ""}`}
        />
      </header>

      <div className="pl-[1.65rem] mb-4 lg:mb-[35px] flex items-start justify-between max-w-[227px]">
        <div className="space-y-1">
          <Skeleton
            className={`h-3 w-16 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
          <Skeleton
            className={`h-4 w-20 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
        </div>
        <div className="space-y-1">
          <Skeleton
            className={`h-3 w-14 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
          <Skeleton
            className={`h-4 w-16 ${isDarkTheme ? "bg-white/20" : ""}`}
          />
        </div>
      </div>

      <footer
        className={`py-4 lg:py-5 pl-[1.625rem] pr-6 flex justify-between items-center ${
          theme === "light"
            ? "border-t border-[#DFEAF2]"
            : "bg-gradient-to-b from-white/15 to-white/0"
        }`}
      >
        <Skeleton className={`h-5 w-32 ${isDarkTheme ? "bg-white/20" : ""}`} />
        <Skeleton className={`h-6 w-10 ${isDarkTheme ? "bg-white/20" : ""}`} />
      </footer>
    </article>
  )
}
