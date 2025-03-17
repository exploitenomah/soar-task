import { Outlet } from "react-router"
import { MobileSideNav, DesktopSideNav } from "../components/SideNav/SideNav"

export default function MainLayout() {
  return (
    <div className="relative h-screen overflow-y-auto flex ">
      <MobileSideNav />
      <DesktopSideNav />
      <div className="py-[22px] px-[25px] lg:py-6 lg:px-10">
        <Outlet />
      </div>
    </div>
  )
}
