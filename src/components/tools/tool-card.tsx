"use client";
import Image from "next/image";
import { Tag } from "../elements/tag";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { LocalizedTool } from "@/data/tools";

export const ToolCard = forwardRef<HTMLAnchorElement, LocalizedTool>(
  (props, ref) => {
    return (
      <motion.a
        ref={ref}
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "tween" }}
        className={"border-2 h-full flex flex-col md:flex-row bg-card group"}
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
      </motion.a>
    );
  },
);

ToolCard.displayName = "ToolCard";
