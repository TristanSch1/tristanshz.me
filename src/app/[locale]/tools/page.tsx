import { ToolsList } from "@/components/tools/tools-list";
import { getTools, getTags } from "@/data/tools";
import { ParamsWithLocale } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Tools");
  const tools = getTools(params.locale);
  const tags = getTags(params.locale);
  return (
    <div className={"space-y-8"}>
      <div className={"space-y-4"}>
        <h1 className={"title-1"}>{t("title")}</h1>
        <p>{t("description")}</p>
        <p>{t("description-2")}</p>
      </div>
      <ToolsList tools={tools} tags={tags} />
    </div>
  );
};

export default Page;
