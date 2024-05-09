import { Tool } from "@/type/tool";

export const TOOLS: Tool[] = [
  {
    name: "Readwise",
    description:
      "Readwise is a service that helps me to remember and review highlights from articles I've read.",
    url: "",
    icon: "/images/tools/readwise.png",
    tags: ["productivity"],
  },
  {
    name: "Obsidian",
    description:
      "Obsidian is a powerful knowledge management tool that I use to take notes, write, and organize my thoughts.",
    url: "",
    icon: "/images/tools/obsidian.png",
    tags: ["productivity", "writing"],
  },
  {
    name: "ColorSlurp",
    description:
      "ColorSlurp is a color picker that helps me to pick colors from anywhere on my screen.",
    url: "https://colorslurp.com/",
    icon: "/images/tools/colorslurp.png",
    tags: ["macOS", "design"],
  },
  {
    name: "Rive",
    description:
      "Rive is a design tool that I use to create animations and illustrations.",
    url: "https://rive.app/",
    icon: "/images/tools/rive.png",
    tags: ["design"],
  },
  {
    name: "Feedly",
    description:
      "Feedly is a news aggregator that I use to find interesting articles to read.",
    url: "https://feedly.com",
    icon: "/images/tools/feedly.png",
    tags: ["productivity", "reading"],
  },
  {
    name: "Arc",
    description:
      "My main web browser, I fall in love with it, it's incredibly smooth and well designed.",
    url: "https://arc.net/",
    icon: "/images/tools/arc.png",
    tags: ["productivity", "web"],
  },
  {
    name: "Rectangle",
    description:
      "Rectangle is a window manager that helps me to organize my screen.",
    url: "https://rectangleapp.com/",
    icon: "/images/tools/rectangle.png",
    tags: ["macOS"],
  },
];

export const getTags = () => {
  const tags = TOOLS.flatMap((tool) => tool.tags);

  return Array.from(new Set(tags));
};
