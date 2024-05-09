import { Locale } from "@/i18n";
import { Tool } from "@/type/tool";

export const TOOLS: Tool[] = [
  {
    name: "Readwise",
    localized: {
      fr: {
        description:
          "Readwise is a service that helps me to remember and review highlights from articles I've read.",
        tags: ["productivity"],
      },
      en: {
        description:
          "Readwise is a service that helps me to remember and review highlights from articles I've read.",
        tags: ["productivity"],
      },
    },
    url: "",
    icon: "/images/tools/readwise.png",
  },
  {
    name: "Obsidian",
    localized: {
      fr: {
        description:
          "Obsidian is a powerful knowledge management tool that I use to take notes, write, and organize my thoughts.",
        tags: ["productivity", "writing"],
      },
      en: {
        description:
          "Obsidian is a powerful knowledge management tool that I use to take notes, write, and organize my thoughts.",
        tags: ["productivity", "writing"],
      },
    },
    url: "",
    icon: "/images/tools/obsidian.png",
  },
  {
    name: "ColorSlurp",
    localized: {
      fr: {
        description:
          "ColorSlurp is a color picker that helps me to pick colors from anywhere on my screen.",
        tags: ["macOS", "design"],
      },
      en: {
        description:
          "ColorSlurp is a color picker that helps me to pick colors from anywhere on my screen.",
        tags: ["macOS", "design"],
      },
    },
    url: "https://colorslurp.com/",
    icon: "/images/tools/colorslurp.png",
  },
  {
    name: "Rive",
    localized: {
      fr: {
        description:
          "Rive is a design tool that I use to create animations and illustrations.",
        tags: ["design"],
      },
      en: {
        description:
          "Rive is a design tool that I use to create animations and illustrations.",
        tags: ["design"],
      },
    },
    url: "https://rive.app/",
    icon: "/images/tools/rive.png",
  },
  {
    name: "Feedly",
    localized: {
      fr: {
        description:
          "Feedly is a news aggregator that I use to find interesting articles to read.",
        tags: ["productivity", "reading"],
      },
      en: {
        description:
          "Feedly is a news aggregator that I use to find interesting articles to read.",
        tags: ["productivity", "reading"],
      },
    },
    url: "https://feedly.com",
    icon: "/images/tools/feedly.png",
  },
  {
    name: "Arc",
    localized: {
      fr: {
        description:
          "My main web browser, I fall in love with it, it's incredibly smooth and well designed.",
        tags: ["productivity", "web"],
      },
      en: {
        description:
          "My main web browser, I fall in love with it, it's incredibly smooth and well designed.",
        tags: ["productivity", "web"],
      },
    },
    url: "https://arc.net/",
    icon: "/images/tools/arc.png",
  },
  {
    name: "Rectangle",
    localized: {
      fr: {
        description:
          "Rectangle is a window manager that helps me to organize my screen.",
        tags: ["macOS"],
      },
      en: {
        description:
          "Rectangle is a window manager that helps me to organize my screen.",
        tags: ["macOS"],
      },
    },
    url: "https://rectangleapp.com/",
    icon: "/images/tools/rectangle.png",
  },
];

export const getTools = (locale: Locale) => {
  return TOOLS.map((tool) => ({
    ...tool.localized[locale],
    name: tool.name,
    url: tool.url,
    icon: tool.icon,
  }));
};

export type LocalizedTool = ReturnType<typeof getTools>[number];

export const getTags = (locale: Locale) => {
  const tags = TOOLS.flatMap((tool) => tool.localized[locale].tags);

  return Array.from(new Set(tags));
};
