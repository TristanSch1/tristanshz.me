import { ParamsWithLocale } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Homepage");
  return (
    <div>
      <p className={"headline"}>{t("headline")}</p>
    </div>
  );
};

export default Page;
