import { ContentMetadata } from "@/utils/mdx";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  metadata: ContentMetadata;
  slug: string;
};

export const BookReviewCard = ({ metadata: m, slug }: Props) => {
  return (
    <Link
      href={slug}
      className={
        "flex flex-col sm:flex-row items-center sm:items-start relative bg-card border-2 px-2 sm:px-4 py-3 sm:py-6 gap-2 sm:gap-4"
      }
    >
      <div
        className={
          "w-20 h-auto aspect-[10/14] sm:w-24 md:w-28 lg:w-32 border-2 self-auto sm:self-center"
        }
      >
        {m.image ? (
          <Image
            src={m.image}
            alt={m.title}
            width={200}
            height={300}
            className={"w-full h-full object-cover"}
          />
        ) : (
          <div className={"w-full h-full bg-muted"} />
        )}
      </div>
      <div className={"flex-1 flex flex-col gap-4"}>
        <h2 className={"title-2"}>{m.title}</h2>
        <p>{m.summary}</p>
        <MoveRight
          className={"self-end static sm:absolute right-2 bottom-2"}
          size={28}
        />
      </div>
    </Link>
  );
};
