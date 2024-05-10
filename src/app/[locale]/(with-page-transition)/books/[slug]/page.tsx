import { CustomMDX } from "@/components/mdx";
import { getBookReviews } from "@/db/book-reviews";
import { ParamsWithLocale } from "@/i18n";
import { ChevronLeft } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: ParamsWithLocale<{ slug: string }> }) => {
  unstable_setRequestLocale(params.locale);

  const bookReview = getBookReviews().find(
    (review) => review.slug === params.slug,
  );

  if (!bookReview) {
    notFound();
  }

  return (
    <div className={"space-y-8"}>
      <div className={"space-y-4"}>
        <h1 className={"title-1"}>{bookReview.metadata.title}</h1>
      </div>
      <article className={"prose prose-neutral dark:prose-invert"}>
        <CustomMDX source={bookReview.content} />
      </article>
    </div>
  );
};

export default Page;
