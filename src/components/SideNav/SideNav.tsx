import { navLinks } from "./navlinks"
import SideNavLink from "./SideNavLink"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import Drawer from "../reusable/Drawer"
import { toggleNavOpen } from "../../redux/slices/ui.slice"
import { Link } from "react-router"
import AppLogo from "../../assets/icons/AppLogo"

export default function SideNav() {
  return (
    <nav className="flex flex-col gap-[47px] pt-[31px]">
      <Link to="/" className="ml-[38px] cursor-pointer hover:brightness-125 transition-all">
        <AppLogo />
        <span className="sr-only">Soar Task</span>
      </Link>
      <ul className="flex flex-col">
        {navLinks.map((link) => (
          <li key={link.href}>
            <SideNavLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function DesktopSideNav() {
  return (
    <>
      <div className="hidden md:block sticky inset-y-0 border-r-solid border-r border-r-[#E6EFF5] grow shrink-0 min-w-[250px] h-full">
        <SideNav />
      </div>
    </>
  )
}

export function MobileSideNav() {
  const { isNavOpen } = useAppSelector((store) => store.ui)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="md:hidden">
        <Drawer
          isOpen={isNavOpen}
          onClose={() => dispatch(toggleNavOpen(false))}
          position={"left"}
          width={""}
          closeOnOutsideClick={true}
        >
          <div className="pr-12">
            <SideNav />
          </div>
        </Drawer>
      </div>
    </>
  )
}
