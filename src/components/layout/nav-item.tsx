"use client";

import { cn } from "@/lib/utils";
import { usePathnameWithoutLocale } from "@/utils/pathname";
import Link from "next/link";
import { PropsWithChildren } from "react";

type NavItemProps = {
  href: string;
};

export const NavItem = ({
  href,
  children,
}: PropsWithChildren<NavItemProps>) => {
  const pathname = usePathnameWithoutLocale();
  const isActive = pathname === href;

  const style = cn("block text-muted-foreground hover:text-foreground", {
    "underline text-foreground": isActive,
  });

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={style} key={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={style} href={href} target={"_blank"} rel={"noopenner"}>
      {children}
    </a>
  );
};
