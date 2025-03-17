import { InputHTMLAttributes } from "react"
import SearchIcon from "../assets/icons/SearchIcon"

export default function SearchInput({
  placeholder,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex  items-center px-[1.2rem] py-3 md:px-[1.64rem] gap-2.5 md:gap-[0.95rem] focus-within:outline-current focus-within:outline transition-75 duration-150 md:max-w-[255px] text-primary-dark-blue bg-primary-light rounded-[40px]">
      <span className="text-[#8BA3CB]">
        <SearchIcon />
        <span className="sr-only">Search</span>
      </span>
      <input
        className="grow placeholder:text-[#8BA3CB] placeholder:leading-[100%] placeholder:font-normal placeholder:text-[13px] md:placeholder:text-[15px] h-4 md:h-[1.15rem] focus:outline-none"
        placeholder={placeholder || "Search for something"}
        {...rest}
      />
    </label>
  )
}
