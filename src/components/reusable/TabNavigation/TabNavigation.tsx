import { NavLinkItem } from "../../SideNav/navlinks"
import TabLink from "./TabLink"

export default function TabNavigation({ tabLinks }: { tabLinks: NavLinkItem[] }) {
  return (
    <>
      <nav>
        <ul className="flex justify-around md:justify-start md:gap-[59px] border-b border-b-solid border-b-[#F4F5F7]">
          {tabLinks.map((link) => (
            <li key={link.href} className="">
              <TabLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
