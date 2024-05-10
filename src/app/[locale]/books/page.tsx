import { BookReviewCard } from "@/components/book-reviews/book-review-card";
import { getBookReviews } from "@/db/book-reviews";
import { ParamsWithLocale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: ParamsWithLocale }) => {
  unstable_setRequestLocale(params.locale);

  const bookReviews = getBookReviews();

  return (
    <div className={"space-y-8"}>
      <h1 className={"title-1"}>Book Reviews</h1>
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
