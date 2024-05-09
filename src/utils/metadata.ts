import { ParamsWithLocale } from "@/i18n";
import { type Metadata } from "next";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export function metadataFromTranslations(
  namespace: string,
  merge: Partial<Metadata> = {},
) {
  return async function generateMetadata({
    params,
  }: {
    params: ParamsWithLocale;
  }): Promise<Metadata> {
    unstable_setRequestLocale(params.locale);

    const t = await getTranslations({
      locale: params.locale,
      namespace: "Metadata",
    });

    return {
      title: t(`${namespace}.title`),
      description: t(`${namespace}.description`),
      ...merge,
    };
  };
}
