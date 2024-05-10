import { MDXRemote } from "next-mdx-remote/rsc";
import { ComponentPropsWithoutRef } from "react";

let components = {};

type Props = ComponentPropsWithoutRef<typeof MDXRemote>;

export const CustomMDX = (props: Props) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
