import { Github } from "lucide-react";
import { NavItem } from "./nav-item";

const NAVIGATION = [
  {
    label: "Tools",
    href: "/tools",
  },
];

const GITHUB_PROFILE = "https://github.com/TristanSch1";

export const Header = () => {
  return (
    <header className={"h-20 w-screen fixed top-0 flex items-center px-8"}>
      <NavItem href={"/"}>
        <div className={"h-6 w-6 rounded bg-primary-light"} />
      </NavItem>
      <nav className={"flex items-center flex-1 justify-end gap-6"}>
        {NAVIGATION.map(({ label, href }) => (
          <NavItem href={href} key={href}>
            {label}
          </NavItem>
        ))}
        <NavItem href={GITHUB_PROFILE}>
          <Github />
        </NavItem>
      </nav>
    </header>
  );
};
