"use client";
import { Tool } from "@/type/tool";
import Image from "next/image";
import { Tag } from "../elements/tag";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const ToolCard = forwardRef<HTMLDivElement, Tool>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className={"border-2 h-full relative group overflow-hidden flex"}
    >
      <div className={"flex items-center h-full px-4 border-r-2"}>
        <Image src={props.icon} alt={props.name} width={64} height={64} />
      </div>
      <div className={"flex-1 h-full flex flex-col gap-2 pl-4 py-4"}>
        <h3>{props.name}</h3>
        <p className={"body text-sm"}>{props.description}</p>
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
    </motion.div>
  );
});

ToolCard.displayName = "ToolCard";
