import { usePathname } from "next/navigation";
import { LOCALES } from "../i18n";

export const usePathnameWithoutLocale = () => {
  const pathname = usePathname();

  return pathname.replace(new RegExp(`^/(${LOCALES.join("|")})`), "");
};
