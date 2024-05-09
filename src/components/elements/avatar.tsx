import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof Image>;

export const Avatar = ({ className, ...props }: Props) => {
  return (
    <Image
      {...props}
      className={cn(
        "rounded-full object-cover object-center border-2 border-black",
        className,
      )}
    />
  );
};
