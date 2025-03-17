import { ReactNode } from "react"
import IconButton from "./reusable/IconButton"
import SettingsIconOutlined from "../assets/icons/SettingsIconOutlined"
import NotificationIcon from "../assets/icons/NotificationIcon"
import Avatar from "./reusable/Avatar"
import { Link } from "react-router"
import SearchInput from "./SearchInput"
import MenuIcon from "../assets/icons/MenuIcon"
import { useAppDispatch } from "../redux/hooks"
import { toggleNavOpen } from "../redux/slices/ui.slice"

export default function AppHeader({ heading }: { heading: ReactNode | ReactNode[] }) {
  return (
    <>
      <DesktopHeader heading={heading} />
      <MobileHeader heading={heading} />
    </>
  )
}
export function NotificationButton() {
  return (
    <IconButton bgColor="bg-primary-light" textColor="text-primary-blue">
      <NotificationIcon />
      <span className="sr-only">Notifications</span>
    </IconButton>
  )
}
export function SettingsButton() {
  return (
    <IconButton>
      <SettingsIconOutlined />
      <span className="sr-only">Settings</span>
    </IconButton>
  )
}

export function DesktopHeader({ heading }: { heading: ReactNode | ReactNode[] }) {
  return (
    <>
      <header className="hidden md:flex md:sticky border-b-1 border-b-solid border-b-[#E6EFF5] top-0 z-50 px-10 py-5 bg-white items-center gap-4 lg:gap-[35px]">
        <h1 className="text-logo-text font-semibold text-xl lg:text-[1.75rem] mr-auto">
          {heading}
        </h1>
        <div className="flex items-center gap-[1.9rem]">
          <SearchInput />
          <span className="hidden lg:flex gap-[1.9rem]">
            <SettingsButton />
            <NotificationButton />
          </span>
        </div>
        <Link to="/settings">
          <Avatar src="" alt={"Eddy Cusuma"} name={"Eddy Cusuma"} size="lg" />
        </Link>
      </header>
    </>
  )
}

export function MobileHeader({ heading }: { heading: ReactNode | ReactNode[] }) {
  const dispatch = useAppDispatch()
  return (
    <>
      <header className="md:hidden flex flex-col gap-5 px-[1.6rem] pt-[1.6rem] pb-5 sticky top-0 z-40 bg-white">
        <div className="flex justify-between items-center">
          <button onClick={() => dispatch(toggleNavOpen(true))}>
            <MenuIcon />
            <span className="sr-only">Toggle menu open</span>
          </button>
          <h1 className="text-logo-text font-semibold text-xl">{heading}</h1>
          <Link to="/settings">
            <Avatar src="" alt={"Eddy Cusuma"} name={"Eddy Cusuma"} size="sm" />
          </Link>
        </div>
        <SearchInput />
      </header>
    </>
  )
}
