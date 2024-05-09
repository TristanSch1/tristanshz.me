import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const tagVariants = cva("border w-fit", {
  variants: {
    size: {
      sm: "p-1 text-xs",
      md: "p-2 text-sm",
      lg: "p-3 text-base",
    },
    variant: {
      contained: "bg-primary-light text-primary",
      outlined: "border-primary-light text-primary-light",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outlined",
  },
});

interface TagProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size">,
    VariantProps<typeof tagVariants> {
  children: React.ReactNode;
}

export const Tag = ({ className, size, variant, ...props }: TagProps) => {
  return (
    <div className={cn(tagVariants({ size, variant }), className)} {...props} />
  );
};
