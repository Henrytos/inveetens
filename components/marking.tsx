import clsx from "clsx";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface MarkingProps extends ComponentProps<"span"> {
  isText?: boolean;
}

export function Marking({ className, children, isText = false }: MarkingProps) {
  return (
    <span
      className={twMerge(
        clsx("font-semibold bg-primary/50 text-primary-foreground  px-2", {
          "px-1 text-base font-normal  bg-primary/15 text-primary": isText,
        }),
        className
      )}
    >
      {children}
    </span>
  );
}
