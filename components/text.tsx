import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends ComponentProps<"p"> {}
export function Text({ className, children }: TextProps) {
  return (
    <p className={twMerge("text-sm sm:text-base  antialiased", className)}>
      {children}
    </p>
  );
}
