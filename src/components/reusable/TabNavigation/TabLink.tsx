import { NavLink as ReactRouterNavLink, useLocation } from "react-router"
import { useMemo } from "react"
import { NavLinkItem } from "../../SideNav/navlinks"

export default function TabLink({ link }: { link: NavLinkItem }) {
  const location = useLocation()
  const isActive = useMemo(() => location.pathname.toLowerCase() === link.href, [location.pathname])
  return (
    <>
      <ReactRouterNavLink
        to={link.href}
        className={`${isActive ? "text-primary-dark after:h-[2px] after:relative after:w-full" : "text-primary-dark-blue after:w-0"} md:after-[3px] flex flex-col gap-[8px] md:gap-[10px] relative items-center after:w-full after:block after:bg-current after:transition-all after:rounded-tr-[10px] after:rounded-tl-[10px] transition-colors cursor-pointer hover:text-primary-dark-blue hover:after:w-full hover:after:h-[2px]`}
      >
        <span className="text-[0.8125rem] md:text-base font-medium capitalize px-[0.375rem] md:px-4 leading-[100%]">
          {link.textContent}
        </span>
      </ReactRouterNavLink>
    </>
  )
}
