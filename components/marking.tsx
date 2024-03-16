import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface MarkingProps extends ComponentProps<"span"> {}

export function Marking({ className, children }: MarkingProps) {
  return (
    <span className={twMerge("font-semibold", className)}>{children}</span>
  );
}
