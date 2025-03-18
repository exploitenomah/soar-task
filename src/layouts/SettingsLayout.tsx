import { Outlet } from "react-router"
import TabNavigation from "../components/reusable/TabNavigation/TabNavigation"
import { settingsLinks } from "../components/SideNav/navlinks"

export default function SettingsLayout() {
  return (
    <>
      <div className="bg-white px-5 pt-[1.4rem] md:p-[1.875rem] rounded-[15px] md:rounded-[25px]">
        <TabNavigation tabLinks={settingsLinks} />
        <div className="px-5 md:px-[1.875rem] pt-[2.8125rem] md:pt-[2.5625rem] min-h-[65dvh]">
          <Outlet />
        </div>
      </div>
    </>
  )
}
