import { InputHTMLAttributes, ReactNode } from "react"

export default function AppInput({
  label,
  inputProps,
}: {
  inputProps: InputHTMLAttributes<HTMLInputElement>
  label: ReactNode | ReactNode[]
}) {
  return (
    <>
      <label className="flex flex-col gap-[11px]">
        <span>{label}</span>
        <input
          {...inputProps}
          className="border border-solid border-[#DFEAF2] rounded-2xl py-4 px-5 placeholder:text-xs md:placeholder:text-[0.94rem] placeholder:text-primary-dark-blue placeholder:font-normal  text-xs md:text-[0.94rem] text-primary-dark-blue font-normal focus:outline-primary-dark/50"
        />
      </label>
    </>
  )
}
