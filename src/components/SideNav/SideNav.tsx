import { navLinks } from "./navlinks"
import SideNavLink from "./SideNavLink"

export default function SideNav() {
  return (
    <nav className={``}>
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
