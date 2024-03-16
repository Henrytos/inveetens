import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps extends ComponentProps<"h1"> {}

export function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={twMerge(
        " text-2xl sm:text-3xl before:w-1 before:h-8 before:bg-primary  before:block flex gap-2 items-center text-foreground",
        className
      )}
    >
      <span>{children}</span>
    </h1>
  );
}
