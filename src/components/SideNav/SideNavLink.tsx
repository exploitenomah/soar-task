import { NavLink as ReactRouterNavLink, useLocation } from "react-router"
import { useMemo } from "react"
import { NavLinkItem } from "./navlinks"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleNavOpen } from "../../redux/slices/ui.slice"

export default function SideNavLink({ link }: { link: NavLinkItem }) {
  const location = useLocation()
  const isActive = useMemo(
    () =>
      location.pathname === "/"
        ? link.href === location.pathname
        : location.pathname.toLowerCase().startsWith(link.href.toLowerCase()),
    [location.pathname, link.href],
  )
  const { isNavOpen } = useAppSelector((store) => store.ui)
  const dispatch = useAppDispatch()
  return (
    <>
      <ReactRouterNavLink
        to={link.href}
        onClick={() => isNavOpen && dispatch(toggleNavOpen(false))}
        className={`${isActive ? "text-primary-dark before:relative before:h-[60px]" : "text-primary-grey before:h-0"} flex gap-6 relative items-center before:w-1.5 before:block before:bg-current before:transition-all before:rounded-tr-[10px] before:rounded-br-[10px] before:mr-3  transition-colors min-h-[61.6px] cursor-pointer hover:text-primary-dark-blue hover:before:h-[60px]`}
      >
        {link.icon}
        <span className="ml-0.5 text-lg font-medium">{link.textContent}</span>
      </ReactRouterNavLink>
    </>
  )
}
