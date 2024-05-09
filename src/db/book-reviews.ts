import { DEFAULT_LOCALE, Locale } from "@/i18n";
import { getMDXData } from "@/utils/mdx";
import path from "path";

export function getBookReviews(locale?: Locale) {
  return getMDXData(
    path.join(
      process.cwd(),
      "content",
      locale ?? DEFAULT_LOCALE,
      "book-reviews",
    ),
  );
}
