"use client";

import { getTags, getTools, TOOLS } from "@/data/tools";
import { Tag } from "../elements/tag";
import { ToolCard } from "./tool-card";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n";

export const ToolsList = () => {
  const locale = useLocale() as Locale;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onTagClick = (tag: string) => () => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const tools = getTools(locale);
  const tags = getTags(locale);

  const filteredTools = tools.filter((tool) => {
    return selectedTags.length === 0
      ? true
      : tool.tags.some((tag) => selectedTags.includes(tag));
  });

  return (
    <div className={"space-y-4"}>
      <div className={"flex gap-3 flex-wrap"}>
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Tag
              key={tag}
              onClick={onTagClick(tag)}
              variant={isSelected ? "contained" : "outlined"}
              className={"cursor-pointer"}
            >
              {tag}
            </Tag>
          );
        })}
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-3"}>
        <AnimatePresence mode={"popLayout"}>
          {filteredTools.map((tool) => {
            return <ToolCard {...tool} key={tool.name} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
