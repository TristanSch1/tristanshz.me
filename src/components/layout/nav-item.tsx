"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type NavItemProps = {
  href: string;
};

export const NavItem = ({
  href,
  children,
}: PropsWithChildren<NavItemProps>) => {
  const pathname = usePathname();
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
