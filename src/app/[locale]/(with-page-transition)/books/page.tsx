import { BookReviewCard } from "@/components/book-reviews/book-review-card";
import { getBookReviews } from "@/db/book-reviews";
import { ParamsWithLocale } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);

  const t = await getTranslations("BookReviews");

  const bookReviews = getBookReviews(params.locale);

  return (
    <div className={"space-y-8 sm:space-y-12"}>
      <div className={"space-y-4 sm:space-y-6"}>
        <h1 className={"title-1"}>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
      <div className={"space-y-4"}>
        {bookReviews.map((review) => {
          return (
            <BookReviewCard
              metadata={review.metadata}
              slug={review.slug}
              key={review.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
