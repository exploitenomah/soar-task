import { ButtonHTMLAttributes } from "react"

export default function IconButton({
  children,
  className,
  textColor,
  bgColor,
  hoverClasses,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  textColor?: string
  bgColor?: string
  hoverClasses?: string
}) {
  return (
    <button
      className={`cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-primary-blue/50 hover:text-primary-light transition-all duration-150 ${textColor && bgColor ? `${textColor} ${bgColor} ${hoverClasses}` : "text-primary-dark-blue bg-primary-light"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
