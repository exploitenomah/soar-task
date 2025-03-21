import { Outlet } from "react-router"
import TabNavigation from "../components/reusable/TabNavigation/TabNavigation"
import { settingsLinks } from "../components/SideNav/navlinks"
import { PageWrapper } from "../components/reusable/PageWrapper"

export default function SettingsLayout() {
  return (
    <>
      <div className="bg-white px-5 pt-[1.4rem] md:p-[1.875rem] rounded-[15px] md:rounded-[25px] mx-[1.5625rem]">
        <TabNavigation tabLinks={settingsLinks} />
        <PageWrapper>
          <div className="px-5 md:px-[1.875rem] pt-[2.8125rem] md:pt-[2.5625rem] min-h-[65dvh]">
            <Outlet />
          </div>
        </PageWrapper>
      </div>
    </>
  )
}
