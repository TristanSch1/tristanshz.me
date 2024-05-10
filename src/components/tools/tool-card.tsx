import Image from "next/image";
import { Tag } from "../elements/tag";
import { forwardRef } from "react";
import { LocalizedTool } from "@/data/tools";
import { AnimatedCard } from "../elements/animated-card";

export const ToolCard = forwardRef<HTMLDivElement, LocalizedTool>(
  (props, ref) => {
    return (
      <AnimatedCard layout ref={ref}>
        <a
          className={"h-full flex flex-col md:flex-row group"}
          href={props.url}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <div
            className={
              "flex items-center justify-center h-full p-4 border-b-2 border-r-0 md:border-b-0 md:border-r-2"
            }
          >
            <Image
              src={props.icon}
              alt={props.name}
              width={64}
              height={64}
              className={
                "w-10 h-10 md:w-16 md:h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-200 ease-out"
              }
            />
          </div>
          <div className={"flex-1 h-full flex flex-col gap-2 px-4 py-4"}>
            <h3 className={"title-3"}>{props.name}</h3>
            <p className={"text-sm"}>{props.description}</p>
            <div className={"flex flex-wrap gap-1 text-sm mt-auto"}>
              {props.tags.map((tag) => {
                return (
                  <Tag key={tag} size={"sm"}>
                    {tag}
                  </Tag>
                );
              })}
            </div>
          </div>
        </a>
      </AnimatedCard>
    );
  },
);

ToolCard.displayName = "ToolCard";
