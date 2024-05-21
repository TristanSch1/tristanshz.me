import { getBlogPosts } from "@/db/blog-posts";
import { ParamsWithLocale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);

  const blogPosts = getBlogPosts(params.locale);

  return (
    <div className={"space-y-8 sm:space-y-12"}>
      <div className={"space-y-4"}>
        {blogPosts.map((review) => {
          return <div key={review.slug} />;
        })}
      </div>
    </div>
  );
};

export default Page;
