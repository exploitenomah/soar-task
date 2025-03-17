import { Outlet } from "react-router";
import TabNavigation from "../components/reusable/TabNavigation/TabNavigation";
import { settingsLinks } from "../components/SideNav/navlinks";

export default function SettingsLayout() {
  return (
    <>
      <TabNavigation tabLinks={settingsLinks} />
      <Outlet />
    </>
  )
}
