import AmountInputSkeleton from "./AmountInputSkeleton"
import CreditCardSkeleton from "./CreditCardSkeleton"
import Skeleton from "./Skeleton"
import { TransactionListSkeleton } from "./TransactionSkeleton"
import UserCardSkeleton from "./UserCardSkeleton"


export default function DashboardSkeleton() {
  return (
    <div className="pl-[1.5625rem] xl:p-0">
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="xl:col-start-1 xl:col-span-2">
          <div className="flex flex-col gap-y-[1.375rem] lg:gap-5">
            <div className="text-logo-text flex justify-between pr-[1.5625rem] lg:pr-0">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="flex overflow-x-auto gap-5 lg:gap-[1.875rem] overflow-hidden pr-4 xl:pr-0">
              <CreditCardSkeleton theme="dark" />
              <CreditCardSkeleton theme="light" />
              <CreditCardSkeleton theme="dark" />
            </div>
          </div>
        </section>
        <section className="pr-[1.5625rem] xl:pr-0 xl:max-w-[380px] xl:col-start-3 xl:col-end-4">
          <div className="flex flex-col gap-y-[1.375rem] lg:gap-5">
            <Skeleton className="h-8 w-48" />
            <div className="bg-white py-4 lg:py-7 px-[1.125rem] lg:px-6 rounded-[15px] lg:rounded-[25px]">
              <TransactionListSkeleton count={3} />
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[22px] xl:gap-6 mb-[22px] xl:mb-6">
        <section className="flex-grow pr-[1.5625rem] xl:pr-0 xl:col-start-1 xl:col-span-2">
          <div className="flex flex-col gap-y-3 lg:gap-[18px]">
            <Skeleton className="h-8 w-36" />
            <div className="bg-white rounded-[25px] p-6">
              <Skeleton className="w-full h-[250px]" />
            </div>
          </div>
        </section>
        <section className="xl:w-[380px] pr-[1.5625rem] xl:pr-0 xl:col-start-3 xl:col-end-4">
          <div className="flex flex-col gap-y-3 lg:gap-[18px]">
            <Skeleton className="h-8 w-40" />
            <div className="bg-white rounded-[25px] p-6">
              <Skeleton className="w-full h-[250px]" />
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col xl:flex-row gap-[22px] xl:gap-6 pr-[1.5625rem] xl:pr-0">
        <section className="xl:w-[480px]">
          <div className="flex flex-col gap-y-3 lg:gap-[18px]">
            <Skeleton className="h-8 w-36" />
            <div className="bg-white rounded-[25px] p-6">
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[1, 2, 3, 4].map((i) => (
                  <UserCardSkeleton key={i} />
                ))}
              </div>
              <AmountInputSkeleton />
            </div>
          </div>
        </section>
        <section className="flex-grow">
          <div className="flex flex-col gap-y-3 lg:gap-[18px]">
            <Skeleton className="h-8 w-36" />
            <div className="bg-white rounded-[25px] p-6 ">
              <Skeleton className="w-full h-[225px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
