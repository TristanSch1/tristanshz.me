import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

export type ParamsWithLocale<T extends Record<string, any> = {}> = T & {
  locale: Locale;
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});
