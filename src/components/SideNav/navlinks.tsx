import { ReactNode } from "react"
import BankIcon from "../../assets/icons/BankIcon"
import CardIcon from "../../assets/icons/CardIcon"
import HomeIcon from "../../assets/icons/HomeIcon"
import LoanIcon from "../../assets/icons/LoanIcon"
import PrivilegesIcon from "../../assets/icons/PrivilegesIcon"
import ServicesIcon from "../../assets/icons/Services"
import SettingsIconFilled from "../../assets/icons/SettingsIconFilled"
import TransactionIcon from "../../assets/icons/TransactionIcon"
import UserIcon from "../../assets/icons/UserIcon"

export class NavLinkItem {
  textContent: ReactNode
  icon: ReactNode
  href: string
  constructor({
    href,
    icon,
    textContent,
  }: {
    textContent: ReactNode
    icon: ReactNode
    href: string
  }) {
    this.href = href
    this.icon = icon
    this.textContent = textContent
  }
}

export const navLinks = [
  new NavLinkItem({ textContent: "Dashboard", href: "/", icon: <HomeIcon /> }),
  new NavLinkItem({
    textContent: "Transactions",
    href: "/transactions",
    icon: <TransactionIcon />,
  }),
  new NavLinkItem({ textContent: "Accounts", href: "/accounts", icon: <UserIcon /> }),
  new NavLinkItem({ textContent: "Investments", href: "/investments", icon: <BankIcon /> }),
  new NavLinkItem({ textContent: "Credit Cards", href: "/credit-cards", icon: <CardIcon /> }),
  new NavLinkItem({ textContent: "Loans", href: "/loans", icon: <LoanIcon /> }),
  new NavLinkItem({ textContent: "Services", href: "/services", icon: <ServicesIcon /> }),
  new NavLinkItem({
    textContent: "My Privileges",
    href: "/my-privileges",
    icon: <PrivilegesIcon />,
  }),
  new NavLinkItem({ textContent: "Settings", href: "/settings", icon: <SettingsIconFilled /> }),
]

export const settingsLinks = [
  new NavLinkItem({ textContent: "Edit Profile", href: "/settings", icon: <></> }),
  new NavLinkItem({
    textContent: "Preferences",
    href: "/settings/preferences",
    icon: <></>,
  }),
  new NavLinkItem({ textContent: "Security", href: "/settings/security", icon: <></> }),
]
