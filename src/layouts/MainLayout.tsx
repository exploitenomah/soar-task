import { Outlet, useLocation } from "react-router"
import { MobileSideNav, DesktopSideNav } from "../components/SideNav/SideNav"
import AppHeader from "../components/Header"

const pageTitles = {
  "/": "Overview",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/my-privileges": "My Privileges",
  "/settings": "Settings",
  "/settings/preferences": "Settings",
  "/settings/security": "Settings",
}

export default function MainLayout() {
  const location = useLocation()
  const heading = pageTitles[location.pathname as keyof typeof pageTitles] || "Dashboard"

  return (
    <div className="relative h-screen flex ">
      <MobileSideNav />
      <DesktopSideNav />
      <div className="grow h-screen overflow-y-auto">
        <AppHeader heading={heading} />
        <div className="px-[25px] lg:py-6 lg:px-10 min-h-[3000px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
