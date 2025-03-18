import { createElement, HTMLAttributes } from "react"

export default function SectionHeading({
  as,
  ...props
}: { as?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return createElement(as || "h2", {
    ...props,
    className: `${props.className} text-base lg:text-[1.375rem] font-semibold leading-[100%] text-logo-text`,
  })
}
