import { ParamsWithLocale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);
  return <div></div>;
};

export default Page;
