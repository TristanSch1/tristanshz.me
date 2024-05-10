"use client";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<typeof motion.div>;
export const AnimatedCard = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "tween" }}
        className={cn(
          "bg-card border-2 hover:bg-primary-lighter transition-colors",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

AnimatedCard.displayName = "AnimatedCard";
