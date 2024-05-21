import { Github } from "lucide-react";
import { NavItem } from "./nav-item";
import { getTranslations } from "next-intl/server";

const NAVIGATION = [
  {
    labelKey: "tools",
    href: "/tools",
  },
  {
    labelKey: "blogs",
    href: "/blogs",
  },
];

const GITHUB_PROFILE = "https://github.com/TristanSch1";

export const Header = async () => {
  const t = await getTranslations("Header");
  return (
    <header className={"h-20 w-full flex items-center px-8 bg-background"}>
      <NavItem href={"/"}>
        <div className={"h-6 w-6 rounded bg-primary-light"} />
      </NavItem>
      <nav className={"flex items-center flex-1 justify-end gap-6"}>
        {NAVIGATION.map(({ labelKey, href }) => (
          <NavItem href={href} key={href}>
            {t("nav." + labelKey)}
          </NavItem>
        ))}
        <NavItem href={GITHUB_PROFILE}>
          <Github />
        </NavItem>
      </nav>
    </header>
  );
};
