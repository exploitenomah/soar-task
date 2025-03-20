import Skeleton from "./Skeleton"

export default function TransactionSkeleton() {
  return (
    <article className="flex items-center animate-pulse">
      <div className="bg-gray-200 w-[30px] h-[30px] md:w-[55px] md:h-[55px] mr-[15px] mr:gap-[17px] rounded-full" />
      <div className="mr-auto">
        <Skeleton className="h-4 md:h-5 bg-gray-200 rounded w-[120px] mb-2" />

        <Skeleton className="h-3 md:h-4 bg-gray-200 rounded w-[80px]" />
      </div>
      <Skeleton className="h-4 bg-gray-200 rounded w-[70px]" />
    </article>
  )
}

export function TransactionListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-1">
      {Array.from({ length: count }).map((_, index) => (
        <TransactionSkeleton key={index} />
      ))}
    </div>
  )
}
