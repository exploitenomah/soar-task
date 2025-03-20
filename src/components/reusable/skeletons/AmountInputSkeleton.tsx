export default function AmountInputSkeleton() {
  return (
    <div className="mt-[22px] lg:mt-[28px] flex justify-between items-center">
      <div className="h-4 lg:h-5 w-24 bg-gray-200 animate-pulse rounded-md shrink" />
      <div className="relative rounded-[50px] max-w-[187px] md:max-w-[80%] xl:max-w-[265px] grow">
        <div className="w-full h-[38px] lg:h-[48px] bg-gray-200 animate-pulse rounded-[50px]" />

        <div className="absolute inset-y-0 right-0 h-full w-[53%] lg:w-[125px] bg-gray-300 animate-pulse rounded-[50px]" />
      </div>
    </div>
  )
}
