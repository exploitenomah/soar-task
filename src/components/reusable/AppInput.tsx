import { InputHTMLAttributes, ReactNode, useCallback, useRef } from "react"
import DownChevronIcon from "../../assets/icons/DownChevronIcon"

const appInputClassNames =
  "w-full border border-solid border-[#DFEAF2] rounded-[0.625rem] lg:rounded-2xl py-3 lg:py-4 px-5 placeholder:text-xs md:placeholder:text-[0.94rem] placeholder:text-primary-dark-blue placeholder:font-normal  text-xs md:text-[0.94rem] text-primary-dark-blue font-normal focus:outline-primary-dark/50 leading-[100%]"

const errorInputClassNames = `${appInputClassNames} border-red-500 focus:outline-red-500/50`

export default function AppInput({
  label,
  inputProps,
  error,
}: {
  inputProps: InputHTMLAttributes<HTMLInputElement>
  label: ReactNode | ReactNode[]
  error?: string | boolean
}) {
  return (
    <>
      <label className="flex flex-col gap-[0.5625rem] md:gap-[0.6875rem]">
        <span className="leading-[100%] text-[0.8125rem] md:text-base text-primary-dark">
          {label}
        </span>
        <div>
          <div className="relative w-full">
            {inputProps.type === "date" || inputProps.type === "datetime-local" ? (
              <DateInput inputProps={inputProps} error={error} />
            ) : (
              <input
                {...inputProps}
                className={error ? errorInputClassNames : appInputClassNames}
              />
            )}
          </div>
          {error && <span className="text-red-500 text-xs md:text-xs mt-[2px]">{error}</span>}
        </div>
      </label>
    </>
  )
}

function DateInput({
  inputProps,
  error,
}: {
  inputProps: InputHTMLAttributes<HTMLInputElement>
  error?: string | boolean
}) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const showInputPicker = useCallback(() => inputRef.current?.showPicker(), [])

  if (inputProps.type !== "date" && inputProps.type !== "datetime-local") return null
  return (
    <div className="w-full">
      <input
        ref={inputRef}
        {...inputProps}
        className={error ? errorInputClassNames : appInputClassNames}
      />
      <span
        onClick={showInputPicker}
        className="rounded-tl-2xl rounded-bl-2xl text-[#718EBF] absolute inset-y-[5%] left-0.5 pl-5 flex justify-start items-center bg-white w-[90%] h-[90%] text-xs md:text-[0.94rem]"
      >
        {inputProps.value
          ? new Date(inputProps.value as string).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          : inputProps.value || inputProps.placeholder}
      </span>
      <span
        onClick={showInputPicker}
        className="text-[#718EBF] absolute inset-y-[10%] right-0.5 flex justify-center items-center bg-white w-[20%] md:w-[15%] h-[80%] rounded-tr-2xl rounded-br-2xl "
      >
        <DownChevronIcon />
      </span>
    </div>
  )
}
