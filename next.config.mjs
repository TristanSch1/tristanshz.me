import createMDX from "@next/mdx";
import createNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

const withNextIntl = createNextIntl();

export default withNextIntl(withMDX(nextConfig));
