import { Locale } from "@/i18n";

export type Tool = {
  name: string;
  localized: Record<Locale, { description: string; tags: string[] }>;
  url: string;
  icon: string;
};
